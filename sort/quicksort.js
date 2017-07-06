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
                    // 先將第一個當成pivot
                    var pivot = array[i];
                    var length = array.length;

                    while(true) {

                        // 從頭(left)開始找第一個大於pivot值的位置i
                        while(i < length-1 && array[i] <= pivot) {
                            i++;
                        }

                        // 從尾(right)開始找第一個小於pivot值的位置j
                        while(j >= left && array[j] > pivot) {
                            j--;
                        }

                        // 假如i超過j了就要結束這回合
                        if(i>=j) {
                            break;
                        }

                        // 移動i,j的元素
                        _swap(i, j, array);

                    }
                    // 最後將pivot換到中間
                    _swap(left, j, array);
                    // 對左半邊繼續排 
                    quickSort(array, left, j-1); 
                    // 對右半邊繼續排  
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