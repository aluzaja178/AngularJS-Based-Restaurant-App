(function () {
    "use strict";

    angular.module('public')
        .controller('SignupController', SignupController);

    SignupController.$inject = ['SignupService'];

    function SignupController(SignupService) {
        var reg = this;
        reg.firstname = '';
        reg.lastname = '';
        reg.phone = '';
        reg.email = '';
        reg.menu = '';
        reg.found = false;

        reg.submit = function () {

            var promise = SignupService.getMenuItemByShortName(reg.menu.toUpperCase());
            promise.then(function (response) {
                    console.log("Status", response);
                    if (response === 200) {
                        var user = {
                            FirstName: reg.firstname,
                            LastName: reg.lastname,
                            phone: reg.phone,
                            email: reg.email
                        };

                        SignupService.saveInformation(user);
                        reg.found = true;
                        reg.notfound = false;
                    }
                })
                .catch(function (error) {
                    if (error.status === 500) {
                        reg.notfound = true;
                        reg.found = false;
                    }
                })


            reg.completed = true;
        };

        reg.onMenuChange = function (menu) {
            var promise = SignupService.getAllMenuItems();

            promise.then(function (response) {
                    reg.onMenuChangelbl = false;
                    angular.forEach(response.menu_items, function (item) {
                        if (item.short_name === menu) {
                            console.log("Found", item.short_name);
                            reg.onMenuChangelbl = true;
                            
                           
                            /////  reg.notfound = false;
                        }



                    });

                })
                .catch(function (error) {

                })



        };
    }

})();
