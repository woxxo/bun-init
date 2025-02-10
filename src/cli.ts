#!/usr/bin/env bun

import * as f from './index';

console.log('=== Create package.json etc. from scratch ===\n');
console.log('Make sure the current directory is for the new project.');

const pj = f.pjValues();
if (pj !== '') await Bun.write('package.json', pj);

const gi = f.giValues();
if (gi !== '') await Bun.write('.gitignore', gi);

const bf = f.bfValues();
if (bf !== '') await Bun.write('bunfig.toml', bf);

const txt = f.textFiles();
if (typeof txt.license === 'string' && typeof txt.readme === 'string') {
	await Bun.write('README.md', txt.readme);
	await Bun.write('LICENSE', txt.license);
}

console.log('Done');
