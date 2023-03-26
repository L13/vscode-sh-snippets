/* eslint-disable no-template-curly-in-string */
/* eslint-disable key-spacing */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/quotes */
export default {
	"function {}":						{ "prefix": "f_",	"body": ["function ${1:name} {", "\t", "\t$0","\t", "}"], "description": "" },
	"name () {}":						{ "prefix": "$_",	"body": ["${1:name} () {", "\t", "\t$0", "\t", "}"], "description": "" },
};