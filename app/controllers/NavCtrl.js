app.controller('NavCtrl', function($scope, $location) {
	$scope.searchForPins = function() {
		$location.url(`/search/pins/${$scope.searchTag}`)
	}
 })
