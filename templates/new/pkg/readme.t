---
to: packages/<%= fileName %>/README.md
unless_exists: true
---
# @midnite/<%= fileName %>

An <%= fileName %> is a ...


## Installation

```sh
yarn add @midnite/<%= fileName %>

# or

npm i @midnite/<%= fileName %>
```

## Import Components

```jsx
import { <%= name %> } from "@midnite/<%= fileName %>"
```

## Component:

- `<%= name %>`: Write about component.

## Usage

```jsx
<<%= name %>><%= name %></<%= name %>>
```

## References: