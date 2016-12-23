var app = angular.module('app', ['ui.router']);
    
app.config([
    '$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/app/london');
        $stateProvider
            .state('app', {
                url: '/app',
                abstract: true,
                templateUrl: 'views/app.html'
            })

            .state('app.london', {
                url: '/london',
                templateUrl: "views/london.html",
                controller: "LondonController"
            })

            .state('app.paris', {
                url: '/paris',
                templateUrl: "views/paris.html",
                controller: "ParisController"
            })

            .state('app.tokyo', {
                url: '/tokyo',
                templateUrl: "views/tokyo.html",
                controller: "TokyoController"
            });
    }
]);