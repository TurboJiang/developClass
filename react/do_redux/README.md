#redux 单一状态树
- 组件间的状态，兄弟、父子...多余的代码，大型项目会出现多组件，多个跨路由的组件需要共享状态——>共享状态
- 对状态的管理协同
    dispatch(action:{type:'' payload:''}) -> reducer(可以进行无差别的状态计算,很多状态计算函数的集合，switch+case才能实现状态管理的协同) -> state

1. head body 两个函数组件 共享了单一的全局状态数
2. 状态全局，可以被随意的修改
3. dispatch使状态的改变可控，任何改变，都可以在dispatch中找到源头
    {type:'',payload:''}  type->case、payload修改的部分
4. 通知发生了状态改变，存在oldState newState，使用newState，subscribe()将状态相关的地方放进listner数组中（订阅者模式）———>createStore.js
