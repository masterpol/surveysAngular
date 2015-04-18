var configHome = function($routeProvider) {
 
    $routeProvider.when("/", {
        controller: "homeController",
        templateUrl: "views/home.html"
    });
 
}
 
//create module and config
var Home = angular.module("Home", ["ngRoute"]).config(configHome);