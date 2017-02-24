(function ()
{
    'use strict';
    var module = angular.module('app', ['ngResource', 'ngRoute']);

    module.config(function ($provide, $routeProvider)
    {
        $routeProvider.when('/', {
            templateUrl: 'view/view.html',
            controller: 'fileController',
            controllerAs: 'liCtrl'
        });
    });

})();

