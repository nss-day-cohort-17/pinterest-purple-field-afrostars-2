app.factory('postedFactory', function($http) {
  return {
    getPersonalBoard : () => {
      return $http.get('https://pinterestclone-24ce7.firebaseio.com/boards.json')
      .then((value) => {
        console.log(value)
        return value.data
      })
    }
  }
})
