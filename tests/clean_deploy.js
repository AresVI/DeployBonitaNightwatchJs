module.exports = {

    '@tags': ['clean_deploy'],
    'Setting Up Organization - Clean Deploy' : function (client) {

        client.maximizeWindow();

        var login = client.page.login();

        login.navigate()
            .waitForElementVisible('@username', 2000)
            .setValue('@username', 'install')
            .setValue('@password', 'install')
            .click('@submit');

        var homepage_admin = client.page.homepage_admin();

        client.pause(5 * 1000);

        homepage_admin
            .waitForElementVisible('@buttonDismissPopup', 2000)
            .click('@buttonDismissPopup');

        var menu = client.page.menu();

        menu
            .waitForElementVisible('@linkOrganization', 5 * 1000)
            .click('@linkOrganization')
            .waitForElementVisible('@linkOrganizationImportExport', 5 * 1000)
            .click('@linkOrganizationImportExport');

        client.pause(2 * 1000);

        var organization_import_export = client.page.organization_import_export();

        organization_import_export
            .setValue('@inputImport', '/dist/AresVI.xml')
            .click('@buttonImport')
            .waitForElementVisible('@alertImport', 2000)
            .assert.containsText('@alertImport', 'Organization successfully imported.');

        var index_profile = client.page.index_profile();

        menu
            .waitForElementVisible('@linkOrganization', 5 * 1000)
            .click('@linkOrganization')
            .waitForElementVisible('@linkOrganizationProfile', 5 * 1000)
            .click('@linkOrganizationProfile');

        index_profile
            .waitForElementVisible('@buttonEditSelectedProfile', 2000)
            .click('@itemProfileAdministrator')
            .click('@buttonEditSelectedProfile');

        var edit_profile = client.page.edit_profile();

        edit_profile
            .waitForElementVisible('@buttonAddRole', 2000)
            .click('@buttonAddRole');

        var add_by_role = client.page.profile_add_by_role();

        add_by_role
            .waitForElementPresent('@checkRoleSystem', 5 * 1000)
            .click('@checkRoleSystem')
            .click('@buttonAdd');

        menu
            .waitForElementVisible('@linkOrganization', 5 * 1000)
            .click('@linkOrganization')
            .waitForElementVisible('@linkOrganizationImportExport', 5 * 1000)
            .click('@linkOrganizationProfile');

        index_profile
            .waitForElementVisible('@itemProfileAdministrator', 2000)
            .click('@itemProfileUser')
            .click('@buttonEditSelectedProfile');

        edit_profile
            .waitForElementVisible('@buttonAddRole', 5 * 1000)
            .click('@buttonAddRole');

        add_by_role
            .waitForElementPresent('@checkRoleExternal', 5 * 1000)
            .click('@checkRoleExternal')
            .click('@buttonAdd');

        client.end(0);

    },

    'Setting Up Process - Clean Deploy' : function (client) {

        client.maximizeWindow();

        var login = client.page.login();

        login.navigate()
            .waitForElementVisible('@username', 2000)
            .setValue('@username', 'system')
            .setValue('@password', 'system')
            .click('@submit');

        var menu = client.page.menu();

        menu
            .waitForElementVisible('@linkBPM', 5 * 1000)
            .click('@linkBPM')
            .waitForElementVisible('@linkBPMProcess', 5 * 1000)
            .click('@linkBPMProcess');

        var index_bpm_process = client.page.index_bpm_process();

        var processes = ['/dist/Despacho--1.0.bar', '/dist/Elaboracion--1.0.bar', '/dist/Produccion de Materia Prima--1.0.bar'];

        for(var i in processes){

            index_bpm_process
                .waitForElementVisible('@install', 5 * 1000)
                .click('@install')
                .waitForElementPresent('@inputBusinessArchive', 5 * 1000)
                .setValue('@inputBusinessArchive', processes[i])
                .waitForElementPresent('@buttonInstallBusinessArchive', 2 * 1000)
                .click('@buttonInstallBusinessArchive');

            client.pause(2 * 1000);

            client.element("css selector", "#bonitaframe", function(response) {
                client.frame({ELEMENT: response.value.ELEMENT}, function () {
                    client.waitForElementPresent('#process-details-information > div > div > div:nth-child(1) > div:nth-child(2) > div  label.active', 5 * 1000);
                    client.click('#process-details-information > div > div > div:nth-child(1) > div:nth-child(2) > div  label.active');
                    client.waitForElementPresent('#processDetails-back', 5 * 1000);
                    client.click('#processDetails-back');
                });
            });

        }

        client.end(0);

    }

};