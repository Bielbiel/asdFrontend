(function ()
{
    'use strict';

    function fileDAO($resource)
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

    angular.module('app').factory('fileDAO', ['$resource', fileDAO]);
})();
