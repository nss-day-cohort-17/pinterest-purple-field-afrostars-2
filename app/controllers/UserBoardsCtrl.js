app.controller('UserBoardsCtrl', function($scope, userBoardsFactory, $location, AuthFactory) {
  userBoardsFactory.getBoards()
  .then((boards) => {
    $scope.boards = boards
    // userBoardsFactory.getBoardPins()
    // .then((pins) => {
    //   $scope.pins = pins
    console.log(boards)
    console.log("yo dawg")
    // })
  })

  $scope.logUid = function() {console.log(AuthFactory.getUid())}

  userBoardsFactory.getBoardsByUid(AuthFactory.getUid())
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

  $scope.openNewBoardModal = () => {
  	$('#new-board-modal').modal('open')
  }

  $(document).ready(function() {
  	$('.modal').modal()
  })
})
