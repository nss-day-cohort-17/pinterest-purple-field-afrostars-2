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



app.factory('postedFactory', function($routeParams, userBoardsFactory, $http) {
  return {
    // var pinbook = []
        getPersonalBoard : () => {
          userBoardsFactory.getBoards()
          .then((val) =>{
            console.log("ran getBoards")
            console.log(val)
            console.log("more stuff")
            dog = $routeParams.boardName //saves the name of the board
            console.log($routeParams.boardName)
            console.log(dog)
          })

    //   $scope.pinBoard = $routeParams.boardName
    //
    //
    //   for(var i = 0; i < $scope.boards.length; i++) {
    //     if($scope.boards[i].title === $scope.pinBoard) {
    //       pinbook = $scope.boards[i].pins
    //     }
  // }
    }
  }
})


// needs to get the board by title, so with an if function probably.
// something like if(boards[i].title === $scope.pinBoard)
// $scope.pictures= boards[i].pins
// might then loop through all the pins and make an array of pins with
// matching id's, then post that array
