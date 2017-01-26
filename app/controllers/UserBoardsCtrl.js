app.controller('UserBoardsCtrl', function($scope, postedFactory, userBoardsFactory, $location) {
  userBoardsFactory.getBoards()
  .then((boards) => {
    $scope.boards = boards
    console.log(boards)
  })

  $scope.addBoard = (boardName) => {
  	userBoardsFactory
  		.addBoard(boardName)
  		.then(
		  	$location.url(`user/${boardName}`)
			)
			.then($('#new-board-modal').modal('close'))
  }

  $scope.setBoardId = function(id) {
      postedFactory.setBoardId(id)
      console.log(id)
  }


  $scope.openNewBoardModal = () => {
  	$('#new-board-modal').modal('open')
  }

  $(document).ready(function() {
  	$('.modal').modal()
  })
})
