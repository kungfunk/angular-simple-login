(function() {
    'use strict';

    angular
        .module('simpleLoginApp')
        .controller('dashboardController', dashboardController);

    dashboardController.$inject = ['sessionService', '$location', 'UserService'];

    function dashboardController(sessionService, $location, UserService) {
        var vm = this;

        vm.loggedUser = sessionService.loggedUser;

        if(!sessionService.loggedin) {
            $location.path('/login');
        }

        vm.usuarios = UserService.getAll();
    }
})();
