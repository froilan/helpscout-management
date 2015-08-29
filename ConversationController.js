/**
 * Created by froilan on 8/30/15.
 */
mainApp.controller('ConversationController', ['$scope', '$log','conversationService',function($scope, $log,conversationService) {

    this.getSynacyMailBoxActiveCount = function(conversationService) {
        var synacySupportMailboxId = 21167;
        var count = conversationService.getByStatusAndMailbox("active", synacySupportMailboxId);
        $log.info(count);
        return count;
    }

}]);