function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
// 主要是小树！！！！拆分成小树 每三个每三个
function inorderTraversal(root) {
    let arr = [];
    // 递归 放在算法的内部 没有退出条件就一直调用 
    // 一个inorder负责一次子树单元的遍历
    const inorder = (root) => {//参数 永远是一个根节点（小数中的根节点）
        // 如果已经到了叶子节点 就为null了 可以开始回溯了
        if (root === null) return null
        // 往左处理
        inorder(root.left);
        // 中间在小子树中是孤独的哩
        arr.push(root.val)
        // 往右处理
        inorder(root.right)
    }
    inorder(root);
    return arr;
}

//          1
//             2
//          3
let a1 = new TreeNode(1)
let a2 = new TreeNode(2)
let a3 = new TreeNode(3)
a1.right = a2
a2.left = a3
// [1,3,2]

console.log(inorderTraversal(a1))