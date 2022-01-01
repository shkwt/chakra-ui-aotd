---
to: packages/<%= fileName %>/src/index.ts
unless_exists: true
---
export * from "./<%= fileName %>";