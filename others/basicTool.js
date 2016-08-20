(function () {
	"use strict";

	var basicTool = {};

	/**
	 * [swap swap two elements in array]
	 * @param  {[Number]} x     [elements]
	 * @param  {[Number]} y     [elements]
	 * @param  {[array]} array [target array]
	 * @return {[array]}       [array]
	 */
	basicTool.swap = function(x, y, array){
		var temp = array[y];
		array[y] = array[x];
		array[x] = temp;
		return array;
	};

	/**
	 * [insert insert source into target location in array]
	 * @param  {[Number]} source [source index]
	 * @param  {[Number]} target [target index]
	 * @param  {[Array]} array  [target array]
	 * @return {[array]}       [array]
	 */
	basicTool.insert = function(source, target, array){
		var temp = array[source];
		if(source>target){
			for(var i = source-1; i >= target; i--) {
	        	if(i<0){break;}
	        	array[i + 1] = array[i];
	    	}
		}
		else{
	    	for(var j = source; j <target; j++) {
	        	array[j] = array[j+1];
	    	}			
		}	
		array[target] = temp;
		return array;
	};


	if (typeof module !== 'undefined' && typeof module.exports !== 'undefined')
    	module.exports = basicTool;
 	else
    	window.basicTool = basicTool;
})();