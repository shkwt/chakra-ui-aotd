---
to: packages/<%= fileName %>/src/use-<%= fileName %>.ts
unless_exists: true
---
import React, { useState, useCallback, useMemo } from "react";

export const use<%= name %> = () => {};