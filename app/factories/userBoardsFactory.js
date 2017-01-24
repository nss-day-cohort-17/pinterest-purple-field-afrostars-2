app.factory('userBoardsFactory', function($http) {
  return {
    getBoards : () => {
      return $http.get('https://pinterestclone-24ce7.firebaseio.com/boards.json')
      .then((value) => {
        console.log(value)
        return value.data
      })
    }
    // setNewBoards : () => {
    //   return $http.post('https://pinterestclone-24ce7.firebaseio.com/boards.json')
    //   .then((value) => {console.log})
    // }
  }
})
