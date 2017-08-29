(function () {
'use strict';

angular.module('MenuApp')
.controller('MainCategoriesController', MainCategoriesController);


MainCategoriesController.$inject = ['MenuDataService ', 'items'];
function MainCategoriesController(ShoppingListService, items) {
  var mainlist = this;
  mainlist.items = items;
}

})();
