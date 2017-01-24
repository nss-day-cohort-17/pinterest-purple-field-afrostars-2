app.controller('UserBoardsCtrl', ($scope, $http) => {
  userBoardsFactory.getBoards()
  .then((val) => {
    $scope.boards = val.title
  })
}])
