import { MouseEvent, ComponentPropsWithoutRef } from "react";

type BaseProps = {
  isDisabled?: boolean;
};

export type ButtonProps = BaseProps &
  Omit<ComponentPropsWithoutRef<"button">, keyof BaseProps>;
