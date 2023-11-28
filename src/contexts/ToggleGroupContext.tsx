import { ReactNode, createContext, useContext, useMemo } from 'react';

type ToggleGroupContextType<T> = {
  value: T | null;
  onChange: (value: T) => void;
};

interface ToggleGroupProviderProps<T> {
  children: ReactNode | Array<ReactNode>;
  value: T | null;
  onChange: (value: T) => void;
}

export type ToggleGroupProps<T> = ToggleGroupProviderProps<T> &
  Omit<React.HTMLProps<HTMLDivElement>, keyof ToggleGroupProviderProps<T>>;

/*  CONTEXT DEFINITION  */
export const ToggleGroupContext = createContext<ToggleGroupContextType<any>>({
  value: null,
  onChange: () => {},
});

/* PROVIDER DEFINITION */
export function ToggleGroupProvider<T>({
  value,
  onChange,
  children,
  ...props
}: ToggleGroupProps<T>): JSX.Element {
  const toggleGroupProviderValue = useMemo(
    () => ({
      value,
      onChange,
    }),
    [onChange, value],
  );

  return (
    <ToggleGroupContext.Provider value={toggleGroupProviderValue}>
      <div {...props}>{children}</div>
    </ToggleGroupContext.Provider>
  );
}

/*   EXPORT USE METHOD   */
export function useToggleGroup<T>(): ToggleGroupContextType<T> {
  const context = useContext(ToggleGroupContext);
  if (!context) throw new Error('useToggleGroup must be wrapped within ToggleGroupProvider');
  return context;
}
