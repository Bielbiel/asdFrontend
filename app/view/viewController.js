(function ()
{
    'use strict';

    angular.module('app').controller('fileController', function (fileDAO)
    {
        var ctrl = this;

        function getFunction()
        {
            fileDAO.query().then(function (result)
            {
                ctrl.getFunction = result;
            });
        }
        getFunction();

        function saves()
        {
            fileDAO.save(ctrl.getFunction);
            getFunction()
        }
        ctrl.saves = saves;
    });

})();

