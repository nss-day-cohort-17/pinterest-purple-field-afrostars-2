app.factory('modalFactory', function() {
	var index = ""
	var currentPin = ""

	setIndex = function(indx) {
		index = indx
	}

	getIndex = function() {
		console.log(index)
		return index
	}

	// Not currently being used
	setCurrentPin = function(pin) {
		currentPin = pin
	}

	getCurrentPin = function() {
		return currentPin
	}

	return {
		setIndex: setIndex,
		getIndex: getIndex
	}
})
