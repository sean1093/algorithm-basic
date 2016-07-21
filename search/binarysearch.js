(function () {
	"use strict";

	var binarysearch = {
		/**
		 * [search binarysearch]
		 * @param  {[type]} key    [a key value you want to search]
		 * @param  {[type]} target [an sorted array]
		 * @return {[type]}        [array index]
		 */
		search: function(key, target) {
	      	var left = 0;
			var mid = 0;
			var right = target.length-1;
			
			while(left <= right){
				mid = Math.round((left+right)/2);
				if(target[mid] > key){
					right = mid;
				}
				else if(target[mid] < key){
					left = mid;
				}
				else if(target[mid] === key){
					return mid;
				}
			}
		}
	    
	};

	if (typeof module !== 'undefined' && typeof module.exports !== 'undefined')
    	module.exports = binarysearch;
 	else
    	window.binarysearch = binarysearch;
})();