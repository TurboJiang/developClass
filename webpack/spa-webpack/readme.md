#打包工具
- rollup：tree shaking 没用到的代码 不会被打包
- parcel：零配置
- webpack 4.0:production会自动开启tree shaking
- webpack-deep-scope-plugin 将没有使用的lodash在打包的时候删除 不打包
- css-modules 
命名冲突
import style from './index.css'
利用hash值解决解决命名
- webpack 3.0
import(/*webpackChunkName:'async' */)
magic comment 魔法注释
异步加载模块的应用 路由
- cnpm i html-webpack-plugin
    将css插进html中
用babel-loader检测有咩有lazy！！
换成magic comment
- 提取有用的css npm i -D purifycss-webpack purify-css
- html-webpack-plugin 提取css

- 初始化npm init -y
- 依赖安装 cnpm i webpack webpack-cli -D
          yarn add webpack-deep-scope-plugin
