app.factory('AuthFactory', function($q, $http) {

	let uid = null

	return {
		newUser(email, password) {
			return $q.resolve(firebase.auth().createUserWithEmailAndPassword(email, password))
				.then((responseObj) => uid = responseObj.uid)
		},
		signIn(email, password) {
			return $q.resolve(firebase.auth().signInWithEmailAndPassword(email, password))
				.then((responseObj) => uid = responseObj.uid)
		},
		signOut() {
			return $q.resolve(firebase.auth().signOut())
				.then(() => uid = null)
		},
		getUid() {
			return uid
		},
		postUser(email, uid) {
			const url = 'https://pinterestclone-24ce7.firebaseio.com/users.json'
			let data = {
				name: email,
				uid: uid
			}
			$http.post(url, JSON.stringify(data))
		}
	}
})
