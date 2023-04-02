//	Imports ____________________________________________________________________

import * as vscode from 'vscode';

import shellscriptFuncs from './snippets/shell.funcs';

import type { Snippet } from './types';

//	Variables __________________________________________________________________

let shellscriptCompletionItems: vscode.CompletionItem[] = null;

//	Initialize _________________________________________________________________



//	Exports ____________________________________________________________________

export function activate (context: vscode.ExtensionContext) {
	
	buildAllCompletionItems();
	
	const shellscriptProvider = vscode.languages.registerCompletionItemProvider([
		'shellscript',
	], {
		provideCompletionItems: () => shellscriptCompletionItems,
	});
	
	const changeConfiguration = vscode.workspace.onDidChangeConfiguration((event) => {
		
		if (event.affectsConfiguration('l13Snippets.shellScript.useFunctionBlockPadding')) {
			buildAllCompletionItems();
		}
		
	});
	
	context.subscriptions.push(shellscriptProvider, changeConfiguration);
	
}

//	Functions __________________________________________________________________

function get (key: string, value?: any) {
	
	return vscode.workspace.getConfiguration('l13Snippets.shellScript').get(key, value);
	
}

function filterEmptyTab (body: string[]) {
	
	return body.filter((value) => value !== '\t');
	
}

function buildCompletionItems (snippets: Record<string, Snippet>, useFunctionBlockPadding: boolean) {
	
	return Object.values(snippets).map((item) => {
	
		const body = useFunctionBlockPadding ? item.body : filterEmptyTab(item.body);
		const completionItem = new vscode.CompletionItem(item.prefix, vscode.CompletionItemKind.Snippet);
		
		completionItem.insertText = new vscode.SnippetString(body.join('\n'));
		
		return completionItem;
		
	});
	
}

function buildAllCompletionItems () {
		
	const useFunctionBlockPadding = get('useFunctionBlockPadding');
	
	shellscriptCompletionItems = buildCompletionItems(shellscriptFuncs, useFunctionBlockPadding);
		
}