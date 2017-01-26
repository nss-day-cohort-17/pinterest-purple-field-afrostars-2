app.factory('userBoardsFactory', function($http, $q) {
  return {
    getBoards : () => {
      return $http.get('https://pinterestclone-24ce7.firebaseio.com/boards.json')
      .then((value) => {
        console.log(value)
        return value.data
      })
    },

    getBoardsAndPins : () => {
      const promiseOne = $http.get('https://pinterestclone-24ce7.firebaseio.com/boards.json');
      const promiseTwo = $http.get('https://pinterestclone-24ce7.firebaseio.com/pins.json');

        // Array of Promises
      return $q.all([promiseOne, promiseTwo])
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
    }
  }
})
