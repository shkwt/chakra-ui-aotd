---
to: packages/<%= fileName %>/src/<%= fileName %>.tsx
unless_exists: true
---
import React, { forwardRef } from "react";
import { <%= name %>Props } from "./type";

export const <%= name %> = forwardRef<HTMLElement, <%= name %>Props>((props, ref) => {
  return (
    <div></div>
  );
});

<%= name %>.displayName = "<%= name %>";