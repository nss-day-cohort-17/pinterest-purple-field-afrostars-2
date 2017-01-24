app.controller('UserBoardsCtrl', ($scope, userBoardsFactory) => {
  userBoardsFactory.getBoards()
  .then((val) => {
    $scope.boards = val.title
  })
})
