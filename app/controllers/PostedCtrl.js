
app.controller('PostedCtrl', function($scope, $http, $routeParams, postedFactory) {
  postedFactory.getBoardId($routeParams.boardName).then(function(val) {
    $scope.boardId = Object.keys(val.data)
  })

  $scope.tags = [];
  $scope.pinBoard = $routeParams.boardName
  postedFactory.getPersonalBoard()
  .then(function(val) {
    $scope.personalBoard = val
  })

  $scope.postNewPin = function() {
    $scope.personalBoard.push($scope.pinUrl)
      postedFactory.postNewPin($scope.tags, $scope.pinUrl).then(function(response) {
        $http({
          method : 'POST',
          url : `https://pinterestclone-24ce7.firebaseio.com/boards/${$scope.boardId}/pins.json`,
          data : {
            pin_id : response.data.name
          }
        })
      })
      $scope.pinUrl = null
      $scope.tagName = null
      $scope.tags = [];
  }

  $scope.addTag = function() {
    $scope.tags.push($scope.tagName)
    $scope.tagName = null
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
