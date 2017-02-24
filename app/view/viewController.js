(function ()
{
    'use strict';

    angular.module('app').controller('fileController', function (fileDAO, $routeParams)
    {
        var ctrl = this;
        ctrl.newPeople = {firstName: ""};

        function getFunction()
        {
            fileDAO.query().then(function (result)
            {
                ctrl.getUser = result;
            });
        }

        getFunction();


        function saves()
        {
            fileDAO.save(ctrl.newPeople).then(function ()
            {
                getFunction()

            });
        }

        ctrl.saves = saves;
    });

})();

