module.exports = {
    url: 'http://bonita:35407/bonita/portal/homepage#?_p=importexportorganizationp',
    elements: {
        inputImport: {
            selector: 'form .input .uploader input'
        },
        buttonImport: {
            selector: '//*[@id="SectionImportOrganization"]/div[2]/div[2]/form/div[2]/a',
            locateStrategy: 'xpath'
        },
        alertImport: {
            selector: '#SectionImportOrganization > div.body > div:nth-child(2) > form > div.formentries > div > div.input > div.alert_message.ERROR'
        }
    }
};