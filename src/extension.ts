import * as vscode from 'vscode';

var inMarkMode: boolean = false;
export function activate(context: vscode.ExtensionContext): void {
    let cursorMoves: string[] = [
            "cursorUp", "cursorDown", "cursorLeft", "cursorRight",
            "cursorHome", "cursorEnd",
            "cursorWordLeft", "cursorWordRight",
            "cursorPageDown", "cursorPageUp",
            "cursorTop", "cursorBottom"
        ];

    cursorMoves.forEach(element => {
        context.subscriptions.push(vscode.commands.registerCommand(
            "emacs."+element, () => {
                vscode.commands.executeCommand(
                    inMarkMode ?
                    element+"Select" :
                    element
                );
            })
        )
    });

}

export function deactivate(): void {
}
