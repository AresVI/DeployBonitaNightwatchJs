module.exports = {
    url: 'http://bonita:35407/bonita/portal/homepage#?_p=profilelisting',
    elements: {
        itemProfileAdministrator: {
            selector: '.table > .tbody > .tr_1'
        },
        itemProfileUser: {
            selector: '.table > .tbody > .tr_2'
        },
        buttonEditSelectedProfile: {
            selector: '#details_panel > div > div.header > div.toolbar > a'
        }
    }
};