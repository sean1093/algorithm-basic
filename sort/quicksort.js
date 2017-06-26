(function () {
    "use strict";

    var quicksort = {
        /**
         * [Quick sort]
         * 找出一個pivot，每回合比較把小的放p左邊，大的放p右邊，做完之後分兩邊繼續做(divide and conquer)
         * 
         * @param  {[type]} array [an array you want to sort]
         * @return {[type]}        [sorted array]
         */
        sort: function(array) {

            var quickSort = function(array, left, right) {
                if(left < right) {
                    var i = left;
                    var j = right;
                    var pivot = array[i];
                    // 先將第一個當成pivot
                    while(i<j) {
                        從頭(left)開始找第一個大於pivot值的位置i
                            while() {}

                        從尾(right)開始找第一個小於pivot值的位置j
                    }                   
                }

            }


            return array;
        }
        
    };

    if (typeof module !== 'undefined' && typeof module.exports !== 'undefined')
        module.exports = quicksort;
    else
        window.quicksort = quicksort;
})();