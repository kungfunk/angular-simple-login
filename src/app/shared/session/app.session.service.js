(function() {
    'use strict';

    angular
        .module('simpleLoginApp')
        .factory('sessionService', sessionService);

    function sessionService() {
        this.loggedin = false;
        this.loggedUser = {};

        return { loggedin : this.loggedin, loggedUser : this.loggedUser };
    }
})();
