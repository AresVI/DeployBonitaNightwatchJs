module.exports = {
    url: 'http://bonita:35407/bonita/portal/homepage#?_p=profilelisting',
    elements: {
        install: {
            selector: '#body > div > div.body > div.section.section_filters_panel > div > div.actions > a'
        },
        inputBusinessArchive: {
            selector: 'form .input .uploader input'
        },
        buttonInstallBusinessArchive: {
            selector: '#popup > div > div.body > form > div.formactions > a.installUpload.btn.btn-action'
        },
        checkboxSelectAllProcessEnabled:{
            selector: '#body > div > div.body > div.section.section_tables_panel.tables_panel.odd > div.body > div.section.section_actiondisableprocesses.actiondisableprocesses.even.table_section > div.body > div > div.table > div.thead > div > div.th.th_checkboxes.checkboxes._1.odd.even.th_1.th_type_checkbox > div'        },
        checkboxSelectAllProcessDisabled:{
            selector: '#body > div > div.body > div.section.section_tables_panel.tables_panel.odd > div.body > div.section.section_actiondeleteprocesses.actiondeleteprocesses.odd.table_section > div.body > div > div.table > div.thead > div > div.th.th_checkboxes.checkboxes._1.odd.even.th_1.th_type_checkbox > div'
        },
        buttonDisableAllProcess:{
            selector: '#btn-disable'
        },
        buttonDeleteAllProcess:{
            selector: '#body > div > div.body > div.section.section_tables_panel.tables_panel.odd > div.body > div.section.section_actiondeleteprocesses.actiondeleteprocesses.odd.table_section > div.body > div > div.actions > a'
        },
        buttonConfirmDeleteAllProcess:{
            selector: '#popup > div > div.body > form > div.formactions > a.deleteActionForm.btn.btn-action'
        },
        itemEnabledProcess: {
            selector: 'div.section.section_primary_filters.even.primary_filters > div > a.enabledprocesses'
        },
        itemDisabledProcess: {
            selector: 'div.section.section_primary_filters.even.primary_filters > div > a.disabledprocesses'
        }
    }
};