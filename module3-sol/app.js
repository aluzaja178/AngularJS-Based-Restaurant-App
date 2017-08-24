(function () {
  'use strict';

  angular.module('MenuCategoriesApp', [])
    .controller('MenuCategoriesController', MenuCategoriesController)
    .service('MenuCategoriesService', MenuCategoriesService)
    .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
    .directive('foundItems', FoundItemsDirective);

  function FoundItemsDirective() {
    var ddo = {
      templateUrl: 'foundItems.html',
      scope: {
        found: '<',
        myTitle: '@title',
        badRemove: '=',
        onRemove: '&'
      },
      controller: FoundItemsDirectiveController,
      controllerAs: 'menu',
      bindToController: true
    };

    return ddo;
  }

  function FoundItemsDirectiveController() {
    var menu = this;

    menu.cookiesInList = function () {
      for (var i = 0; i < list.items.length; i++) {
        var name = list.items[i].name;
        if (name.toLowerCase().indexOf("cookie") !== -1) {
          return true;
        }
      }

      return false;
    };
  }


  MenuCategoriesController.$inject = ['MenuCategoriesService'];

  function MenuCategoriesController(MenuCategoriesService) {
    var menu = this;
    menu.searchTermVal = null;
    menu.found = null;

    var promise = MenuCategoriesService.getMenuCategories();

    promise.then(function (response) {
        menu.categories = response.data;
      })
      .catch(function (error) {
        console.log("Something went terribly wrong.");
      });

    menu.logMenuItems = function (searchTermVal) {

      var promise = MenuCategoriesService.getMenuForCategory(searchTermVal);

      promise.then(function (response) {
          console.log("CTRL", response)
          menu.found = response;

        })
        .catch(function (error) {
          console.log(error);
        })
    };

    menu.removeItem = function (itemIndex) {

      MenuCategoriesService.removeItem(itemIndex);

    };

  }


  MenuCategoriesService.$inject = ['$http', 'ApiBasePath'];

  function MenuCategoriesService($http, ApiBasePath) {
    var service = this;
    var resultt = [];


    service.getMenuCategories = function () {
      var response = $http({
        method: "GET",
        url: (ApiBasePath + "/categories.json")
      });

      return response;
    };




    service.getMenuForCategory = function (shortName) {

      console.log("Search", shortName);
      var response = $http({
        method: "GET",
        url: (ApiBasePath + "/menu_items.json"),
        params: {
          description: shortName
        }
      }).then(function (result) {

        var json = result.data;


        for (var i = 0; i < json.menu_items.length; i++) {
          var obj = json.menu_items[i];
          if (obj.name.includes(shortName)) {
            resultt.push(obj);
          }


        }
        return resultt;

      });

      return response;
    };

    service.removeItem = function (itemIndex) {
      resultt.splice(itemIndex, 1);
    };

  }

})();