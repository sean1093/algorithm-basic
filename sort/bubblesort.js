(function () {
	"use strict";

	var bubblesort = {
		/**
		 * [Bubble sort]
		 * check two elements from 0 to n and put large one to the left.
		 * 
		 * @param  {[type]} array [an array you want to sort]
		 * @return {[type]}        [sorted array]
		 */
		sort: function(array) {
			var n = array.length;

			for (var i = 0; i < n-1; i++) {
				for (var j = 0; j<n-i-1; j++) {
					if(array[j] > array[j+1]){
						// console.log("swap: "+array[j]+", "+array[j+1]);
						_swap(j, j+1, array);
					}
				}
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
    	module.exports = bubblesort;
 	else
    	window.bubblesort = bubblesort;
})();