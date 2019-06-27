// 定义二叉树
function TreeNode(val) {
    this.val = val
    this.left = this.right = null;
}
let tree1 = new TreeNode(3);
let tree2 = new TreeNode(9);
let tree3 = new TreeNode(20);
let tree4 = new TreeNode(15);
let tree5 = new TreeNode(7);
// 根节点 tree1 叶节点 tree4 tree5
tree1.left = tree2
tree1.right = tree3
tree3.left = tree4
tree3.right = tree5

// 层序遍历 ：循环遍历、递归
// 从跟节点开始 一层层分层遍历 到最后一个节点7结束
// [[3],[9,20],[15,7]]
// 按层 每个节点把子节点告诉算法就ok
// items[] 子节点也可能有他的子节点？队列Queue 先进先出

function levelOrderTravesal(root) {
    // 判断根节点
    if (!root) return [];
    // 拿到的节点放进数组
    const items = [];
    // 队列 放置等待被了解情况的节点（处理子节点） 先将根节点放进
    // 了解过的shift 未处理的push
    const queue = [root, null];
    let levelNodes = [];//放置每一层的节点
    while (queue.length > 0) {
        const t = queue.shift();
        // root
        if(t){
            levelNodes.push(t.val)
            // 若左右节点存在
            if(t.left){
                queue.push(t.left)
            }
            if(t.right){
                queue.push(t.right)
            }
        }else{
            // null 层次分隔符
            items.push(levelNodes)
            levelNodes = []
            // null是上一层 在队列里的节点是下一层的所有节点(9,20) 没有下下层的节点
            if(queue.length > 0){
                // 将分隔符插入 隔断下下层的节点
                queue.push(null)
            }
        }
    }
    return items
}
console.log(levelOrderTravesal(tree1))

// queue[root,null]
// levelNodes[]
// items[]