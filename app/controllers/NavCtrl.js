app.controller('NavCtrl', function($scope, $location, AuthFactory) {
	$scope.searchForPins = function() {
		$location.url(`/search/pins/${$scope.searchTag}`)
	}
	$scope.logOut = AuthFactory.signOut
 })
