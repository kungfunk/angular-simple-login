(function() {
    'use strict';

    angular
        .module('simpleLoginApp')
        .controller('loginFormController', loginFormController);

    loginFormController.$inject = ['UserService', '$location', 'sessionService'];

    function loginFormController(UserService, $location, sessionService) {
        var vm = this;

        vm.username = '';
        vm.password = '';
        vm.loginSuccess = false;

        vm.doLogin = function() {
            var user;

            user = UserService.getByUsername(vm.username);
            if(user.hasOwnProperty('password') && user.password === vm.password) {
                vm.loginSuccess = true;
                sessionService.loggedin = true;
                sessionService.loggedUser = user;
                $location.path('/dashboard');
            }
        };
    }
})();
