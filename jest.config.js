/** @type {import('ts-jest').JestConfigWithTsJest} */
const preset = "ts-jest";
const testEnvironment = "node";
const testPathIgnorePatterns = ["dist", "src/entities"];
const resolver = "jest-ts-webcompat-resolver";
export default { resolver, preset, testEnvironment, testPathIgnorePatterns };
