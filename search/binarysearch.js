// (function () {
	// "use strict";


	//key: a value
	//target: an array
	function binarysearch(key, target){
		// target.sort();
		console.log(target);
		var left = target[0];
		var mid = Math.round(target.length/2);
		var right = target[target.length-1];
		console.log("left"+left);
		console.log("right"+right);
		
		while(left <= right){
			// console.log("target[mid]"+target[mid]);
			// console.log("key"+key);
			if(target[mid] > key){
				left = target[mid];
			}
			else if(target[mid] < key){
				right = target[mid];
			}
			else if(target[mid] == key){
				return mid;
			}
			// console.log("left"+left);
			// console.log("right"+right);
		}
	}

// }());