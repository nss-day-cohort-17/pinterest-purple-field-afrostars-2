//***************************




app.factory('pinFactory', function($http) {
   return {
    getPins : () => {
      return $http.get('https://pinterestclone-24ce7.firebaseio.com/pins.json')
       .then((value) => {
         // console.log(value)
         return value.data
       })
    }
   }
 })
