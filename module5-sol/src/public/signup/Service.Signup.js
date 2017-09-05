(function () {
    "use strict";

    angular.module('public')
        .service('SignupService', SignupService);


    SignupService.$inject = ['$http', 'ApiPath'];

    function SignupService($http, ApiPath) {
        var service = this;
        var userr = {};
        var menu_item = {};
        //   service.getMenuItemByShortName = function (shortname) {
        //     return $http.get(ApiPath + '/categories.json').then(function (response) {
        //       return response.data;
        //     });
        //   };


        service.getMenuItemByShortName = function (shortname) {

            var config = {};
            if (shortname) {
                config.params = {
                    'short_name': shortname + '.json'
                };
            }

            return $http.get(ApiPath + '/menu_items/' + shortname + '.json').then(function (response) {
                if (response.status === 200) {
                    menu_item = response.data;
                }
                return response.status;
            });
        };

        service.getAllMenuItems = function () {

            return $http.get(ApiPath + '/menu_items'  + '.json').then(function (response) {
             
                return response.data;
            });
        };


        service.saveInformation = function (user) {
            user.menu_item = menu_item;
            userr = user;

            console.log("Service User", user);
            // console.log("Menu_Item", menu_item);
        };

        service.getInfo = function () {
            return userr;
        };





        service.saveMenuItem = function (menuItem) {
            return $http.put(ApiPath + '/menu_items/' + menuItem.short_name, menuItem)
                .then(function (response) {
                    return response.data;
                });
        };

    }



})();
