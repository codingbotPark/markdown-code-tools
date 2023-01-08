import * as vscode from "vscode"

export function removeLineNumberFn(start: vscode.Position, end: vscode.Position, editor: vscode.TextEditor) {
	let invalidRange = new vscode.Range(start,end);
	let replacedArr:string[] = []

	// configure으로 설정된 값 가져오기
	const gapOfLine:string = vscode.workspace.getConfiguration("markdown-code-tools").get('gapOfLineNumber')!

	for(let i = start.line
		;i<=end.line;
		i++){
			// 현재 라인
			const curText = editor.document.lineAt(i).text

			// 등록된 configure로 split하여서 나눈다, limit을 2로 준다
			const curTextArr:string[] = curText.split(`${gapOfLine}`,2)

			// 삭제하려는 라인에 라인넘버가 없는 상태일 수 있기 때문에 필터링
			// 만약 숫자만 숫자만 나온다면 true
			if (!!Number(curTextArr[0])){ 
				// 앞의 라인넘버 가 있었던 길이를 삭제
				replacedArr.push(`${curText.substring(curText[0].length+gapOfLine.length)}${i===end.line?"":"\n"}`)

			} else { // false일 땐 그대로 현재 문장을 넣어준다
				replacedArr.push(`${editor.document.lineAt(i).text}${i===end.line?"":"\n"}`)
			}
	}

	editor.edit(eb => {
		eb.replace(invalidRange,replacedArr.join(""))
	})

}