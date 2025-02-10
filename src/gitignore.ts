const ignore: string = 'node_modules/\n.env\n';

const giValues = (): string => {
	let result: string = '';

	console.log('[.gitignore]');
	console.log(ignore);

	const p: string = (prompt('Create .gitignore file?', 'yes') || 'no').toLowerCase();
	if (p !== 'n' && p !== 'no') result = ignore;

	return result;
}

export { giValues };