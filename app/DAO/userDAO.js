(function ()
{
    'use strict';

    function userDAO($resource)
    {
        var api = $resource('/api/user/:a', null, {
            query: {
                isArray: true
            }
        });

        return {
            query: function ()
            {
                return api.query().$promise;
            }, save: function (object)
            {
                return api.save(object).$promise;
            }
        };

    }

    angular.module('app').factory('userDAO', ['$resource', userDAO]);
})();
