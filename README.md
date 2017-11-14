# javascript-algorithm
 Different basic algorithms implement with JavaScript.

## Sort

### Bubble Sort

兩兩互相比較，每回合將最大值升到最高格子，像氣泡往上升一樣

* 第一回合

1. n0, n1 開始比較，把比較大的放到右邊
2. n1, n2 比較，把比較大的放到右邊
3. 一直做到 n-1, n

* 第二回合

1. n0, n1 開始比較，把比較大的放到右邊
2. n1, n2 比較，把比較大的放到右邊
3. 一直做到 n-2, n-1 (因為 n 已經是最大，就不需要再比了)

* 一直做到 n-1 回合，就只會比較 n0, n1

```js
function bubblesort(array) {
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
```

### Insertion Sort

把第i筆資料插入前面(i-1)筆已經排序好的陣列中

1. 從 n1 開始，往前找前面所有的元素，把 n1 放到正確的位置
2. n2 往前找 n0, n1，把 n2 放到正確的位置
3. 一直做到最後一個元素

```js
function insertionsort(array) {
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
```


### Selection Sort

每次從第 i 到 n 筆中挑出最小值，和前面第 i 筆交換

舉例來說 [2,5,1,7]

1. 先從 n0 開始做到 n，找到最小值 1 ，把他跟第 0 (i) 個交換
==> 此時陣列變為 [1,5,2,7]

2. 接著從 n1 開始做到 n，找到最小值 2 ，把他跟第 1 (i) 個交換
==> 此時陣列變為 [1,2,5,7]

3. 一直重複做到最後一個為止


```js
function selectionsort(array) {
    var min = 0;
    var idx = 0;
    for (var i = 0; i < array.length; i++) {
        idx = i;
        min = array[i];
        for (var j = i+1; j < array.length; j++) {
            if(array[j] < min ){
                min = array[j];
                idx = j;
            }
        }
        _swap(i, idx, array);
    }
    return array;
}
```

### Quick Sort

找出一個 pivot (p)，每回合比較把小的放 p 左邊，大的放 p 右邊，做完之後分兩邊繼續做(divide and conquer)

