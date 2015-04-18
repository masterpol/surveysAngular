var configHome = function($routeProvider){
 
    $routeProvider.when("/home", {
        controller: "lutenantController",
        templateUrl: "views/home.html"
    });
 
}
 
//create module and config
var Home = angular.module("home", ["ngRoute"]).config(configHome);