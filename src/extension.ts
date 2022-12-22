import * as vscode from 'vscode';

interface IReplaceInfo {
	targetRange: vscode.Range;
	replaceText: string;
}

function makeLineNumberFn(start:number,end:number,lineText:string){

}

export function activate(context: vscode.ExtensionContext) {
	// console.log('Congratulations, your extension "markdown-code-tools" is now active!');
	let makeLineNumber = vscode.commands.registerCommand('markdown-code-tools.makeLineNumber', () => {
		
		const editor = vscode.window.activeTextEditor;
		const replaceInfos:IReplaceInfo[] = [];
		
		if (!editor) {
			vscode.window.showErrorMessage("Editor Does Not Working")
			return
		}

		// vscode는 다중선택이 가능하기 때문에 forEach
		editor.selections.forEach(selection => {
			vscode.window.showInformationMessage(editor.document.getText())
		});

	});
	context.subscriptions.push(makeLineNumber);
	
	
}

export function deactivate() {}
