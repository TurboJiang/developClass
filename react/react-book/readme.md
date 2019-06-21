- DOM 之后 MVVM 兴起
  MVVM 封装了 DOM(VUE REACT) vue的react框架帮我们把dom写完了
  让其更高效

- MVVM Model–view–viewmodel
- 组件开发 管的是UI开发
  分为多个组件，拼装界面
  组件是一个类，每一个组件是一个将模板样式和数据js逻辑事件全封在一起的一个类
  一个组件 实例化一下就可以用了 多实例化几次就可以复用
- 组件是一个种子，里面东西很多
  1. template  在react中 模板是render()
  2. css
  3. js  isLiked
- React 和 VUE 都是MVVM 的一种实现
  React 用来做后台界面 vue 用户界面
  挂载点 界面跟组件的关系，界面 <- 组件 <- html 
  - 如何把组件挂载到挂载点上呢
    封装DOM 成一个组件类 class
    数据部分 在构造函数constructor 里面可以去设置this.state 
    模板部分 render方法
    setState({}) 实现setData
  - 模板里 数据的细化
    借助es6的字符串模板 每次编译都带来
    每次 setState之后 就执行this.render()
    状态和模板的结合，在模板的编译，插入数据

MVVM本质是封装在 组件里的 render 方法和 setState 数据驱动 重新编译

##挂载 组件 组件两部分 setstate数据驱动 数据驱动与模板的关系