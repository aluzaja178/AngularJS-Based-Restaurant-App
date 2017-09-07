(function () {
    'use strict';

    angular.module('ShoppingListCheckOffApp', [])
        .controller('ToBuyController', ToBuyShoppingListController)
        .controller('AlreadyBoughtController', AlreadyBoughtShoppingListShowController)
        .service('ShoppingListCheckOffService', ShoppingListService);

    ToBuyShoppingListController.$inject = ['ShoppingListCheckOffService'];

    function ToBuyShoppingListController(ShoppingListService) {
        var showItems = this;
        showItems.items = ShoppingListService.getItems();


        showItems.removeItem = function (itemIndex) {
            ShoppingListService.removeItem(itemIndex);

        };

        console.log(showItems.items);
    }


    AlreadyBoughtShoppingListShowController.$inject = ['ShoppingListCheckOffService'];

    function AlreadyBoughtShoppingListShowController(ShoppingListService) {
        var showBoughtList = this;

        showBoughtList.boughtItems = ShoppingListService.getBoughtItems();
    }


    function ShoppingListService() {
        var service = this;

        var items = [{
                name: "Mangoes",
                quantity: 10
            },
            {
                name: "Bananas",
                quantity: 10
            },
            {
                name: "Peanuts",
                quantity: 10
            },
            {
                name: "Milk food",
                quantity: 10
            },
            {
                name: "Grapes",
                quantity: 10
            }
        ];

        var boughtItems = [];

        service.removeItem = function (itemIdex) {
            var item = items[itemIdex];
            service.addBoughtItem(item.name, item.quantity);
            items.splice(itemIdex, 1);


        };

        service.addBoughtItem = function (itemName, quantity) {
            var item = {
                name: itemName,
                quantity: quantity
            };
            boughtItems.push(item);
            console.log("Service Method Array", boughtItems);
        };

        service.getItems = function () {
            return items;
        };

        service.getBoughtItems = function () {

            return boughtItems;
        };
    }

})();