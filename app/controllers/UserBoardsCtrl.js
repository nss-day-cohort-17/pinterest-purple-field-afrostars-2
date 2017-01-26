app.controller('UserBoardsCtrl', function($scope, userBoardsFactory, $location, $http, AuthFactory, $q) {

  const promiseOne = $http.get('https://pinterestclone-24ce7.firebaseio.com/boards.json');
  const promiseTwo = $http.get('https://pinterestclone-24ce7.firebaseio.com/pins.json');
  // Array of Promises
  $q.all([promiseOne, promiseTwo])
    .then(data => {
      console.log('Both promises have resolved', data);
      $scope.boards = data[0].data
      $scope.pins = data[1].data
      console.log('boards', $scope.boards)
      console.log('pins', $scope.pins)


  })

  // userBoardsFactory.getBoards()
  // .then((boards) => {
  //   $scope.boards = boards
  //   // userBoardsFactory.getBoardPins()
  //   // .then((pins) => {
  //   //   $scope.pins = pins
  //   // })
  // })

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
