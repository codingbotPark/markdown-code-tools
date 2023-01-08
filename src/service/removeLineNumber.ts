import { getActiveTextEditor } from "../functions/tools/getActiveTextEditor";
import { makeLineNumberFn } from "../functions/makeLineNumberFn";

export function removeLineNumber(){
    const editor = getActiveTextEditor()
    editor.selections.forEach(selection => {
        makeLineNumberFn(
            selection.start,
            selection.end,
            editor
        )
    });
}