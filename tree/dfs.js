
/**
 * DFS for binary tree
 * 
 * @param {TreeNode} root
 * @return {array}
 */
var dfs = function(root) {
    var result = [];
    var stack = []; 
    stack.push(root);
    while(stack.length>0){
        var node = stack[stack.length-1];
        stack.pop();
        result.push(node.val);
        if(node.right !== null) {
            stack.push(node.right);
        }
        if(node.left !== null) {
            stack.push(node.left);
        }
    }
    return result;
};


function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var r1 = new TreeNode(1);
var r2 = new TreeNode(2);
var r3 = new TreeNode(3);
var r4 = new TreeNode(4);
var r5 = new TreeNode(5);
var r6 = new TreeNode(6);
var r7 = new TreeNode(7);

r6.left = r7;
r3.right = r6;
r2.left = r4;
r2.right = r5;
r1.left = r2;
r1.right = r3;

console.log(dfs(r1));
