let getTextNodes = () => {
  let nodes = document.querySelectorAll("body *");
  let textNodes = [];
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

let textNodes = getTextNodes();

console.log(textNodes);
textNodes.forEach((t) => {
  let reg = new RegExp("[a-zA-Z]+", "g");
  let prevIdx = 0;

  let matches = [...t.textContent.matchAll(reg)];

  matches.forEach((m) => {
    let idx = m.index - prevIdx;
    let eng = t.splitText(idx);
    t = eng.splitText(m[0].length);
    console.log("eng", eng);

    let span = document.createElement("span");
    span.classList.add("en");
    span.appendChild(eng);

    t.parentElement.insertBefore(span, t);

    prevIdx = m.index + m[0].length;
  });
});
