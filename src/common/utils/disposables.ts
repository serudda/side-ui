import { microTask } from './microTask';

export type Disposables = ReturnType<typeof disposables>;

export function disposables() {
  const _disposables: Function[] = [];

  const api = {
    addEventListener<TEventName extends keyof WindowEventMap>(
      element: HTMLElement | Window | Document,
      name: TEventName,
      listener: (event: WindowEventMap[TEventName]) => any,
      options?: boolean | AddEventListenerOptions,
    ) {
      element.addEventListener(name, listener as any, options);
      return api.add(() => element.removeEventListener(name, listener as any, options));
    },

    requestAnimationFrame(...args: Parameters<typeof requestAnimationFrame>) {
      const raf = requestAnimationFrame(...args);
      return api.add(() => cancelAnimationFrame(raf));
    },

    nextFrame(...args: Parameters<typeof requestAnimationFrame>) {
      return api.requestAnimationFrame(() => {
        return api.requestAnimationFrame(...args);
      });
    },

    setTimeout(...args: Parameters<typeof setTimeout>) {
      const timer = setTimeout(...args);
      return api.add(() => clearTimeout(timer));
    },

    microTask(...args: Parameters<typeof microTask>) {
      const task = { current: true };
      microTask(() => {
        if (task.current) {
          args[0]();
        }
      });
      return api.add(() => {
        task.current = false;
      });
    },

    style(node: HTMLElement, property: string, value: string) {
      const previous = node.style.getPropertyValue(property);
      Object.assign(node.style, { [property]: value });
      return this.add(() => {
        Object.assign(node.style, { [property]: previous });
      });
    },

    group(cb: (d: typeof this) => void) {
      const d = disposables();
      cb(d);
      return this.add(() => d.dispose());
    },

    add(cb: () => void) {
      _disposables.push(cb);
      return () => {
        const idx = _disposables.indexOf(cb);
        if (idx >= 0) {
          for (const dispose of _disposables.splice(idx, 1)) {
            dispose();
          }
        }
      };
    },

    dispose() {
      for (const dispose of _disposables.splice(0)) {
        dispose();
      }
    },
  };

  return api;
}
