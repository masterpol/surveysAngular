"use strict";

var configHome = function($routeProvider) {
 
    $routeProvider.when("/", {
        controller: "homeController",
        templateUrl: "views/home.html"
    }).
    when("/form", {
        controller: "questionsController",
        templateUrl: "views/form.html"
    });
 
}
 
//create module and config
var Home = angular.module("Home", ["ngRoute"]).config(configHome);