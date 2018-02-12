var HtmlReporter = require('nightwatch-html-reporter');
/* Same options as when using the built in nightwatch reporter option */
var reporter = new HtmlReporter({
    openBrowser: true,
    reportsDirectory: __dirname + './reports',
    uniqueFilename: false,
    reportFilename: "generatedTestResults.html",
    themeName: "cover",
    relativeScreenshots: true
});

module.exports = {
    write : function(results, options, done) {
        reporter.fn(results, done);
    }
};
