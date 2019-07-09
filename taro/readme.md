taro安装
yarn global add @tarojs/cli
cnpm install -g @tarojs/cli
taro -V
cd todoList
npm run dev:weapp

- 小程序为什么要用框架呢？
1. 小程序内置的组件 vue/react学习成本
2. 带来了数据流管理，更强大的组件化
3. 工程化,tarojs完全基于webpack，可以安装第三方的包
4. 更多的小程序打包支持

- uni怎么做的哩？
    weapp alipay rn
    把ui组件抽象了 import {Text, Image} from '@tarojs/components'