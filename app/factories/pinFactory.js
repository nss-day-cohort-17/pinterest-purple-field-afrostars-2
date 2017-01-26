//********************************
//        Base code
//***************************




// app.factory('userBoardsFactory', function($http) {
//   return {
//     getBoards : () => {
//       return $http.get('https://pinterestclone-24ce7.firebaseio.com/boards.json')
//       .then((value) => {
//         // console.log(value)
//         return value.data
//       })
//     },
//     addPin: (boardId, pinId) => {
// 			let data = {pin_id: pinId}
// 			$http.post(`https://pinterestclone-24ce7.firebaseio.com/boards/${boardId}/pins.json`, JSON.stringify(data))
// 		}
//   }
// })
