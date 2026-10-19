import { HighlightResult } from "highlight.js";

export class LineNumbers {
  'after:highlight': (result: HighlightResult) => HighlightResult;
}

export default LineNumbers;