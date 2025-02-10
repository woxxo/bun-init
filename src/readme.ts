type TextFiles = { readme?: string, license?: string };

const readme: string = `# New project

Project description. Working with [Bun](https://github.com/oven-sh/bun) only.

### How to use

bun run start
`;

const license: string = `MIT License

  Copyright (c) 2022
  
  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:
  
  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.
  
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.`;

const textFiles = (): TextFiles => {
	const result: TextFiles = {};

	console.log('[README.md]');
	console.log(readme);

	console.log('[LICENSE]');
	console.log(license);

	const p: string = (prompt('Create readme and license files?', 'yes') || 'no').toLowerCase();
	if (p !== 'n' && p !== 'no') {
		result.readme = readme;
		result.license = license;
	}

	return result;
}

export { textFiles };