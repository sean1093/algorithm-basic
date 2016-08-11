(function () {
	"use strict";

	var insertionsort = {
		/**
		 * [Insertion Sort]
		 * dev
		 * 
		 * @param  {[type]} array [an array you want to sort]
		 * @return {[type]}        [sorted array]
		 */
		sort: function(array) {

			for(var i=0; i<array.length; i++){

				
				// _insert(5,3,array);
			}
			// _insert(5,3,array);
				
	      	return array;
		}
	    
	};

	var _swap = function(x, y, array){
		var temp = array[y];
		array[y] = array[x];
		array[x] = temp;
	};

	/**
	 * [_insert insert source into target in array]
	 * @param  {[Number]} source [source index]
	 * @param  {[Number]} target [target index]
	 * @param  {[Array]} array  [target array]
	 */
	var _insert = function(source, target, array){
		var temp = array[source];		
		for(var i = source-1; i >= target; i--) {
        	if(i<0){break;}
        	array[i + 1] = array[i];
    	}
		array[target] = temp;
	};


	if (typeof module !== 'undefined' && typeof module.exports !== 'undefined')
    	module.exports = insertionsort;
 	else
    	window.insertionsort = insertionsort;
})();