//*********************************************
//      Reference of previous try at code
//*******************************************
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
//*******************************************************
//********************************************************


app.factory('postedFactory', function($routeParams, userBoardsFactory, $http) {
  var boardId;
  return {
    getPersonalBoard : () => {
      var arraything = [];

      return userBoardsFactory.getBoards()
      .then((val) =>{
        // console.log("ran getBoards")
        // console.log(val)
        boarddata = val
        console.log(boarddata)
        // console.log("more stuff")
        name = $routeParams.boardName //saves the name of the board

        var result = {};

        // var re = [];
        var boardTitle
        var boardPins

        angular.forEach(boarddata, function(value, key) {
          result[key] = value;
          // console.log("this is a key" + key)
          // console.log("this is a value" + value)
          // console.log("this is result[key]" + result[key])
          boardPins = result[key].pins
          boardTitle = result[key].title
          if( boardTitle == name) {


            var picture

            angular.forEach(boardPins, function(pinNumber, pinId) {
              picture = pinNumber.pin_id

              this.push(picture);
            }, arraything);
          }
        })
        return arraything
      })
    },
    addTag(tag) {
      tags.push(tag)
    },
    postNewPin(tags, url) {
      return $http({
        method : 'POST',
        url : 'https://pinterestclone-24ce7.firebaseio.com/pins.json',
        data : {
              tags : tags,
              url : url
        }
      })
    },
    getBoardId() {
      return boardId
    },
    setBoardId(key) {
      return $http.get('https://pinterestclone-24ce7.firebaseio.com/boards/.json').then(function(val){
          console.log(val)
          boardId = val
      })
    }
  }
})

//***************************************
//      Notes
//***************************************
// needs to get the board by title, so with an if function probably.
// something like if(boards[i].title === $scope.pinBoard)
// $scope.pictures= boards[i].pins
// might then loop through all the pins and make an array of pins with
// matching id's, then post that array
//*******************************************************
//****************************************************


//**************************************
//      Reference code for .push function
//*****************************************
// var values = {name: 'misko', gender: 'male'};
// var log = [];
// angular.forEach(values, function(value, key) {
//   this.push(key + ': ' + value);
// }, log);
// expect(log).toEqual(['name: misko', 'gender: male']);
//**********************************************************
//********************************************************



//
