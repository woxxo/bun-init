const bunfig: string = `jsx = "react-jsx"
jsxImportSource = "preact"
`;

const bfValues = (): string => {
	let result: string = '';

	console.log('\n[bunfig.toml]');
	console.log(bunfig);

	const p: string = (prompt('Create bunfig.toml file?', 'yes') || 'no').toLowerCase();
	if (p !== 'n' && p !== 'no') result = bunfig;

	return result;
}

export { bfValues };