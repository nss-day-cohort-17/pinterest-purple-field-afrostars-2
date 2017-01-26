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


app.factory('postedFactory', function($routeParams, userBoardsFactory, pinFactory, $http) {
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
        // console.log("more stuff")
        name = $routeParams.boardName //saves the name of the board
        // console.log($routeParams.boardName)
        // console.log(name)
        // console.log(boarddata)

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
          console.log(boardTitle)
          if( boardTitle == name) {
            console.log (boardTitle + " = " + name)
            console.log(boardPins)

            var picture

            angular.forEach(boardPins, function(pinNumber, pinId) {
              picture = pinNumber.pin_id
              // console.log(pinNumber)
              // return pinNumber.pin_id
              // console.log("this is the pin" + pinNumber)
              console.log("this is the pinId " + picture)
              console.log(picture)
              this.push(picture);
            }, arraything);
            console.log(arraything)
          }
        })
        // return arraything //got this part to work
        console.log("fine")
        console.log(arraything)

        return pinFactory.getPins()
        .then((val) =>{
          console.log("working")
          pindata = val
          console.log("here is a thing")
          console.log(pindata)
          // console.log(pindata.value)
          // angular.forEach(pindata, function() {
          //   this.push(pindata);
          // }, pinLink);
          // console.log(pinLink)


          // angular.forEach(pindata, function(value, key) {
          //   pinUid = value
          //   console.log("righty ho")
          //   console.log(pinUid)
          // })
          // return pindata
          console.log("Dogs and cats")
          console.log(arraything)
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
                console.log("this is the right pin match")
              }
            }
          })


        })
      })
    }//, //for getPersonalBoard

    // getPins : () => {  //Keep this around for if I need to use a second call



      // return pinFactory.getPins()
      // .then((val) =>{
      //   console.log("working")
      //   pindata = val
      //   console.log("here is a thing")
      //   console.log(pindata)
        // console.log(pindata.value)
        // angular.forEach(pindata, function() {
        //   this.push(pindata);
        // }, pinLink);
        // console.log(pinLink)

        // return pindata
      // })
    // } //for the getPins




  }//return for all things

  // return getPersonalBoard();
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
