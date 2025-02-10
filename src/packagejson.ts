type PJValue = string | boolean | string[] | object;

const fields: [string,  PJValue, 'string' | 'boolean' | 'array' | 'object' ][] = [
	[ 'name', '@author/application', 'string' ],
	[ 'version', '1.0.0', 'string' ],
	[ 'description', 'An awesome application', 'string' ],
	[ 'license', 'MIT', 'string' ],
	[ 'main', './index.js', 'string' ],
	[ 'bin', './cli.js', 'string' ],
	[ 'repository', 'github:author/application', 'string' ],
	[ 'author', 'author-name', 'string' ],
	[ 'homepage', 'https://github.com/author/application', 'string' ],
	[ 'private', false, 'boolean' ],
	[ 'sideEffects', false, 'boolean' ],
	[ 'type', 'module', 'string' ],
	[ 'types', './dist/index.d.ts', 'string' ],
	[ 'files', [ "./index.js", "./cli.js", "./dist/", "./jsx/" ], 'array' ],
	[ 'keywords', [ "application", "javascript", "bun" ], 'array' ],
	[ 'scripts', { "start": "bun ./src/start.js", "build": "bun ./scripts/build.js", "test": "echo \"Error: no test specified\" && exit 1" }, 'object' ],
	[ 'exports', { ".": "./src/index.js", "./server": "./src/server.js", "./jsx-runtime": "./jsx/index.js", "./jsx-dev-runtime": "./jsx/index.js" }, 'object' ],
	[ 'engines', { "bun": ">=1.2.2"}, 'object' ],
	[ 'dependencies', { "react": "latest" }, 'object' ],
	[ 'devDependencies', { "@types/bun": "latest" }, 'object' ],
];

const pjValues = (): string => {
	
	const result: { [index: string]: PJValue } = {};

	console.log('[package.json]');
	console.log('Press "Enter" for default value.');
	console.log('Enter "skip" to skip the parameter.');
	console.log('Enter "cancel" to exit without saving file.\n');
	for (const param of fields) {
		let defaultParam: string = '';
	
		if (param[2] === 'string' || param[2] === 'boolean') {
			defaultParam = `${param[1]}`;
		} else {
			defaultParam = JSON.stringify(param[1]);
		}
	
		const p: string = prompt(`Enter ${param[2]} value for "${param[0]}"`, defaultParam) || 'skip';
		if (p === 'skip') {
			console.log(`"${param[0]}" skipped`);
			continue;
		}
	
		if (p === 'cancel') {
			return '';
		}
		
		if (param[2] === 'string') {
			result[param[0]] = p;
			continue;
		}
	
		try {
			result[param[0]] = JSON.parse(p);
		} catch(e: any) {
			console.log(`${e.name}: ${e.message}`);
		}
	}
	
	return JSON.stringify(result, null, 4);
}

export { pjValues };
