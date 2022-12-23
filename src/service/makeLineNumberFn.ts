import * as vscode from 'vscode';

// 구역의 앞부분에 숫자를 만들어 준다
export function makeLineNumberFn(start: vscode.Position, end: vscode.Position, editor: vscode.TextEditor) {
	let invalidRange = new vscode.Range(start,end);
	let replacedArr:string[] = []

	for(let i = start.line, counter=1
		;i<=end.line;
		i++,counter++){
			replacedArr.push(`${counter}  ${editor.document.lineAt(i).text}${i===end.line?"":"\n"}`)
	}

	editor.edit(eb => {
		eb.replace(invalidRange,replacedArr.join(""))
	})

}


export function removeLineNumberFn(start: vscode.Position, end: vscode.Position, editor: vscode.TextEditor) {
	let invalidRange = new vscode.Range(start,end);
    let source = []
	let replacedArr:string[] = []

	for(let i = start.line, counter=1
		;i<=end.line;
		i++,counter++){
			replacedArr.push(`${counter}  ${editor.document.lineAt(i).text}${i===end.line?"":"\n"}`)
	}

	editor.edit(eb => {
		eb.replace(invalidRange,replacedArr.join(""))
	})

}