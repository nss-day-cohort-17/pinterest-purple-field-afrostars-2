app.controller('NavCtrl', function($scope, $location, AuthFactory) {
	$scope.searchForPins = function() {
		$location.url(`/search/pins/${$scope.searchTag}`)
	}
	$scope.user = firebase.auth().currentUser
	$scope.logOut = AuthFactory.signOut
 })
