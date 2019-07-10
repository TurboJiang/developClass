             1
        2           3
    4       5   6       

中序遍历 inOrderTraversal() [4，2，5，1，6，3]
- 先左子树再根节点再右子树
1. 树的概念是递归的，可以拆分为几棵树
    元子结构:三个节点（左中右）

2. 用递归很好写 直接处理左中右——>index1
   使用循环+堆栈 也可以解决——>demo

先序遍历 preOrderTraversal() [1,2,4,5,3,6]
- 中左右

后序遍历 postOrderTraversal() [4,5,2,6,3,1]
- 左右中

层序遍历 levelOrderTravesal()
1. 循环遍历、递归——>index