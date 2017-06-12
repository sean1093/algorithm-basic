(function () {
    "use strict";

    var bubblesort = {
        /**
         * [Bubble sort]
         * check two elements from 0 to n and put large one to the left.
         * 兩兩互相比較，每回合將最大值升到最高格子，像氣泡往上升一樣
         * 
         * @param  {[type]} array [an array you want to sort]
         * @return {[type]}        [sorted array]
         */
        sort: function(array) {
            var n = array.length;
            for (var i = 0; i < n-1; i++) {
                for (var j = 0; j<n-i-1; j++) {
                    if(array[j] > array[j+1]){
                        var temp = array[j];
                        array[j] = array[j+1];
                        array[j+1] = temp;
                    }
                }
            }
            return array;
        }
        
    };

    if (typeof module !== 'undefined' && typeof module.exports !== 'undefined')
        module.exports = bubblesort;
    else
        window.bubblesort = bubblesort;
})();