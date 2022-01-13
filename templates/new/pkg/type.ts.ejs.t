---
to: packages/<%= fileName %>/src/type.ts
unless_exists: true
---
import { MouseEvent, ComponentPropsWithoutRef } from "react";

type BaseProps = {}

export type <%= name %>Props = BaseProps &
  Omit<ComponentPropsWithoutRef<>, keyof BaseProps>;
