app.controller('PostedCtrl', function($scope) {
  $scope.openNewPinModal = () => {
  	$('#new-pin-modal').modal('open')
  }

  $(document).ready(function() {
  	$('.modal').modal()
  })
})
