mainApp.service('MailboxSettingService', function($http, MainAppService){
    this.createOrUpdateMailboxSetting = function(id, user, mailboxId, mailboxName, showPending, showActive, showClosed) {
        var mailboxSetting = {
            mailboxSettingsId: id,
            user: user,
            mailboxId : mailboxId,
            mailboxName: mailboxName,
            shouldShowPending: showPending,
            shouldShowActive: showActive,
            shouldShowClosed: showClosed
        };

        var req = {
            method: 'POST',
            url: '/helpscout-management/api/mailboxSetting',
            headers: {
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(mailboxSetting)
        }

        return MainAppService(req);
    }

    this.deleteMailboxSetting = function(id) {
        var req = {
            method: 'DELETE',
            url: '/helpscout-management/api/mailboxSetting/' + id
        }

        return MainAppService(req);
    }

    this.getMailboxSettingsForUser = function(userId) {
        var req = {
            method: 'GET',
            url: '/helpscout-management/api/mailboxSetting/user/' + userId
        }

        return MainAppService(req);
    }
});