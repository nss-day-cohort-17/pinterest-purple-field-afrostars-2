app.controller('MainCtrl', function($scope, $http, modalFactory) {
	$http.get('https://pinterestclone-24ce7.firebaseio.com/pins.json')
	.then(function(val){
		$scope.images = val.data
		console.log($scope.images)
	})

	$scope.logIndex = function(indx) {console.log('indx', indx)}

	$(document).ready(function() {
		$('.modal').modal()
	})

})
