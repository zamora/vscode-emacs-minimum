import * as assert from 'assert'
import * as vscode from 'vscode'

import * as utils from './utils'

suite("C-K functionality", () => {

    test("EOL behavior", async () => {

        let c = "line 1\nline 2\nline 3\n"

        let doc = await vscode.workspace.openTextDocument({content: c, language: 'text'})
        await vscode.window.showTextDocument(doc)
        utils.moveCursorToBeginning()
        assert.equal(doc.getText(), c)
    });
});
