(function () {
    "use strict";

    var insertionsort = {
        /**
         * [Insertion Sort]
         * 
         * @param  {[type]} array [an array you want to sort]
         * @return {[type]}        [sorted array]
         */
        sort: function(array) {

            for(var i = 1; i<array.length; i++) {
                for (var j = i; j>0; j--) {
                    if(array[j] < array[j-1]) {
                        var temp = array[j];
                        array[j] = array[j-1];
                        array[j-1] = temp;
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