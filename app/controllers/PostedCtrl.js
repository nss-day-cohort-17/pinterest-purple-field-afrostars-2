
app.controller('PostedCtrl', function($scope, $http, $routeParams, postedFactory) {
  $scope.tags = [];
  console.log("opening the worm can")
  $scope.pinBoard = $routeParams.boardName
  postedFactory.getPersonalBoard()
  .then(function(val) {
    $scope.personalBoard = val
    console.log(val)
  })
  console.log("can openned")
  // console.log(arraything)

  $scope.postNewPin = function() {
      postedFactory.postNewPin($scope.tags, $scope.pinUrl).then(console.log)
      $scope.pinUrl = null
      $scope.tagName = null
      $scope.tags = [];
  }

  $scope.addTag = function() {
    $scope.tags.push($scope.tagName)
    $scope.tagName = null
    console.log($scope.tags)
  }

  $scope.deleteTag = function($index) {
    $scope.tags.splice($index, 1)
  }
  
  $scope.openNewPinModal = () => {
  	$('#new-pin-modal').modal('open')
  }

  $(document).ready(function() {
  	$('.modal').modal()
  })

})




// This is a controller for displaying the pins (pictures)
// inside the board (mimicing the homepage)


//you need to get the information from the boards on what pictures
//are actually in the board that is selected, and display only those
//pictures.  possibly a loop to do this combined with a way to read the
//json pulled from firebase.
