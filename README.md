# SeaSquad Eelement

![Eelement](https://raw.githubusercontent.com/SeaSquad/eelement/refs/heads/main/eelement.png)

Build HTML using TypeScript.

## Getting Started

### Installation

```bash
npm install @sea-squad/eelement
```

### Overview

- Build html in the TypeScript language using tuples
- Just remember: an opening bracket indicates a new html element
- Tuple structure is automatically formatted to be readable and html-like using a standard code formatter
- First tuple element is the html tag name, optionally the second tuple element is an object of attributes, remaining tuple elements will become children of the element
- String children are html escaped to avoid cross-site scripting (XSS), with the exception of `script` and `style` html elements
- Output is a spec-compliant html string properly accounting for void and non-void elements
- TypeScript enforces that no children may be passed to void elements

### Usage

```typescript
import { render } from "@sea-squad/eelement";

const myComponent = render([
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

### Use Cases

This will serve you well if you:

- Want something JSX-like, without investing in JSX
- Need Type safety by staying in TypeScript
- Want something with more guard rails to write proper html than a string template literal
- Need auto-escaping of user-defined strings
- Need i18n (can just us a `t` function where needed)
- Are taking a hypermedia approach (htmx, datastar, fixi.js, plain html, etc)
- Are writing plain TypeScript web components

This will not be a good fit if you:

- Need to send chunked html responses (produces the whole document string at once)

### Development

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
