mainApp.controller('SettingsController', ['$scope', '$rootScope', '$log', 'HelpscoutLoginService', 'MailboxService', 'MailboxSettingService',
    function($scope, $rootScope, $log, HelpscoutLoginService, MailboxService, MailboxSettingService) {

        $scope.dashboardError = " ";
        $scope.mailboxSettingList = new Array();
        var mailboxSettingToSaveList = new Array();
        var mailboxSettingToDeleteList = new Array();

        var getCurrentUser =  function() {
            if($rootScope.currentUser && $rootScope.currentUser.user) {
                $scope.currentUser = $rootScope.currentUser.user;
            }
        }

        $scope.updateHelpscoutLogin = function() {
            HelpscoutLoginService.validateHelpscoutLogin($scope.key, $scope.password).success(function (data) {
                //var user = $rootScope.currentUser.user;
                HelpscoutLoginService.createOrUpdateHelpscoutLogin($scope.helpscoutId, $scope.currentUser, $scope.key, $scope.password).success(function (data) {
                    $scope.helpscoutId = data.helpscoutLoginId;
                    getMailboxList();
                });
            }).error(function (data, status) {
                getHelpscoutLoginForCurrentUser();
                alert("Invalid Helpscout Login");
            });

        }

        var getHelpscoutLoginForCurrentUser = function() {
            HelpscoutLoginService.getHelpscoutLoginForUser($scope.currentUser.userId).success(function(data) {
                if(data) {
                    $scope.helpscoutId = data.helpscoutLoginId;
                    $scope.key = data.helpscoutKey;
                    $scope.password = data.helpscoutPassword;
                }
            }).finally(function() {
                getMailboxList();
            });
        }

        var getMailboxList = function() {
            $scope.dashboardError = null;
            if($scope.key && $scope.password) {
                $scope.mailboxList = MailboxService.getMailboxList();
            }
            else {
                $scope.dashboardError = "Helpscout API Details must be specified before you can setup the Dashboard Layout";
            }
        }

        $scope.addMailboxSetting = function(selectedMailbox) {
            if(!selectedMailbox) {
                selectedMailbox = {
                    id: null,
                    name: "All Mailboxes"
                };
            }
            var mailboxSetting = {
                id: null,
                mailboxId: selectedMailbox.id,
                mailboxName: selectedMailbox.name,
                showPending: true,
                showActive: true,
                showClosed: false
            };
            mailboxSettingToSaveList.push($scope.mailboxSettingList.length);
            $scope.mailboxSettingList.push(mailboxSetting);
        }

        function saveSetting(mbSetting) {
            //var mbSetting = $scope.mailboxSettingList[index];
            //var deferred = $q.defer();
            MailboxSettingService.createOrUpdateMailboxSetting(mbSetting.id, $scope.currentUser, mbSetting.mailboxId, mbSetting.mailboxName,
                mbSetting.showPending, mbSetting.showActive, mbSetting.showClosed).success(function (data) {
                    //alert(data.mailboxSettingsId + ' ' + index);
                    //$scope.mailboxSettingList[index].id = data.mailboxSettingsId;
                    mbSetting.id = data.mailboxSettingsId;
                    //deferred.resolve(data);
                });
            //return deferred.promise;
        }

        $scope.updateMailboxSettings = function() {
            for(i = 0; i < mailboxSettingToSaveList.length; i++) {
                var mbSettingIndex = mailboxSettingToSaveList[i];
                var mbSetting = $scope.mailboxSettingList[mbSettingIndex];
                //var deferred = $q.defer();
                //MailboxSettingService.createOrUpdateMailboxSetting(mbSetting.id, $scope.currentUser, mbSetting.mailboxId, mbSetting.mailboxName,
                //    mbSetting.showPending, mbSetting.showActive, mbSetting.showClosed).success(function (data) {
                //        //alert(data.mailboxSettingsId + ' ' + index);
                //        $scope.mailboxSettingList[mbSettingIndex].id = data.mailboxSettingsId;
                //        //deferred.resolve(data);
                //    });
                saveSetting(mbSetting);
            }

            for(i = 0; i < mailboxSettingToDeleteList.length; i++) {
                var mbSettingIndex = mailboxSettingToDeleteList[i];
                var mbSetting = $scope.mailboxSettingList[mbSettingIndex];
                MailboxSettingService.deleteMailboxSetting(mbSetting.id).success(function () {

                });

            }

            alert("Successfully saved Mailbox Settings");
            mailboxSettingToSaveList = [];
            mailboxSettingToDeleteList = [];
        }

        $scope.processMailboxSettingChange = function(index) {
            if(!isInArray(index, mailboxSettingToSaveList)) {
                mailboxSettingToSaveList.push(index);
            }
        }

        function isInArray(value, array) {
            return array.indexOf(value) > -1;
        }

        $scope.removeMailboxSetting = function(index) {
            var mailboxSetting = $scope.mailboxSettingList[index];
            $scope.mailboxSettingList[index].delete = true;
            if(mailboxSetting.id != null) {
                mailboxSettingToDeleteList.push(index);
            }
            if(isInArray(index, mailboxSettingToSaveList)) {
                mailboxSettingToSaveList.splice(mailboxSettingToSaveList.indexOf(index), 1);
            }
        }

        $scope.shouldHideMailboxSetting = function(mailboxSetting) {
            return mailboxSetting.delete && mailboxSetting.delete == true;
        }

        var getMailboxSettingsForCurrentUser = function() {
            MailboxSettingService.getMailboxSettingsForUser($scope.currentUser.userId).success(function(data) {
                $scope.mailboxSettingList= [];
                var mailboxSettingList = data;
                for(i = 0; i < mailboxSettingList.length; i++) {
                    var mailboxSetting = mailboxSettingList[i];
                    var mbSetting = {
                        id: mailboxSetting.mailboxSettingsId,
                        mailboxId: mailboxSetting.mailboxId,
                        mailboxName: mailboxSetting.mailboxName,
                        showPending: mailboxSetting.shouldShowPending,
                        showActive: mailboxSetting.shouldShowActive,
                        showClosed: mailboxSetting.shouldShowClosed
                    }
                    $scope.mailboxSettingList.push(mbSetting);
                }
            });
        }

        $scope.resetMailboxSettings = function() {
            getMailboxSettingsForCurrentUser();
        }

        //$scope.$watch('mailboxSettingList', function (newVal, oldValue) {
        //    alert("TEST");
        //}, true);

        getCurrentUser();
        getHelpscoutLoginForCurrentUser();
        getMailboxSettingsForCurrentUser();
}]);
