app.controller('PostedCtrl', function($scope, $routeParams, postedFactory) {
  console.log("opening the worm can")
  $scope.pinBoard = $routeParams.boardName
  postedFactory.getPersonalBoard()
  // .then((val) => {
  //   $scope.personalBoard = val
  // })
  console.log("can openned")
})




// This is a controller for displaying the pins (pictures)
// inside the board (mimicing the homepage)


//you need to get the information from the boards on what pictures
//are actually in the board that is selected, and display only those
//pictures.  possibly a loop to do this combined with a way to read the
//json pulled from firebase.
