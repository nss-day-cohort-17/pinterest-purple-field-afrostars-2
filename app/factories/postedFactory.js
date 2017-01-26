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
            // console.log(val)
            boarddata = val
            console.log("more stuff")
            name = $routeParams.boardName //saves the name of the board
            console.log($routeParams.boardName)
            console.log(name)

            console.log(boarddata)


            // var arraything = [];
            var result = {};
            // var re = [];
            angular.forEach(boarddata, function(value, key) {

                result[key] = value;
                boardPins = result[key].pins
                boardTitle = result[key].title
                console.log(boardTitle)
                if( boardTitle == name) {
                  console.log (boardTitle + " = " + name)
                  console.log(boardPins)

                }


            })

          })

    }
  }
})


// needs to get the board by title, so with an if function probably.
// something like if(boards[i].title === $scope.pinBoard)
// $scope.pictures= boards[i].pins
// might then loop through all the pins and make an array of pins with
// matching id's, then post that array






//
