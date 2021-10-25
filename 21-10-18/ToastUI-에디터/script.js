document.addEventListener("DOMContentLoaded", () => {
  console.log(toastui);
  const { Editor } = toastui;

  const editor = new Editor({
    el: document.querySelector("#editor"),
    initialEditType: "wysiwyg",
    plugins: [Editor.plugin.colorSyntax],
    language: "ko-KR",
    hideModeSwitch: true,
    placeholder: "내용을 입력하세요"
  })
})

let a = [1, 2, 3, 4, 5];

a.forEach(i => {
  console.log(i);

  if(i == 3) {
    return false;
  }
})

/*
@ResponseBody
@RequestMapping(value="checkDelete.ns", method=RequestMethod.POST)

public String ajaxDeleteChecked(@RequestParam(value="dataList[]") List<Gson> dataList, String filePath, HttpSessionsession,)
*/