import * as vscode from 'vscode';


// 구역의 앞부분에 숫자를 만들어 준다
function makeLineNumberFn(start: vscode.Position, end: vscode.Position, editor: vscode.TextEditor) {
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

export function activate(context: vscode.ExtensionContext) {
	// console.log('Congratulations, your extension "markdown-code-tools" is now active!');
	let makeLineNumber = vscode.commands.registerCommand('markdown-code-tools.makeLineNumber', () => {

		const editor = vscode.window.activeTextEditor;

		if (!editor) {
			vscode.window.showErrorMessage("Editor Does Not Working")
			return
		}


		// vscode는 다중선택이 가능하기 때문에 forEach
		editor.selections.forEach(selection => {
			// line은 1번째 줄이 0이다			
			// vscode.window.showInformationMessage(selection.start.line.toString()+selection.end.line.toString())
			// vscode.window.showInformationMessage(editor.document.lineAt(selection.start.line).text)


			makeLineNumberFn(
				selection.start,
				selection.end,
				editor
			)

			
		});

	});
	context.subscriptions.push(makeLineNumber);


}

export function deactivate() { }
