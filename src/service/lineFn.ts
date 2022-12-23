import * as vscode from 'vscode';



// 구역의 앞부분에 숫자를 만들어 준다
export function makeLineNumberFn(start: vscode.Position, end: vscode.Position, editor: vscode.TextEditor) {
	let invalidRange = new vscode.Range(start,end);
	let replacedArr:string[] = []

	for(let i = start.line, counter=1
		;i<=end.line;
		i++,counter++){
			replacedArr.push(`${counter}${vscode.workspace.getConfiguration("markdown-code-tools").get('gapOfLineNumber')}${editor.document.lineAt(i).text}${i===end.line?"":"\n"}`)
	}

	editor.edit(eb => {
		eb.replace(invalidRange,replacedArr.join(""))
	})

}


export function removeLineNumberFn(start: vscode.Position, end: vscode.Position, editor: vscode.TextEditor) {
	let invalidRange = new vscode.Range(start,end);
	let replacedArr:string[] = []

	for(let i = start.line
		;i<=end.line;
		i++){
			const curText = editor.document.lineAt(i).text
			// 등록된 configure로 split하여서 나눈다
			const curTextArr:string[] = curText.split(`${vscode.workspace.getConfiguration("markdown-code-tools").get('gapOfLineNumber')}`)
			// 삭제하려는 라인에 라인넘버가 없는 상태일 수 있기 때문에 필터링
			if (!!Number(curText[0])){ // 만약 숫자만 숫자만 나온다면 true
				// 앞의 라인 넘버만 삭제하고 다시 넣어준다
				curTextArr.shift()
				replacedArr.push(`${curTextArr.join("")}${i===end.line?"":"\n"}`)

			} else { // false일 땐 그대로 현재 문장을 넣어준다
				replacedArr.push(`${editor.document.lineAt(i).text}${i===end.line?"":"\n"}`)
			}
	}

	editor.edit(eb => {
		eb.replace(invalidRange,replacedArr.join(""))
	})

}
