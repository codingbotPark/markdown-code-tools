import * as vscode from 'vscode';
import { makeLineNumberFn, removeLineNumberFn } from './service/lineFn';
import { makeStrongCodeFn } from './service/StrongerFn';

// 에디터를 가져오는 함수는 중복되기 때문에
function getEditor() {
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
	let removeLineNumber = vscode.commands.registerCommand('markdown-code-tools.removeLineNumber', () => {
		editor.selections.forEach(selection => {
			removeLineNumberFn(
				selection.start,
				selection.end,
				editor
			)
		});
	})

	let strongerCode = vscode.commands.registerCommand('markdown-code-tools.strongerCode',() => {
		editor.selections.forEach(selection =>{
			makeStrongCodeFn(
				selection.start,
				selection.end,
				editor
			)
		})
	})

	context.subscriptions.push(makeLineNumber, removeLineNumber,strongerCode);


}

export function deactivate() { }
