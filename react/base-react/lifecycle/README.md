This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


##lifecycle 
*16.x.x之前*
- 挂载阶段->第一次渲染 挂载之后就不会在进行挂载了
    - componentWillMount()
    - render()
    - componentDidMount()
- 更新阶段 组件渲染之后状态发生改变  
        - props
            - componentWillReceiveProps
            - shouldComponentUpdate(true:更新、false:除了componentWillReceiveProps其余不发生)
            - componentWillUpdate
            - componentDidUpdate
        - state
            - shouldComponentUpdate
            - componentWillUnmount
                清理
                定时器
                全局事件绑定
*16.x.x之后*
- 挂载
    - getDerivedStateFromProps()——>开始
    - render()
    - componentDidMount()
- 更新
    - getDerivedStateFromProps()
    - shouldComponentUpdate()
    - render()
    - getSnapshotBeforeUpdate()
    - componentDidMount()——>结束

## Ref didMount()将节点挂载到dom结构上去
    - stringRef
        this.refs.stringRef.innerHTML = 'new String Ref'
    - objectRef
        使用constructor(){
            super()
            this.objRef = React.createRef()
        }
        节点挂载到current上
        this.objRef.current.innerHTML = 'new Object Ref'
    - methodRef
        this.methodRef.innerHTML = 'new Method Ref'

## 跨层级传递 父子孙组件关系
cnpm o prop-types -S 安装types包 指定数据类型时引用
*15.x.x*
- 首先我们需要在父组件中显式的定义静态属性childContextTypes，并在属性中声明要传入的参数的类型，同时在父组件中实现getChildContext方法，这个方法的返回值，将会传入到父组件下面的任何一个子组件的context中，这样一来，父组件的所有级别的子组件都将可以跨级别获取到父组件的参数。而当子组件需要使用父级及父级以上级别的组件传入的参数时，需要在子组件中显示定义静态属性contextTypes，并在属性中声明要使用的参数的类型，这样，子组件就可以在context中获取到跨级别传入的参数了。

1. 父组件通过getChildContext()方法 返回提供的context内容
2. 父组件 .childContextTypes定义提供的context类型
3. 子组件获取 .childContextTypes定义接收的类型 然后就可以通过this.context获取
4. vuex 改变

*问题*
    跨层级传递的时候 加入中间某一组件 shouldComponentUpdate() return false之后 导致后代不会更 context 的数据不能同步

*16.x.x*
- 通过React.createContext创建出一个上下文：Context对象，然后这个Context对象又包含两个属性，一个叫Provider，另一个叫Consumer，这两个属性都是纯种的React组件。之后我们只需要和上面代码片段一样，在父组件中运用Provider，在子组件中运用Consumer即可，Provider中通过value属性可以向Consumer传递参数，而Consumer的子组件则是一个函数，在这个子组件中定义一个函数，Consumer会向它传递一个context，这个context来自于Provider，达到通信的目的
1. 构造Provider Consumer
2. 父组件<Provider value={} />提供数据
3. 后代组件<Consumer {(val)=>{}} />消费数据
 
state={
    theme:'purple',
    toggle:this.handleToggleTheme
}
静态属性 无法获取 实例化的this
*解决办法* 
    Context：Provider+Consumer


