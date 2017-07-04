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
            var _swap = function(x, y, array){
                var temp = array[y];
                array[y] = array[x];
                array[x] = temp;
            };
            
            var quickSort = function(array, left, right) {
                if(left < right) {
                    var i = left;
                    var j = right;
                    var pivot = array[i];
                    var length = array.length;
                    var count = 0;
                    // 先將第一個當成pivot
                    while(i<j) {
                        // 從頭(left)開始找第一個大於pivot值的位置i
                        while(i < length && i < pivot) {
                            i++;


                            count++;
                            if(count > 100){break;}
                        }

                        // 從尾(right)開始找第一個小於pivot值的位置j
                        while(j > left && j > pivot) {
                            j--;


                            count++;
                            if(count > 100){break;}
                        }


                        count++;
                        if(count > 100){break;}


                        _swap(i, j, array);
                    }
                    _swap(left, j, array); 
                    quickSort(array, left, j-1);   
                    quickSort(array, j+1, right);                  
                }
                
            };
            quickSort(array, 0, array.length-1);

            return array;
        }
        
    };

    if (typeof module !== 'undefined' && typeof module.exports !== 'undefined')
        module.exports = quicksort;
    else
        window.quicksort = quicksort;
})();