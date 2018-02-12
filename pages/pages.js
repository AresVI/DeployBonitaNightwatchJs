module.exports = {
    url: 'http://bonita:35407/bonita',
    elements: {
        searchBar: {
            selector: 'input[type=text]'
        },
        submit: {
            selector: '//[@name="q"]',
            locateStrategy: 'xpath'
        }
    }
};