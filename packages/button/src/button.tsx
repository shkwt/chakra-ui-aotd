import React, { forwardRef } from "react";
import { ButtonProps } from "./type";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {} = props;

    return <button></button>;
  },
);

Button.displayName = "Button";
