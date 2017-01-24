app.factory('modalFactory', function() {
	var index = ""
	setIndex = function(indx) {
		index = indx
	}

	getIndex = function() {
		console.log(index)
		return index
	}

	return {
		setIndex: setIndex,
		getIndex: getIndex
	}
})
