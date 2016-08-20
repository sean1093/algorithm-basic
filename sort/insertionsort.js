(function () {
	"use strict";
	//use basicTool.js

	var insertionsort = {
		/**
		 * [Insertion Sort]
		 * dev not finished
		 * 
		 * @param  {[type]} array [an array you want to sort]
		 * @return {[type]}        [sorted array]
		 */
		sort: function(array) {
			//basicTool.insert
			var t = 1;
			for(var i = 1; i<array.length; i++){
				console.log("i: "+i);
				for (var j = 0; j<i; i++) {
					console.log("j: "+i);
					if(array[i] < array[j]){
						Debug;
						
						console.log("be array: "+array);
						console.log("change: "+array[i]+"|"+array[j]);
						array = basicTool.insert(i,j,array);
						console.log("af array: "+array);
						
					}
				}

			}

				
	      	return array;
		}
	    
	};



	if (typeof module !== 'undefined' && typeof module.exports !== 'undefined')
    	module.exports = insertionsort;
 	else
    	window.insertionsort = insertionsort;
})();