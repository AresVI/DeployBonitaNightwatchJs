module.exports = {
    url: 'http://bonita:35407/bonita/login.jsp',
    elements: {
        linkOrganization: {
            selector: '#menu > div > ul > li.menuitem.menuitem_Organization > a'
        },
        linkBPM: {
            selector: '#menu > div > ul > li.menuitem.menuitem_BPM > a'
        },
        linkOrganizationImportExport: {
            selector: '#menu > div > ul > li.menuitem.menuitem_Organization > ul > li.importexportorganization._4.even > a'
        },
        linkOrganizationProfile: {
            selector: '#menu > div > ul > li.menuitem.menuitem_Organization > ul > li.profilelisting._5._last.odd > a'
        },
        linkBPMProcess: {
            selector: '#menu > div > ul > li.menuitem.menuitem_BPM > ul > li.processlistingadmin._3._last.odd > a'
        }
    }
};