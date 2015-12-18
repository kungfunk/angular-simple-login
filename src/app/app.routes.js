(function() {
    'use strict';

    angular.module('simpleLoginApp')
        .config(['localStorageServiceProvider', function(localStorageServiceProvider){
          localStorageServiceProvider.setPrefix('simpleLoginApp');
        }])
        .config(function ($routeProvider) {
            $routeProvider
                .when('/login', {
                  templateUrl: 'app/components/login/app.login-form.template.html',
                  controller: 'loginFormController',
                  controllerAs: 'loginForm'
                })
                .when('/signup', {
                  templateUrl: 'app/components/register/app.register-form.template.html',
                  controller: 'registerFormController',
                  controllerAs: 'registerForm'
                })
                .when('/dashboard', {
                  templateUrl: 'app/components/dashboard/app.dashboard.template.html',
                  controller: 'dashboardController',
                  controllerAs: 'dashboard'
                })
                .otherwise({
                  redirectTo: '/login'
                });
            });
})();
