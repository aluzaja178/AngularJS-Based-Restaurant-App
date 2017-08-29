(function () {
  'use strict';

  angular.module('MenuApp')
    .controller('ItemDetailController', ItemDetailController);


  ItemDetailController.$inject = ['$stateParams', 'MenuDataService '];

  function ItemDetailController($stateParams, MenuDataService ) {
    var itemDetail = this;
    // console.log("Items",items);
    var promise = MenuDataService .getItemsForCategory($stateParams.itemId);

    promise.then(function (response) {
        console.log("CTRL Response", response.data.menu_items);
        itemDetail.itemss = response.data.menu_items;

      })
      .catch(function (error) {
        console.log(error);

      })



    //   var item = items[$stateParams.itemId];
    //   itemDetail.name = item.name;
    //  // itemDetail.quantity = item.quantity;
    //  // itemDetail.description = item.description;
  }

})();