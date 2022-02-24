import React, { forwardRef } from "react";
import { ButtonProps } from "./type";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { children, type, value, isDisabled = false, ...rest } = props;

    return (
      <button
        {...rest}
        ref={ref}
        type={type}
        value={value}
        disabled={isDisabled}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";
