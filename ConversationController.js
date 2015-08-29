/**
 * Created by froilan on 8/30/15.
 */
mainApp.controller('ConversationController', ['$scope', '$log', '$timeout', 'ConversationService',function($scope, $log, $timeout, ConversationService) {

    var synacySupportMailboxId = 21167;
	
	$scope.count=0

    var getSynacyMailboxActiveCount = function() {
        ConversationService.getByStatusAndMailbox("active", synacySupportMailboxId).success(function(data) {
            $scope.count = data.count
            $timeout(getSynacyMailboxActiveCount(), 15000)
        });
    }

    getSynacyMailboxActiveCount()



}]);