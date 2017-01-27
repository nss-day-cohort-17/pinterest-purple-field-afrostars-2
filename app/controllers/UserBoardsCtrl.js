app.controller('UserBoardsCtrl', function($scope, userBoardsFactory, $location, postedFactory, AuthFactory, $rootScope) {
  console.log('UserBoardsCtrl root scope uid is ' +$rootScope.uid)
  userBoardsFactory.getBoardsAndPins()
  .then((boardsAndPins) => {
    $scope.boards = boardsAndPins[0].data
    $scope.pins = boardsAndPins[1].data
  })
  
  $scope.logUid = function() {console.log($rootScope.uid)}

  userBoardsFactory.getBoardsByUid($rootScope.uid)
    .then((boards) => $scope.userBoards = boards)
    .then(console.log($scope.userBoards))

  $scope.addBoard = (boardName) => {
  	userBoardsFactory
  		.addBoard(boardName, AuthFactory.getUid())
  		.then(
		  	$location.url(`user/${boardName}`)
			)
			.then($('#new-board-modal').modal('close'))
  }

  $scope.setBoardId = function(key) {
      postedFactory.setBoardId(key)
  }


  $scope.openNewBoardModal = () => {
    $('#new-board-modal').modal('open')
  }

  $(document).ready(function() {
    $('.modal').modal()
  })
})
