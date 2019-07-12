// 对状态的修改模块化处理分为两部分：只计算store的变化storeChange(reducer)+dispatch(执行变化的动作)
export const storeChange = (store, action) => {
    switch (action.type) {
        case 'HEAD_COLOR':
            // 不修改原状态 直接生成新状态 没有深浅拷贝 引用赋值的问题
            // store.head.color = action.color
            // 针对性执行函数
            return {
                // 展开旧状态
                ...store,
                // 会覆盖store中的head
                head: {
                    ...store.head,
                    color: action.color
                }
            }
            break;
        case 'BODY_TEXT':
            // store.body.text = action.text
            return {
                // 展开旧状态
                ...store,
                // 会覆盖store中的body
                body: {
                    ...store.body,
                    text: action.text
                }
            }
            break;
        default:
            return {
                ...store
            }
            break;
    }
}