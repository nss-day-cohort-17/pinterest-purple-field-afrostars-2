app.controller('MainCtrl', function($scope, $http) {
	$http.defaults.headers.common["Api-Key"] = '8q74e5hd4drev8c9wwbm2zhf';
	$http.get('https://api.gettyimages.com/v3/search/images?fields=id,title,referral_destinations,comp&sort_order=best&phrase=football')
	.then(function(val){
		console.log(val)
		$scope.images = val.data.images
	})

	$(document).ready(function() {
		$('.modal').modal()
	})
})
