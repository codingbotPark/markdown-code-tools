import { makeStrongCodeFn } from "../functions/makeStrongCodeFn"
import { getActiveTextEditor } from "../functions/tools/getActiveTextEditor"

export function makeStrongCode(){
    const editor = getActiveTextEditor()
    editor.selections.forEach(selection =>{
        makeStrongCodeFn(
            selection.start,
            selection.end,
            editor
        )
    })
}