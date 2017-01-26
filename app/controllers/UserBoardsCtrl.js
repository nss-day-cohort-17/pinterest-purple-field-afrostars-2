app.controller('UserBoardsCtrl', function($scope, userBoardsFactory, $location) {
  userBoardsFactory.getBoards()
  .then((boards) => {
    $scope.boards = boards
    // userBoardsFactory.getBoardPins()
    // .then((pins) => {
    //   $scope.pins = pins
    // })
  })

  $scope.addBoard = (boardName) => {
  	userBoardsFactory
  		.addBoard(boardName)
  		.then(
		  	$location.url(`user/${boardName}`)
			)
			.then($('#new-board-modal').modal('close'))
  }

  $scope.openNewBoardModal = () => {
  	$('#new-board-modal').modal('open')
  }

  $(document).ready(function() {
  	$('.modal').modal()
  })
})
