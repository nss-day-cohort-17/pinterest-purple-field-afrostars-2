app.controller('UserBoardsCtrl', function($scope, userBoardsFactory, $location, postedFactory, AuthFactory, $rootScope) {

  userBoardsFactory.getBoardsAndPins()
  .then((boardsAndPins) => {
    $scope.boards = boardsAndPins[0].data
    $scope.pins = boardsAndPins[1].data
  })

  userBoardsFactory.getBoardsByUid($rootScope.uid)
    .then((boards) => $scope.userBoards = boards)


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
