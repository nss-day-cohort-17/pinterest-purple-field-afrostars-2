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
        boarddata = val
        name = $routeParams.boardName //saves the name of the board

        var result = {};
        var boardTitle
        var boardPins

        angular.forEach(boarddata, function(value, key) {
          result[key] = value;
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

        return pinFactory.getPins()
        .then((val) =>{
          pindata = val

          var pinKey
          angular.forEach(pindata, function(value, key) {
            currentPin = value
            pinKey = key

            for ( var i = 0; i < arraything.length; i++) {

              if ( arraything[i] == pinKey) {

                properUrl = currentPin.url
                pinLink.push(properUrl);
              }
            }
          })
          return pinLink

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
    getBoardId(boardName) {
      return $http.get(`https://pinterestclone-24ce7.firebaseio.com/boards.json?orderBy="title"&equalTo="${boardName}"`)
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
