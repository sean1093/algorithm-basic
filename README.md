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
```

### Insertion Sort


### Selection Sort


### Quick Sort
