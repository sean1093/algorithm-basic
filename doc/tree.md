# Tree

廣義的 tree，child 數量沒有限制，一個 node 可以有無限個 child

## Binary Tree

一個 node 只能有兩個 child (每個 node'degree 最高為 2)

### Full Binary Tree

* 每個 node 都有兩個 child
* 所有 leaf node 的 level 一致

### Complete Binary Tree

* Tree 的 node 依照由上至下，由左至右來填滿
* Child 必須要從左邊先填

### Binary Search Tree

* 是一種 Binary Tree
* 左右子樹也都是 Binary Search Tree
* Left child node < Root node < Right child node
* 節點不會有重複的鍵值

## 關聯性
Tree
<code>+ 有左右之分</code>
Binary Tree (有左右之分)
<code>+ 大小有別</code>
Binary Search Tree (左 < root < 右)
<code>+ 平衡</code>
A.V.L Balance Binary Search Tree 
<code>+ degree 可大於 2</code>
B-Tree