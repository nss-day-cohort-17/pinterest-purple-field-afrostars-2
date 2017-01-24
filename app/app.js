const app = angular.module('manApp', ['ngRoute', 'angularGrid']);

app.config(function($routeProvider, $locationProvider) {
	$locationProvider.hashPrefix('')

	$routeProvider
	   .when('/', {
	   	templateUrl : '/app/partials/main.html',
	   	controller : 'MainCtrl'
	   })
	   .when('/search/pins/:query', {
	   	templateUrl : '/app/partials/search.html',
	   	controller : 'MainCtrl'
	   })
	   // Not using this route currently
	   .when('/pin/:pinId', {
	   	templateUrl : '/app/partials/pin.html',
	   	controller : 'PinCtrl'
	   })
	   .when('/user/boards', {
	   	templateUrl : '/app/partials/userBoards.html',
	   	controller : 'UserBoardsCtrl'
	   })
	   .when('user/:boardName', {
	   	templateUrl : '/app/partials/posted.html',
	   	controller : 'PostedCtrl'
	   })
	   .otherwise({
	   	redirectTo : '/'
	   })
})

$(document).ready(function() {
	$(".button-collapse").sideNav();
})







