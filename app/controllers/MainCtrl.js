app.controller('MainCtrl', function($scope, $http, $routeParams, modalFactory, userBoardsFactory, $rootScope) {
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
	userBoardsFactory
		.getBoards()
		.then((returnVal) => {$scope.boards = returnVal})

	userBoardsFactory
		.getBoardsByUid($rootScope.uid)
		.then((returnVal) => {$scope.userBoards = returnVal})


		// $('.dynamic-grid').hide()
		// setTimeout(function() {
		// 	$('.dynamic-grid').show()
		// 	$scope.$apply()
		// }, 100)

	$scope.addPin = userBoardsFactory.addPin

	$(document).ready(function() {
		$('.modal').modal()
	})

	$scope.searchTag = $routeParams.query
	$scope.user = firebase.auth().currentUser
})
