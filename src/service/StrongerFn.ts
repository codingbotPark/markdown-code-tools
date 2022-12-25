import * as vscode from "vscode"

interface CodeArrayType{
  startLine:number;
  endLine:number;
  data:string;
  type:string;
}

function getCodesInMd(editor:vscode.TextEditor){
  let codeArrays:CodeArrayType[] = []

  // 파일의 라인을 돌린다
  for(let i = 0;i<editor.document.lineCount;i++){
    let temp = editor.document.lineAt(i).text+"\n"
    
  }

}

/**
 * 현재 커서가 있는 마크다운 상의 코드 (```)를 인식,
 * 인식했다면 ```가 시작하는지점, 끝나는 지점을 리턴
 * 만약 커서가 있는 곳이 마크다운 상 코드가 아니라면 -1을 return
 */
function recognizeCodeInMD(start: vscode.Position, end: vscode.Position,editor:vscode.TextEditor){
    
}

// 선택된 마크다운 형식의 코드에서 커서 블록된 라인을 아래에 만들어준다
export function makeStrongCodeFn(start: vscode.Position, end: vscode.Position, editor: vscode.TextEditor){
    let insertedArr:string[] = []


    // vscode.window.showInformationMessage(editor.document.lineAt(editor.document.lineCount - 1).text)

    // vscode.window.showInformationMessage(editor.document.lineCount.toString())

    // vscode.window.showInformationMessage("start"+start.line.toString())
    // vscode.window.showInformationMessage("end"+end.line.toString())

    // 넣을 곳
    // let insertPosition = new vscode.Position() 
    // editor.edit(eb => {
    //     eb.insert(insertPosition,insertedArr.join(""))
    // })

}

/*
  //pre
  md = md.replace(/^\s*\n\`\`\`(([^\s]+))?/gm, '<pre class="$2">');
  md = md.replace(/^\`\`\`\s*\n/gm, '</pre>\n\n');
*/