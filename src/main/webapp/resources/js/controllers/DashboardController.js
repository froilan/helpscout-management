/**
 * Created by froilan on 8/30/15.
 */
mainApp.controller('DashboardController', ['$scope', '$log', '$interval', '$rootScope', 'ConversationService', 'MailboxService', 'MailboxSettingService',
    function($scope, $log, $interval, $rootScope, ConversationService, MailboxService, MailboxSettingService) {

    //var synacySupportMailboxId = 21167;
    //
    //$scope.count=0;
    //$scope.activeCount=0;
    //$scope.pendingCount=0;
    //$scope.closedCount=0;
    //$scope.mailboxId;
    //
    //var getSynacyMailboxActiveCount = function() {
    //    ConversationService.getByStatusAndMailbox("active", synacySupportMailboxId).then(function(data) {
    //        $scope.count = data.count
    //        //$timeout(getSynacyMailboxActiveCount, 5000)
    //    });
    //}
    //
    //var updateStatusCounts = function() {
    //    $scope.activeLoading = true;
    //    $scope.pendingLoading = true;
    //    $scope.closedLoading = true;
    //
    //    ConversationService.getByStatusAndMailbox("active", $scope.mailboxId).then(function(data) {
    //        $scope.activeCount = data.count;
    //    }).finally(function () {
    //        $scope.activeLoading = false;
    //        if(!$scope.activeLoading && !$scope.pendingLoading && !$scope.closedLoading) {
    //            $scope.mailboxChangeLoading = false;
    //        }
    //    });
    //
    //    ConversationService.getByStatusAndMailbox("pending", $scope.mailboxId).then(function(data) {
    //        $scope.pendingCount = data.count;
    //    }).finally(function () {
    //        $scope.pendingLoading = false;
    //        if(!$scope.activeLoading && !$scope.pendingLoading && !$scope.closedLoading) {
    //            $scope.mailboxChangeLoading = false;
    //        }
    //    });
    //
    //    ConversationService.getByStatusAndMailbox("closed", $scope.mailboxId).then(function(data) {
    //        $scope.closedCount = data.count;
    //    }).finally(function () {
    //        $scope.closedLoading = false;
    //        if(!$scope.activeLoading && !$scope.pendingLoading && !$scope.closedLoading) {
    //            $scope.mailboxChangeLoading = false;
    //        }
    //    });
    //}
    //
    //$scope.mailboxList = MailboxService.getMailboxList();
    //
    //$scope.setCurrentMailbox = function(mailboxId) {
    //    $scope.mailboxId = mailboxId;
    //    $scope.mailboxChangeLoading = true;
    //    updateStatusCounts();
    //}
    //
    //$scope.setCurrentMailbox(null);
    //
    //$interval(updateStatusCounts, 15000);


        var getCurrentUser =  function() {
            if($rootScope.currentUser && $rootScope.currentUser.user) {
                $scope.currentUser = $rootScope.currentUser.user;
            }
        }

        function getStatusCounts(mailboxSetting, mailbox) {
            if(mailboxSetting.shouldShowPending) {
                ConversationService.getByStatusAndMailbox("pending", mailboxSetting.mailboxId).then(function(response) {
                    //var statusCount = {
                    //    status: "Pending",
                    //    count: data.count
                    //}
                    //mailbox.statusCounts.push(statusCount);
                    mailbox.pendingCount = response.data.count;
                    mailbox.isPendingRetrieved = true;
                });
            }
            else {
                mailbox.isPendingRetrieved = true;
            }

            if(mailboxSetting.shouldShowActive) {
                ConversationService.getByStatusAndMailbox("active", mailboxSetting.mailboxId).then(function(response) {
                    //var statusCount = {
                    //    status: "Active",
                    //    count: data.count
                    //}
                    //mailbox.statusCounts.push(statusCount);
                    mailbox.activeCount = response.data.count;
                    mailbox.isActiveRetrieved = true;
                });
            }
            else {
                mailbox.isActiveRetrieved = true;
            }

            if(mailboxSetting.shouldShowClosed) {
                ConversationService.getByStatusAndMailbox("closed", mailboxSetting.mailboxId).then(function(response) {
                    //var statusCount = {
                    //    status: "Closed",
                    //    count: data.count
                    //}
                    //mailbox.statusCounts.push(statusCount);
                    mailbox.closedCount = response.data.count;
                    mailbox.isClosedRetrieved = true;
                });
            }
            else {
                mailbox.isClosedRetrieved = true;
            }
        }

        var getMailboxForCurrentUser = function() {
            MailboxSettingService.getMailboxSettingsForUser($scope.currentUser.userId).success(function(data) {
                $scope.mailboxList = [];
                var mailboxSettingList = data;
                for(i = 0; i < mailboxSettingList.length; i++) {
                    var mailboxSetting = mailboxSettingList[i];
                    var mailbox = {
                        mailboxName: mailboxSetting.mailboxName,
                        //statusCounts: [],
                        pendingCount: undefined,
                        activeCount: undefined,
                        closedCount: undefined
                    }
                    $scope.mailboxList.push(mailbox);

                    getStatusCounts(mailboxSetting, mailbox);
                }
            });
        }

        getCurrentUser();
        getMailboxForCurrentUser();

}]);