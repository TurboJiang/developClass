# my-app

## Project setup
yarn install

### Compiles and hot-reloads for development
yarn run serve

### Compiles and minifies for production
yarn run build

### Run your tests
yarn run test

### Lints and fixes files
yarn run lint

#typeScript 保证数据的严谨性
- 类型约束 不按照约束会报错
- 鼠标移上会有代码具体提示 友好性

- vue-cli 3.0+ 开始 原生命令行支持typescript
    *react最早拥抱typescript，vue现在加入*
- 项目多加20% typescript代码 本来是不用写的 写了会少60%的（弱类型）潜在bug 良好的代码提示，团队合作体验好
- 重要的对象（组件，state，props，vuex/redux，函数）， 要去声明类型
    vuex最大的对象是state
    typescript中一般类型约束使用interface接口