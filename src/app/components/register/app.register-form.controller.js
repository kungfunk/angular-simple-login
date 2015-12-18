(function() {
    'use strict';

    angular
        .module('simpleLoginApp')
        .controller('registerFormController', registerFormController);

    registerFormController.$inject = ['UserService', '$location'];

    function registerFormController(UserService, $location) {
        var vm = this;

        vm.username = '';
        vm.password = '';
        vm.email = '';

        vm.doRegister = function() {
            if(UserService.addUser({ username : vm.username, password : vm.password, email : vm.email })) {
                $location.path('/login');
            }
        };
    }
})();
