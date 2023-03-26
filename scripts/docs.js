//	Imports ____________________________________________________________________

const fs = require('fs');
const path = require('path');

const _parse = JSON.parse;

//	Variables __________________________________________________________________

const paths = {
	"Shell Script": [
		'../snippets/shell.json',
		'../src/snippets/shell.funcs.ts',
	],
};

const contents = [`## Shell Script Snippets

Complete list of all Shell Script Snippets for Visual Studio Code. The rules for all these snippets are explained in the [README.md](./README.md)
`];

const findComments = /"(?:[^"\r\n\\]*(?:\\.)*)*"|(\/\*(?:.|[\r\n])*?\*\/|\/\/[^\r\n]*|export[\s\r\n]+default[\s\r\n]*|;)|,[\s\r\n]*?([\]}])/g;

//	Initialize _________________________________________________________________

for (const [headline, pathnames] of Object.entries(paths)) {
	contents.push(`
### ${headline}

| Prefix | Snippet |
| ------:| ------- |`);
	let json = {};
	for (const pathname of pathnames) {
		const result = parse(fs.readFileSync(path.join(__dirname, pathname), 'utf-8'))
		json = { ...json, ...result };
	}
	const snippets = [];
	for (const snippet of Object.values(json)) {
		if (snippet.prefix !== '___') snippets.push(formatSnippets(snippet));
	}
	contents.push(snippets.sort().join('\n'));
}

fs.writeFileSync(path.join(__dirname, '..', 'SNIPPETS.md'), contents.join('\n'), 'utf-8');

//	Exports ____________________________________________________________________



//	Functions __________________________________________________________________

function formatSnippets (snippet) {
	
	const body = snippet.body.join(' ').replace(/\t/g, '').replace(/`/g, '\`');
	
	return `| \`${snippet.prefix}\` | \`${body}\` |`;
	
}

function parse (json, ...args) {
	
	return _parse(json.replace(findComments, (match, comment, close) => comment ? '' : close || match), ...args);
	
}