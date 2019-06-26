初始化npm init -y
安装:
yarn add webpack webpack-cli webpack-dev-server -D
yarn global add react react-dom
yarn global add @types/react  @types/react-dom -D
yarn add babel-core babel-cli babel-preset-env -D
yarn add html-webpack-plugin -D
yarn add mini-css-extract-plugin -D
yarn add css-loader style-loader -D
yarn add bootstrap

# typescript 将js弱类型变成强类型
yarn add typescript -D
- 类型声明文件 @types/react @types/react-dom
- webpack-dev-server不会刷新浏览器
    webpack-dev-server --inline刷新浏览器 重新加载当前页面
    webpack-dev-server --inline --hot 刷新浏览器需要更新的局部 热更新
- typescript是js的超集，js在ts里可以完全运行
    跟 java一样 是静态类型语言，需要先编译一下
- 强制类型声明
- 代码分离 vendor
    vendor:[
            'react',
            'react-dom'
           ]单独打包react与react-dom库
