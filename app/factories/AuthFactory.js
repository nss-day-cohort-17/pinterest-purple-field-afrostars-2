app.factory('AuthFactory', function($q) {
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
		}
	}
})
