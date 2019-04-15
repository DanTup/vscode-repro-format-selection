import * as fs from "fs";
import * as path from "path";
import { window, workspace, ExtensionContext, Uri, commands, version, languages, TextDocument, TextEdit, Range, Position } from "vscode";

export function activate(context: ExtensionContext) {
	languages.registerDocumentFormattingEditProvider({ language: "foo" }, {
		async provideDocumentFormattingEdits(document: TextDocument, options, token): Promise<TextEdit[]> {
			const origText = document.getText();
			return [
				new TextEdit(
					new Range(new Position(0, 0), document.positionAt(origText.length)),
					origText.replace(/\n{2,}/g, '\n'),
				),
			];
		},
	});
}

export function deactivate() { }
