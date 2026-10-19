class LineNumbers {
  'after:highlight'(result) {
    const lineDiv = (number) => 
      `<span class="hljs-line-number" data-line-number="${number.toString().padStart(maxWidth, " ")}"></span>`;

    const lines = result.value.split("\n");
    const maxWidth = lines.length.toString().length;
    const numbered = lines.map((line, index) => `${lineDiv(index+1)}${line}`);
    result.value = numbered.join("\n");
    result.value += `<style>.hljs-line-number:before{content:attr(data-line-number)}</style>`;
  }
}

export default LineNumbers;