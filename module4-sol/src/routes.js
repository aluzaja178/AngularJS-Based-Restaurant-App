(function () {
  'use strict';

  angular.module('MenuApp')
    .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

  function RoutesConfig($stateProvider, $urlRouterProvider) {

    // Redirect to home page if no other URL matches
    $urlRouterProvider.otherwise('/');

    // *** Set up UI states ***
    $stateProvider

      // Home page
      .state('home', {
        url: '/',
        templateUrl: 'src/shoppinglist/templates/home.template.html'
      })

      // Premade list page
      .state('mainList', {
        url: '/main-list',
        templateUrl: 'src/shoppinglist/templates/main-categories.template.html',
        controller: 'MainCategoriesController as mainList',
        resolve: {
          items: ['MenuDataService ', function (MenuDataService ) {
            return MenuDataService .getAllCategories();
            console.log("Response", MenuDataService .getAllCategories());

          }]
        }
      })

      .state('mainList.itemDetail', {
        url: '/item-detail/{itemId}',
        templateUrl: 'src/shoppinglist/templates/item-detail.template.html',
        controller: "ItemDetailController as itemDetail",

      });

  }

})();