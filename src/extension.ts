import * as vscode from 'vscode';
import { makeLineNumberFn,removeLineNumberFn } from './service/lineFn';

// 에디터를 가져오는 함수는 중복되기 때문에
function getEditor(){
	const editor = vscode.window.activeTextEditor;
	if (!editor) {
		vscode.window.showErrorMessage("Editor Does Not Working")
		throw new Error("noExistEditor")
	}
	return editor
}

export function activate(context: vscode.ExtensionContext) {
	const editor = getEditor();

	// makeLine
	let makeLineNumber = vscode.commands.registerCommand('markdown-code-tools.makeLineNumber', () => {
		// vscode는 다중선택이 가능하기 때문에 forEach
		editor.selections.forEach(selection => {
			makeLineNumberFn(
				selection.start,
				selection.end,
				editor
			)
		});
	});

	// removeLine
	let removeLineNumber = vscode.commands.registerCommand('markdown-code-tools.removeLineNumber',() => {
		editor.selections.forEach(selection => {
			removeLineNumberFn(
				selection.start,
				selection.end,
				editor
			)
		});
	})

	context.subscriptions.push(makeLineNumber,removeLineNumber);


}

export function deactivate() { }
