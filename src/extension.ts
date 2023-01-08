import * as vscode from 'vscode';
import { makeLineNumber } from './service/makeLineNumber';
import { removeLineNumber } from './service/removeLineNumber';
import { makeStrongCode } from './service/makeStrongCode';

export function activate(context: vscode.ExtensionContext) {
	// makeLine
	let makeLineNumberAction = vscode.commands.registerCommand('markdown-code-tools.makeLineNumber', () => {
		// vscode는 다중선택이 가능하기 때문에 forEach
		makeLineNumber()
	});

	// removeLine
	let removeLineNumberAction = vscode.commands.registerCommand('markdown-code-tools.removeLineNumber', () => {
		removeLineNumber()
	})

	let makeStrongerCodeAction = vscode.commands.registerCommand('markdown-code-tools.strongerCode',() => {
		makeStrongCode()
	})

	context.subscriptions.push(makeLineNumberAction, removeLineNumberAction,makeStrongerCodeAction);

}

export function deactivate() { }
