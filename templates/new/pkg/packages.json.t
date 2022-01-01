---
to: packages/<%= fileName %>/package.json
unless_exists: true
---
{
  "name": "@midnite/<%= fileName %>",
  "version": "1.0.0",
  "description": "<%= description %>",
  "keywords": [
    "<%= fileName %>"
  ],
  "author": "Shohei Kawata <https://github.com/shkwt>",
  "homepage": "https://github.com/midnite/midnite#readme",
  "license": "MIT",
  "main": "dist/midnite-<%= fileName %>.cjs.js",
  "module": "dist/midnite-<%= fileName %>.esm.js",
  "types": "dist/midnite-<%= fileName %>.cjs.d.ts",
  "sideEffects": false,
  "files": [
    "dist",
    "src"
  ],
  "preconstruct": {},
  "publishConfig": {
    "access": "public"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/midnite/midnite.git",
    "directory": "packages/<%= fileName %>"
  },
  "bugs": {
    "url": "https://github.com/midnite/midnite/issues"
  }
}
