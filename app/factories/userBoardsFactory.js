app.factory('userBoardsFactory', ($http)=> {
  return {
    getBoards : ()=> {
      return $http.get('https://pinterestclone-24ce7.firebaseio.com/boards.json')
      .then(console.log)
    }
  }
})
