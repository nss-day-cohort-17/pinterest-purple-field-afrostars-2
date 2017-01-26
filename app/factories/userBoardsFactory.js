app.factory('userBoardsFactory', function($http) {
  return {
    getBoards : () => {
      return $http.get('https://pinterestclone-24ce7.firebaseio.com/boards.json')
      .then((value) => {
        // console.log(value)
        return value.data
      })
    },
    addPin: (boardId, pinId) => {
			let data = {pin_id: pinId}
			$http.post(`https://pinterestclone-24ce7.firebaseio.com/boards/${boardId}/pins.json`, JSON.stringify(data))
		},
    addBoard: (boardName, uid) => {
      let data = {
        title: boardName,
        uid: uid
      }
      return $http.post(`https://pinterestclone-24ce7.firebaseio.com/boards/.json`, JSON.stringify(data))
    },
    getBoardsByUid: function(uid) {
      return $http.get('https://pinterestclone-24ce7.firebaseio.com/boards.json')
        .then((value) => {
          let allBoards = value.data
          let userBoards = {}
          for(boardId in allBoards) {
            if (allBoards[boardId].uid === uid) {
              userBoards[boardId] = allBoards[boardId]
            }
          }
          return userBoards
        })
    }
  }
})
