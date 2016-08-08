(function () {
	"use strict";

	var insertionsort = {
		/**
		 * [Insertion Sort]
		 * check two elements from 0 to n and put large one to the left.
		 * 
		 * @param  {[type]} array [an array you want to sort]
		 * @return {[type]}        [sorted array]
		 */
		sort: function(array) {

	      	return array;
		}
	    
	};

	var _swap = function(x, y, array){
		var temp = array[y];
		array[y] = array[x];
		array[x] = temp;
	};

	if (typeof module !== 'undefined' && typeof module.exports !== 'undefined')
    	module.exports = insertionsort;
 	else
    	window.insertionsort = insertionsort;
})();