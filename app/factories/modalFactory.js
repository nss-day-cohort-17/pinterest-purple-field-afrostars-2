app.factory('modalFactory', function() {
	var index = ""

	setIndex = function(indx) {
		index = indx
	}

	getIndex = function() {
		return index
	}

	return {
		setIndex: setIndex,
		getIndex: getIndex
	}
})
