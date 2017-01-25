app.controller('UserBoardsCtrl', function($scope, userBoardsFactory) {
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
})
