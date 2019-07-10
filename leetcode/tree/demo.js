// 中序遍历的另一种方法哩！！
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
// 找一个暂存区：堆栈:先进后出  每一个节点都变成独立的
var inorderTraversal = (root) => {
    var stack = [],//堆栈
        result = [],//解脱 左边出来了
        cur;//当前的
    cur = root
    // 堆栈中还有未解脱的值 就会继续循环
    while (stack.length > 0 || cur !== null) {
        // 节点不为空 
        if (cur !== null) {
            // 根节点先入栈 交代左右节点
            stack.push(cur)
            cur = cur.left
        } else {
            // 到达叶子节点 cur的下一个为空了 
            cur = stack.pop()// 将最左的叶子节点pop出去
            //左中
            result.push(cur.val)//最有一个左节点的根节点就是上一个子树的左节点 直接pop 一直循环else
            // 右
            cur = cur.right

        }
    }
    return result;
}