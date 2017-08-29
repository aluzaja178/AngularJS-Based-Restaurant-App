(function () {
  'use strict';

  angular.module('data')
    .service('MenuDataService ', MenuDataService )
    .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
    .constant('ApiItems', " https://davids-restaurant.herokuapp.com/menu_items.json?category=");


  MenuDataService .$inject = ['$http', 'ApiBasePath', 'ApiItems'];

  function MenuDataService ($http, ApiBasePath, ApiItems) {
    var service = this;

    // List of shopping items
    var itemss = [];

    service.getAllCategories  = function () {
      var response = $http({
        method: "GET",
        url: (ApiBasePath + "/categories.json")
      });
     
      console.log("Response",response);
      return response;
    };

    service.getItemsForCategory  = function (param) {
      console.log("https://davids-restaurant.herokuapp.com/menu_items.json?category="+param+"");
      var response = $http({
        method: "GET",
        url: "https://davids-restaurant.herokuapp.com/menu_items.json?category="+param+""
      });
     
    //  console.log("Category Response",response);
      return response;
    };


  }

})();