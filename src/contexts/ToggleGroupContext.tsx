import {
  ComponentPropsWithoutRef,
  createContext,
  useContext,
  useMemo,
  type ReactNode,
} from 'react';

export type ToggleGroupContextType = {
  value: string | null;
  onChange: (value: string) => void;
};

interface ToggleGroupProviderProps {
  children: ReactNode | Array<ReactNode>;
  value: string | null;
  onChange: (value: string) => void;
}

export type ToogleGroupProps = ToggleGroupProviderProps &
  Omit<ComponentPropsWithoutRef<'div'>, keyof ToggleGroupProviderProps>;

/*  CONTEXT DEFINITION  */
export const ToggleGroupContext = createContext<ToggleGroupContextType>({
  value: null,
  onChange: () => {},
});

/* PROVIDER DEFINITION */
export const ToggleGroupProvider = ({
  value,
  onChange,
  children,
  ...props
}: ToogleGroupProps): JSX.Element => {
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
};

/*   EXPORT USE METHOD   */
export const useToggleGroup = (): ToggleGroupContextType => {
  const context = useContext(ToggleGroupContext);
  if (!context) throw new Error('useToggleGroup must be wrapped within ToggleGroupProvider');
  return context;
};
