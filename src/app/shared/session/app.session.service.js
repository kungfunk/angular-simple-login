(function() {
    'use strict';

    angular
        .module('simpleLoginApp')
        .factory('sessionService', sessionService);

    sessionService.$inject = ['storageService'];

    function sessionService(storageService) {
        var loggedUser = storageService.getSession();
        var loggedin = loggedUser !== null;

        return {
            loggedUser : loggedUser,
            loggedin : loggedin
        };
    }
})();
