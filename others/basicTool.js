(function () {
	"use strict";

	var basicTool = {};

	basicTool.swap = function(x, y, array){
		var temp = array[y];
		array[y] = array[x];
		array[x] = temp;
		return array;
	};

	/**
	 * [insert insert source into target location in array]
	 * 
	 * @param  {[Number]} source [source index]
	 * @param  {[Number]} target [target index]
	 * @param  {[Array]} array  [target array]
	 */
	basicTool.insert = function(source, target, array){
		var tempArray = [];


		var temp = array[source];		
		for(var i = source-1; i >= target; i--) {
        	if(i<0){break;}
        	array[i + 1] = array[i];
    	}
		array[target] = temp;
		return array;
	};


	if (typeof module !== 'undefined' && typeof module.exports !== 'undefined')
    	module.exports = basicTool;
 	else
    	window.basicTool = basicTool;
})();