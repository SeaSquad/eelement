# eelement

Build HTML using TypeScript.

## Getting Started

### Installation

```bash
npm install @sea-squad/eelement
```

### Usage

```typescript
import { e } from "@sea-squad/eelement";

const myComponent = e.render([
  "html",
  ["head", ["title", "Hello Page"], ["meta", { charset: "UTF-8" }]],
  [
    "body",
    { class: "container" },
    ["h1", "Hello, World!"],
    ["p", "This is a paragraph."],
  ],
]);

console.log(myComponent);
```

#### Result

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Hello Page</title>
    <meta charset="UTF-8">
  </head>
  <body class="container">
    <h1>Hello, World!</h1>
    <p>This is a paragraph</p>
  </body>
</html>
```

## Building

To build the project, run the following command:

```bash
npm run build
```

This will compile the TypeScript files to JavaScript and output them to the `dist` directory.

## Testing

To run the tests, use the following command:

```bash
npm test
```
