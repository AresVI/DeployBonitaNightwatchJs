'use strict'
/* In nightwatch/globals.js */
var HtmlReporter = require('nightwatch-html-reporter');
var reporter = new HtmlReporter({
	openBrowser: false,
	reportsDirectory: "reports",
	uniqueFilename: true,
	reportFilename: "generatedTestResults.html",
	themeName: "cover",
	relativeScreenshots: true
});
