---
to: packages/<%= fileName %>/tests/index.test.tsx
unless_exists: true
---
import React from "react";
import { render, userEvent, fireEvent } from "@midnite/test-utils";
import { <%= name %> } from "../src";

describe("<%= name %>", () => {
  test("should ...", () => {})
})