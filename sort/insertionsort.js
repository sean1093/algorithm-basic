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

	var _insert = function(source, target, array){
		var temp = array[source];
		array.splice(target, 0, array[source]);

		
	};

	// Array Remove - By John Resig (MIT Licensed)
	// Array.prototype.remove = function(from, to) {
	//   var rest = this.slice((to || from) + 1 || this.length);
	//   this.length = from < 0 ? this.length + from : from;
	//   return this.push.apply(this, rest);
	// };

	if (typeof module !== 'undefined' && typeof module.exports !== 'undefined')
    	module.exports = insertionsort;
 	else
    	window.insertionsort = insertionsort;
})();