/**
 * Created by froilan on 8/30/15.
 */
mainApp.controller('ConversationController', ['$scope', '$log', '$timeout', 'ConversationService',function($scope, $log, $timeout, ConversationService) {

    var synacySupportMailboxId = 21167;
	
	$scope.count=0;
	$scope.testcount=0;
	$scope.mailboxId;

    var getSynacyMailboxActiveCount = function() {
        ConversationService.getByStatusAndMailbox("active", synacySupportMailboxId).success(function(data) {
            $scope.count = data.count
            //$timeout(getSynacyMailboxActiveCount, 5000)
        });
    }
	
	$scope.getActiveCountForMailbox = function() {
		alert($scope.mailboxId);
        ConversationService.getByStatusAndMailbox("active", $scope.mailboxId).success(function(data) {
            $scope.testcount = data.count;
            //$timeout(getActiveCountForMailbox, 5000);
        });
    }
	
    getSynacyMailboxActiveCount();

}]);