/**
 * Created by froilan on 8/30/15.
 */
mainApp.controller('ConversationController', ['$scope', '$log', '$interval', 'ConversationService',function($scope, $log, $interval, ConversationService) {

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
		$scope.activeLoading = true;
        ConversationService.getByStatusAndMailbox("active", $scope.mailboxId).success(function(data) {
            $scope.activeCount = data.count;
        }).finally(function () {
			$scope.activeLoading = false;
		});
        ConversationService.getByStatusAndMailbox("pending", $scope.mailboxId).success(function(data) {
            $scope.pendingCount = data.count;
        });
        ConversationService.getByStatusAndMailbox("closed", $scope.mailboxId).success(function(data) {
            $scope.closedCount = data.count;
        });
    }

	$scope.setCurrentMailbox = function(mailboxId) {
        $scope.mailboxId = mailboxId
        updateStatusCounts();
    }

    updateStatusCounts();
	$interval(updateStatusCounts, 15000);

}]);