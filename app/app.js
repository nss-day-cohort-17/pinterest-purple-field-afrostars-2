var config = {
	apiKey: "AIzaSyA6Z6gH80A3y4dQnmpvTl4mTdYmT1LHm2M",
	authDomain: "pinterestclone-24ce7.firebaseapp.com",
	databaseURL: "https://pinterestclone-24ce7.firebaseio.com",
	storageBucket: "pinterestclone-24ce7.appspot.com",
	messagingSenderId: "580484484772"
};
firebase.initializeApp(config);

    const checkForAuth = {
      checkForAuth ($location) {
        // http://stackoverflow.com/questions/37370224/firebase-stop-listening-onauthstatechanged
        const authReady = firebase.auth().onAuthStateChanged(user => {
          authReady()
          if (!user) {
            $location.url('/login')
          }
        })
      }
    }



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
	   	controller : 'PinCtrl',
	    resolve : checkForAuth
	   })
	   .when('/user/boards', {
	   	templateUrl : '/app/partials/userBoards.html',
	   	controller : 'UserBoardsCtrl',
	   	resolve : checkForAuth
	   })
	   .when('/user/:boardName', {
	   	templateUrl : '/app/partials/posted.html',
	   	controller : 'PostedCtrl',
	  	resolve : checkForAuth
	   })
	   .when('/login', {
	   	templateUrl : '/app/partials/login.html',
	   	controller : 'LoginCtrl',
	   	resolve : checkForAuth
	   })
	   .otherwise({
	   	redirectTo : '/'
	   })
})

$(document).ready(function() {
	$(".button-collapse").sideNav();
})

app.controller('GlobalCtrl', function($scope) {
    // Event listener for state change.
    $scope.$on('$stateChangeStart', function(event, toState, toParams) {
        $scope.bodyClass = toState.name + '-page';
    });
});
