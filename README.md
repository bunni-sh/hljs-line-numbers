# hljs-line-numbers

line numbers for highlight.js

## usage

```js
import hljs from "highlight.js";
import LineNumbers from "@bunnish/hljs-line-numbers";

hljs.addPlugin(new LineNumbers());

const highlighted = hljs.highlight(code, { language: "js" });
// highlighted.value has rendered html with spans for numbers
```

## how

hooks into `'after:highlight'` and adds spans before every line

the numbers are in `.hljs-line-number:before` via an inline-style, if styling is required

## versioning

compatibility with same major version. minor/patch is for me