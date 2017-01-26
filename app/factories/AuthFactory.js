app.factory('AuthFactory', function($q, $http) {
	return {
		newUser(email, password) {
			return $q.resolve(firebase.auth().createUserWithEmailAndPassword(email, password))
		},
		signIn(email, password) {
			return $q.resolve(firebase.auth().signInWithEmailAndPassword(email, password))
		},
		signOut() {
			return $q.resolve(firebase.auth().signOut())
		},
		getUid() {
			return firebase.auth().currentUser.uid
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
