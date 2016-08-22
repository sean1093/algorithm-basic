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
			for(var i = 1; i<array.length; i++){
				console.log("--i--: "+i);
				var value = array[i];
				var target = i;
				for (var j = i-1; j>=0; j--) {
					console.log("j: "+j);
					console.log("array[j]|array[j+1]: "+array[j]+"|"+array[j+1]);
					if(array[j]>array[j+1]){
						array[j+1] = array[j];
						console.log("now: "+array);
					}
					else{
						target = j;
						console.log("break");
						break;
					}
						
				}
				console.log("value: "+value);
				console.log("target: "+target);
				array[target] = value;
				console.log("round end: "+array);
					

			}
				
	      	return array;
		}
	    
	};



	if (typeof module !== 'undefined' && typeof module.exports !== 'undefined')
    	module.exports = insertionsort;
 	else
    	window.insertionsort = insertionsort;
})();