app.controller('UserBoardsCtrl', function($scope, userBoardsFactory) {
  userBoardsFactory.getBoards()
  .then((val) => {
    $scope.boards = val
    console.log(val)
    console.log("yo dawg")
  })
})
