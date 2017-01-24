app.controller('MainCtrl', function($scope, $http) {
	$http.get('https://pinterestclone-24ce7.firebaseio.com/pins.json')
	.then(function(val){
		$scope.images = val.data
		console.log($scope.images)
	})
	$(document).ready(function() {
		$('.modal').modal()
	})
	
})
