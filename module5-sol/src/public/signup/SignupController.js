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

            var promise = SignupService.getMenuItemByShortName(reg.menu);
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
                    }
                })
                .catch(function (error) {
                    console.log(error);
                })


            reg.completed = true;
        };
    }

})();