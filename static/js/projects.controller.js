(function(){
    angular.module('scrumboard.demo')
        .controller('ProjectsController', ['$scope', '$http', '$location', 'Login', ProjectsController]);

    function ProjectsController ($scope, $http, $location, Login) {

        activate();

        function activate(){
            if (!Login.isLoggedIn()) {
                $location.url('/login');
            }

            $scope.user = Login.currentUser();
            $scope.logout = Login.logout;

            $http.get('/scrumboard/projects/')
                .then(function(response){
                    $scope.projects = response.data;
                });
        }
    }
})();
