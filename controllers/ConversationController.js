/**
 * Created by froilan on 8/30/15.
 */
mainApp.controller('ConversationController', ['$scope', '$log', '$timeout', 'ConversationService',function($scope, $log, $timeout, ConversationService) {

    var synacySupportMailboxId = 21167;
	
	$scope.count=0;
	$scope.activeCount=0;
	$scope.pendingCount=0;
	$scope.closedCount=0;
    $scope.mailboxId;

    var getSynacyMailboxActiveCount = function() {
        ConversationService.getByStatusAndMailbox("active", synacySupportMailboxId).success(function(data) {
            $scope.count = data.count
            //$timeout(getSynacyMailboxActiveCount, 5000)
        });
    }

    var updateStatusCounts = function() {
        ConversationService.getByStatusAndMailbox("active", $scope.mailboxId).success(function(data) {
            $scope.activeCount = data.count;
        });
        ConversationService.getByStatusAndMailbox("pending", $scope.mailboxId).success(function(data) {
            $scope.pendingCount = data.count;
        });
        ConversationService.getByStatusAndMailbox("closed", $scope.mailboxId).success(function(data) {
            $scope.closedCount = data.count;
        });
        $timeout(updateStatusCounts, 5000)
    }

	$scope.setCurrentMailbox = function(mailboxId) {
        $scope.mailboxId = mailboxId
        updateStatusCounts();
    }

    updateStatusCounts();

}]);