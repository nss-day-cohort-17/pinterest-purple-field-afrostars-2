app.controller('MainCtrl', function($scope, $http, modalFactory, userBoardsFactory) {
	$http.get('https://pinterestclone-24ce7.firebaseio.com/pins.json')
	.then(function(val){
		let pins = val.data
		let images = []
		let i = 0
		for(key in pins) {
			images.push(pins[key])
			images[i].pin_id = key
			i++
		}
		$scope.images = images
	})

	$scope.setIndex = modalFactory.setIndex
	$scope.getIndex = modalFactory.getIndex
	$scope.boards = userBoardsFactory.getBoards()



	$(document).ready(function() {
		$('.modal').modal()
	})

	$scope.searchTag = $routeParams.query
})
