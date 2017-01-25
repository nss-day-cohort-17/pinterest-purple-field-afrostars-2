// app.factory('postedFactory', function($http) {
//   return {
//     getPersonalBoard : () => {
//       return $http.get('https://pinterestclone-24ce7.firebaseio.com/boards.json')
//       .then((value) => {
//         console.log(value)
//         return value.data
//       })
//     }
//   }
// })



app.factory('postedFactory', function($http) {
  return {
    // var pinbook = []
        getPersonalBoard : () => {
      return $http.get('https://pinterestclone-24ce7.firebaseio.com/boards.json')
           .then((value) => {
             console.log(value)
             return value.data
    //   userBoardsFactory.getBoards()
    //   .then((val) => {
    //     $scope.boards = val
    //     console.log(val)
    //     console.log("yo cat")
    //   })
    //
    //
    //
    //
    //
    //   $scope.pinBoard = $routeParams.boardName
    //
    //
    //   for(var i = 0; i < $scope.boards.length; i++) {
    //     if($scope.boards[i].title === $scope.pinBoard) {
    //       pinbook = $scope.boards[i].pins
    //     }
  })
    }
    // console.log("hay")
  }
})



// app.factory('userBoardsFactory', function($http) {
//   return {
//     getBoards : () => {
//       return $http.get('https://pinterestclone-24ce7.firebaseio.com/boards.json')
//       .then((value) => {
//         console.log(value)
//         return value.data
//       })
//     }
//   }
// })

// needs to get the board by title, so with an if function probably.
// something like if(boards[i].title === $scope.pinBoard)
// $scope.pictures= boards[i].pins
// might then loop through all the pins and make an array of pins with
// matching id's, then post that array
