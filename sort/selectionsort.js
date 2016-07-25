(function () {
	"use strict";

	var selectionsort = {
		/**
		 * [Selection sort]
		 * check all elment and put the smallest to the first.
		 * 
		 * @param  {[type]} array [an array you want to sort]
		 * @return {[type]}       [sorted array]
		 */
		sort: function(array) {
			var min = 0;
			var idx = 0;
			for (var i = 0; i < array.length; i++) {
      			idx = i;
      			min = array[i];

	      		for (var j = i+1; j < array.length; j++) {
	      			if(array[j] < min ){
	      				min = array[j];
	      				idx = j;
	      			}
	      		}
	      		_swap(i, idx, array);
	      	}
	      	return array;
		}
	    
	};

	var _swap = function(x, y, array){
		var temp = array[y];
		array[y] = array[x];
		array[x] = temp;
	};

	if (typeof module !== 'undefined' && typeof module.exports !== 'undefined')
    	module.exports = selectionsort;
 	else
    	window.selectionsort = selectionsort;
})();