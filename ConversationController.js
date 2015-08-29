/**
 * Created by froilan on 8/30/15.
 */
mainApp.controller('ConversationController', ['$scope', '$log','ConversationService',function($scope, $log,ConversationService) {

    var synacySupportMailboxId = 21167;
	
	$scope.count=0

    $scope.getSynacyMailboxActiveCount = function() {
        ConversationService.getByStatusAndMailbox("active", synacySupportMailboxId).success(function(data) {
            $scope.count = data.count
        });
    }

}]);