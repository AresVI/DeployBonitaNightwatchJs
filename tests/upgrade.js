module.exports = {

    '@tags': ['upgrade'],

    'Setting Up Organization - Upgrade' : function (client) {

        client.maximizeWindow();

        var login = client.page.login();

        login.navigate()
            .waitForElementVisible('@username', 2000)
            .setValue('@username', 'install')
            .setValue('@password', 'install')
            .click('@submit');

        client.pause(5 * 1000);

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

        client.end(0);

    },

    'Setting Up Process - Upgrade' : function (client) {

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

        client.pause(2 * 1000);

        var index_bpm_process = client.page.index_bpm_process();

        index_bpm_process
            .waitForElementVisible('@checkboxSelectAllProcessEnabled', 5 * 1000)
            .click('@checkboxSelectAllProcessEnabled')
            .click('@buttonDisableAllProcess')
            .click('@itemDisabledProcess')
            .waitForElementVisible('@checkboxSelectAllProcessDisabled', 5 * 1000)
            .click('@checkboxSelectAllProcessDisabled');

        client.pause(2 * 1000);

        index_bpm_process
            .waitForElementPresent('@buttonDeleteAllProcess', 5 * 1000)
            .click('@buttonDeleteAllProcess')
            .waitForElementVisible('@buttonConfirmDeleteAllProcess', 5 * 1000)
            .click('@buttonConfirmDeleteAllProcess')
            .waitForElementVisible('@itemEnabledProcess', 5 * 1000)
            .click('@itemEnabledProcess');

        client.pause(2 * 1000);

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

                    var edit_bpm_process = client.page.edit_bpm_process();

                    edit_bpm_process
                        .waitForElementPresent('@checkboxEnableProcess', 5 * 1000)
                        .click('@checkboxEnableProcess')
                        .waitForElementPresent('@buttonActors', 1000)
                        .click('@buttonActors')
                        .waitForElementPresent('@buttonActorsAddUsers', 1000)
                        .click('@buttonActorsAddUsers')
                        .waitForElementPresent('@selectActorsAddUsers', 1000)
                        .click('@selectActorsAddUsers')
                        .waitForElementPresent('@buttonSelectAllSelectorActorsAddUsers', 1000)
                        .click('@buttonSelectAllSelectorActorsAddUsers')
                        .waitForElementPresent('@buttonApplyActorsAddUsers', 1000)
                        .click('@buttonApplyActorsAddUsers');

                    client.pause(2 * 1000);

                    edit_bpm_process
                        .waitForElementPresent('@buttonBack', 5 * 1000)
                        .click('@buttonBack');

                });
            });

        }

        client.end(0);

    }

};