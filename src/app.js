var App = angular.module('cdrApp', ['ngRoute']);

App.config(['$routeProvider', function($routeProvider) {
        $routeProvider
        //change url if you where your page location
            .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'mainController'
        })
        .otherwise({
            redirectTo: '/'
        })
    }]);

App.controller('mainController', function($scope) {
    // console.log('my main category controller');
    $apiAddress = "http://192.168.0.195/knowledgebase/";
    var int1 = 10;
    var int2 = 40;
    var total = int1+int2;
    $scope.msg = 'Welcome';

    $scope.search = function() {

        var data = {
            'method': 2,
            'tenantid': $scope.tenantid,
        };
        $http({
                method: 'POST',
                url: $apiAddress + 'api.php',
                //data: $.param($scope.category), // pass in data as strings
                data: $.param(data),
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' } // set the headers so angular passing info as form data (not request payload)
            })
            .then(function(response) {
               if (response.data == 2) {

                    //alert('cannot save category');

                } else {
                    // if successful, bind success message to message
                    //retrieveData();
                    $scope.result = response.data;
                }
            });
    }

//end
});


    