module.exports = {
    elements: {
        checkboxEnableProcess: {
            selector: '#process-details-information > div > div > div:nth-child(1) > div:nth-child(2) > div  label.active'
        },
        buttonBack: {
            selector: '#processDetails-back'
        },
        buttonActors: {
            selector: '#process-details > div.col-sm-3.col-md-3.col-lg-2 > div > a:nth-child(2)'
        },
        buttonActorsAddUsers: {
            selector: '#process-details-actors > table > tbody > tr.mappingEdition-actions.ng-scope > td:nth-child(2) > div > button'
        },
        selectActorsAddUsers: {
            selector: '#editActorsMembersModal > div.modal-body > div > p > actors-select-box > isteven-multi-select > span > button'
        },
        buttonSelectAllSelectorActorsAddUsers: {
            selector: '#editActorsMembersModal > div.modal-body > div > p > actors-select-box > isteven-multi-select > span > div > div.helperContainer.ng-scope > div:nth-child(1) > button:nth-child(1)'
        },
        buttonApplyActorsAddUsers: {
            selector: '#editActorsMembersModal > div.modal-footer > a.btn.btn-primary.ng-binding.ng-scope'
        }
    }
};