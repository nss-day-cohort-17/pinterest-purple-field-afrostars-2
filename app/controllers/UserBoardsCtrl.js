app.controller('UserBoardsCtrl', function($scope, userBoardsFactory) {
  userBoardsFactory.getBoards()
  .then((val) => {
    $scope.boards = val
  })
})
