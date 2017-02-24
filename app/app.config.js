(function ()
{
    'use strict';


    angular.module('app').config(function ($provide, $routeProvider)
    {
        $routeProvider.when('/', {
            templateUrl: 'user/user.html',
            controller: 'UserController',
            controllerAs: 'liCtrl'
        });
    });

})();
