mainApp.controller('SettingsController', ['$scope', '$log',function($scope, $log) {
	$scope.mailboxSettingList = new Array();

    $scope.addMailboxSetting = function(selectedMailbox) {
        if(!selectedMailbox) {
            selectedMailbox = {
                id: null,
                name: "All Mailboxes"
            };
        }
    	var mailboxSetting = {
    		mailboxId: selectedMailbox.id,
    		mailboxName: selectedMailbox.name,
    		showPending: true,
    		showActive: true,
    		showClosed: false
    	};
        $scope.mailboxSettingList.push(mailboxSetting);
    }
}]);