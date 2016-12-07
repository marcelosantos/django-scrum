(function () {
    'use strict';

    angular.module('scrumboard.demo')

        .directive('ngEnter', function () {
            return function (scope, element, attrs) {
                element.bind("keydown keypress", function (event) {

                if(event.which === 13) {
                    scope.$apply(function (){
                    scope.$eval(attrs.ngEnter);
                });
                event.preventDefault();
                }
            })
            }
        })

        .controller('ScrumboardController',
                    ['$scope', '$http', '$location', '$routeParams', 'Login', ScrumboardController]);

    function ScrumboardController($scope, $http, $location, $routeParams, Login) {

        Login.redirectIfNotLoggedIn();
        $scope.data = [];
        $scope.logout = Login.logout;
        $scope.sortBy = 'story_points';
        $scope.reverse = true;
        $scope.showFilters = false;


        $http.get('/scrumboard/lists/').then(
            function (response) {
                $scope.data = response.data;
            }
        );

        $scope.add = function (list, title) {
            var card = {
                list: list.id,
                owner: Login.currentUser().id,
                title: title
            };

            $http.post('/scrumboard/cards/', card)
                .then(function (response) {
                    list.cards.push(response.data);
                },
                function(){
                    alert('Could not create card');
                }
            );

        };


        activate();

        function activate() {
            if (!Login.isLoggedIn()) {
                $location.url('/login');
            }

            $scope.project = {name: "Loading.."};
            $scope.logout = Login.logout;

            var url = '/scrumboard/projects/' + $routeParams.projectId + '/';
            $http.get(url).then(
                function (response) {
                    $scope.project = response.data;
                }, function(){
                    alert('Could not load project :(');
                }
            );
        }


    }

}());
