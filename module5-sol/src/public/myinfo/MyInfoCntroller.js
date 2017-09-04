(function () {
    "use strict";

    angular.module('public')
        .controller('MyInfoCntroller', MyInfoController);

    MyInfoController.$inject = ['SignupService'];

    function MyInfoController(SignupService) {
        
        var ctrl = this;
        ctrl.user  = SignupService.getInfo();
        if(angular.equals({}, ctrl.user)){
           
            ctrl.canshow = false;
        }
        else{

            ctrl.canshow = true;
        }
        console.log("ctrl.user", ctrl.user );

   
    }

})();