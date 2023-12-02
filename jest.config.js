/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	collectCoverageFrom: [
		'./src/**/*.ts',
	],
	coveragePathIgnorePatterns: [
		'./node_modules',
		'./test/mocks',
		'./dist',
	],
	testPathIgnorePatterns: [
		'./dist/test',
	],
};
