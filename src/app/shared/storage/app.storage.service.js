(function() {
    'use strict';

    angular
        .module('simpleLoginApp')
        .factory('storageService', storageService);

    storageService.$inject = ['localStorageService'];

    function storageService(localStorageService) {

        var userDatabase = {
            load : function() {
                var data = localStorageService.get('users');
                return data === null ? [] : data;
            },
            save : function(data) {
                return localStorageService.set('users', data);
            },
            update : function(user) {
                var data = this.load();
                data.push(user);
                return this.save(data);
            }
        };

        return {
            selectUser : function(data) {
                var usuarios = userDatabase.load();

                return usuarios.filter(function(element) {
                    return element.username === data;
                });
            },
            addUser : function(data) {
                return userDatabase.update(data);
            },
            getAllUsers : function() {
                return userDatabase.load();
            }
        };
    }
})();
