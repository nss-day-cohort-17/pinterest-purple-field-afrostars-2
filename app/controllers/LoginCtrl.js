app.controller('LoginCtrl', function($scope, $location, AuthFactory) {
	$(document).ready(function(){
	$('.modal').modal();
    $('#modal1').modal('open');
  });

  $scope.logIn = function() {
  	AuthFactory.signIn($scope.email, $scope.password)
      .then(function() {
        $location.url('/')
      })
 }

  $scope.register = function() {
    AuthFactory.newUser($scope.email, $scope.password)
      .then(function() {
        AuthFactory.postUser($scope.email, AuthFactory.getUid())
      })
      .then(function() {
        $location.url('/')
      })
 }
 $scope.logOut = function() {
    AuthFactory.signOut()
 	}
})
