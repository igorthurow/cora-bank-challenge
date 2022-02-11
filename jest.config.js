module.exports = {
	transform: {
		"^.+\\.jsx?$": `<rootDir>/jest-preprocess.js`,
	},
	moduleNameMapper: {
		".+\\.(css|styl|less|sass|scss)$": `identity-obj-proxy`,
		"^gatsby-page-utils/(.*)$": `gatsby-page-utils/dist/$1`, // Workaround for https://github.com/facebook/jest/issues/9771
	},
	testEnvironment: 'jsdom',
	testPathIgnorePatterns: [`node_modules`, `\\.cache`, `<rootDir>.*/public`],
	transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
	globals: {
		__PATH_PREFIX__: ``,
	},
	setupFilesAfterEnv: [
		"<rootDir>/jest-setup-tests.js"
	],
	testURL: `http://localhost`,
	setupFiles: [`<rootDir>/loadershim.js`],
}