(function () {
  'use strict';

  angular.module('MenuApp')
    .controller('ItemDetailController', ItemDetailController);


  ItemDetailController.$inject = ['$stateParams', 'MenuDataService ', 'items'];


  function ItemDetailController($stateParams, MenuDataService, items) {
    console.log("CTRL Itemsss", items.data.menu_items);
    var itemDetail = this;
    // console.log("Items",items);

    itemDetail.itemss = items.data.menu_items
    // promise.then(function (response) {
    //     console.log("CTRL Response", response.data.menu_items);
    //     itemDetail.itemss = response.data.menu_items;

    //   })
    //   .catch(function (error) {
    //     console.log(error);

    //   })



    //   var item = items[$stateParams.itemId];
    //   itemDetail.name = item.name;
    //  // itemDetail.quantity = item.quantity;
    //  // itemDetail.description = item.description;
  }

})();
