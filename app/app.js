var config = {
	apiKey: "AIzaSyA6Z6gH80A3y4dQnmpvTl4mTdYmT1LHm2M",
	authDomain: "pinterestclone-24ce7.firebaseapp.com",
	databaseURL: "https://pinterestclone-24ce7.firebaseio.com",
	storageBucket: "pinterestclone-24ce7.appspot.com",
	messagingSenderId: "580484484772"
};
firebase.initializeApp(config);



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
