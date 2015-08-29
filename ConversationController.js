/**
 * Created by froilan on 8/30/15.
 */
mainApp.controller('ConversationController', ['$scope', '$log','ConversationService',function($scope, $log,ConversationService) {

    var synacySupportMailboxId = 21167;
	
	$scope.count=ConversationService.getByStatusAndMailbox("active", synacySupportMailboxId);

}]);