(function() {
    'use strict';

    angular
        .module('simpleLoginApp')
        .factory('UserService', UserService);

    UserService.$inject = ['storageService'];

    function UserService(storageService) {
        return {
            getByUsername : function(username) {
                var users = storageService.selectUser(username);
                return users.length < 1 ? {} : users[0];
            },
            addUser : function(object) {
                return storageService.addUser(object);
            },
            getAll : function() {
                return storageService.getAllUsers();
            }
        };
    }
})();
