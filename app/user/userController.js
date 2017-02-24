(function ()
{
    'use strict';

    angular.module('app').controller('UserController', function (userDAO)
    {
        var ctrl = this;
        ctrl.newPeople = {firstName: ''};
        ctrl.saveNewUser = saveNewUser;

        function getUser()
        {
            userDAO.query().then(function (result)
            {
                ctrl.users = result;
            });
        }


        function saveNewUser()
        {
            userDAO.save(ctrl.newPeople).then(function ()
            {
                getUser()

            });
        }

        getUser();

    });

})();

