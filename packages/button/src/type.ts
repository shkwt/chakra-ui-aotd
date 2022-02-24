import { MouseEvent, ComponentPropsWithoutRef } from "react";

type BaseProps = {
  isDisabled?: boolean;
  onFocusChange?: (isFocused: boolean) => void;
};

export type ButtonProps = BaseProps &
  Omit<ComponentPropsWithoutRef<"button">, keyof BaseProps>;
