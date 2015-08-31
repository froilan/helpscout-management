/**
 * Created by froilan on 8/30/15.
 */
mainApp.controller('ConversationController', ['$scope', '$log', '$timeout', 'ConversationService',function($scope, $log, $timeout, ConversationService) {

    var synacySupportMailboxId = 21167;
	
	$scope.count=0;
	$scope.activeCount=0;
	$scope.pendingCount=0;
	$scope.closedCount=0;

    var getSynacyMailboxActiveCount = function() {
        ConversationService.getByStatusAndMailbox("active", synacySupportMailboxId).success(function(data) {
            $scope.count = data.count
            //$timeout(getSynacyMailboxActiveCount, 5000)
        });
    }
	
	$scope.getActiveCountForMailbox = function(mailboxId) {
        ConversationService.getByStatusAndMailbox("active", mailboxId).success(function(data) {
            $scope.activeCount = data.count;
        });
        ConversationService.getByStatusAndMailbox("pending", mailboxId).success(function(data) {
            $scope.pendingCount = data.count;
        });
        ConversationService.getByStatusAndMailbox("closed", mailboxId).success(function(data) {
            $scope.closedCount = data.count;
        });
    }

    $scope.getActiveCountForMailbox();

}]);