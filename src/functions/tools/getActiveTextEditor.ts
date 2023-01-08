import * as vscode from "vscode";

export function getActiveTextEditor(){
    const editor = vscode.window.activeTextEditor;
	if (!editor) {
		vscode.window.showErrorMessage("Editor Does Not Working")
		throw new Error("noExistEditor")
	}
	return editor
}