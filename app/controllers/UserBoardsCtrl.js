app.controller('UserBoardsCtrl', function($scope, userBoardsFactory, $location, $http, AuthFactory) {
  userBoardsFactory.getBoardsAndPins()
  .then((boardsAndPins) => {
    $scope.boards = boardsAndPins[0].data
    $scope.pins = boardsAndPins[1].data
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
