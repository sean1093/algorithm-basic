// (function () {
	// "use strict";

	/**
	 * [binarysearch description]
	 * @param  {[type]} key    [a key value you want to search]
	 * @param  {[type]} target [an sorted rray]
	 * @return {[type]}        [array index]
	 */
	function binarysearch(key, target){
		console.log(target);
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

// }());