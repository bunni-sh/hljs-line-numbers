import hljs from "/node_modules/@highlightjs/cdn-assets/es/highlight.js"
import LineNumbers from "./index.js";

const request = await fetch("./index.js");
const text = await request.text();

hljs.addPlugin(new LineNumbers());

const result = hljs.highlight(text, { language: "js" });

const codeElement = document.querySelector(".code");

codeElement.innerHTML = result.value;

export default {};