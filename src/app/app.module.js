(function() {
    'use strict';

    /**
     * @ngdoc overview
     * @name simpleLoginApp
     * @description
     * # simpleLoginApp
     *
     * Main module of the application.
     */
    angular
      .module('simpleLoginApp', [
        'ngAnimate',
        'ngCookies',
        'ngMessages',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        //'ngTouch',
        'ngMaterial',
        'LocalStorageModule'
    ]);
})();
