let getTextNodes = () => {
  let nodes = document.querySelectorAll("body *");
  let textNodes = [];
  //var leafNodes = nodes.filter((el) => !el.hasChildNodes());
  nodes.forEach((el) => {
    if (el.hasChildNodes()) {
      for (let i = 0; i < el.childNodes.length; i++) {
        if (
          el.childNodes[i].nodeType === Node.TEXT_NODE &&
          el.tagName !== "SCRIPT"
        ) {
          textNodes.push(el.childNodes[i]);
        }
      }
    }
  });
  return textNodes;
};

console.log(getTextNodes());

let textNodes = getTextNodes();

textNodes.forEach((t) => {
  let reg = new RegExp("[a-zA-Z]+", "g");
  let prevIdx = 0;

  let matches = [...t.textContent.matchAll(reg)];
  console.log(matches);

  matches.forEach((m, i) => {
    let idx = m.index - prevIdx;
    let eng = t.splitText(m.index - prevIdx);
    t = eng.splitText(m[0].length);

    console.log(eng.nodeValue);

    let span = document.createElement("span");
    span.classList.add("en");
    span.appendChild(eng);

    t.parentElement.insertBefore(span, t);

    prevIdx = m.index + m[0].length;
  });
});
