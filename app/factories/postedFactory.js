//*******************************************************
//********************************************************

app.factory('postedFactory', function($routeParams, userBoardsFactory, pinFactory, $http) {
  
  var boardId;

  return {
    getPersonalBoard : () => {
      var arraything = [];
      var pinUid
      var pinLink = [];

      return userBoardsFactory.getBoards()
      .then((val) =>{
        // console.log("ran getBoards")
        // console.log(val)
        boarddata = val
        console.log(boarddata)
        // console.log("more stuff")
        name = $routeParams.boardName //saves the name of the board

        var result = {};
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
        console.log("fine")
        console.log(arraything)

        return pinFactory.getPins()
        .then((val) =>{
          console.log("working")
          pindata = val
          console.log("here is a thing")
          // console.log(pindata)
          console.log("Dogs and cats")
          // console.log(arraything)
          var pinKey
          angular.forEach(pindata, function(value, key) {
            currentPin = value
            pinKey = key
            // console.log(key)
            // console.log(currentPin.url)
            for ( var i = 0; i < arraything.length; i++) {
              // console.log("this is from the array")
              // console.log(arraything[i])
              if ( arraything[i] == pinKey) {
                console.log("john the coward")
                properUrl = currentPin.url
                pinLink.push(properUrl);
              }
            }
          })
          return pinLink
          console.log(pinLink)
        })
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
        boardId = key
    }

  }//return for all things
  return getPersonalBoard();

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




//
