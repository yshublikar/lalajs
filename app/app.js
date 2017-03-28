'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ui.router',
  'ngMessages'
]).
config(function($stateProvider, $urlRouterProvider) {
 $stateProvider
    .state('home', {
    name: 'home',
   templateUrl: 'view1/home.html'
  })

 .state('registration', {
    name: 'registration',
    templateUrl: 'view2/registration.html'
  })

});


