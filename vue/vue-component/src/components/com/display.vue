// 该组件用来渲染vue后缀的文件
<template>
  <div ref="display"></div>
</template>

<script>
import randomStr from '../../utils/random_str'
import Vue from 'vue'
export default {
  props: {
    code: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      html: "",
      js: "",
      css: "",
      component:null,
      // 得是个随机数啊
      id:randomStr()
    };
  },
  methods: {
    // source .vue文件代码，type：分割的部分
    getSource(source, type) {
      // 匹配template、style、script标签
      const regex = new RegExp(`<${type}[^>]*>`);
      // match检索指定值 找到一个或多个正则表达式的匹配
      let openingTag = source.match(regex);

      if (!openingTag) return "";
      else openingTag = openingTag[0];
      // 拿到下标之后再加上本身的长度开始截取,截取到最后一个匹配的结束标签
      return source.slice(
        source.indexOf(openingTag) + openingTag.length,
        source.lastIndexOf(`</${type}>`)
      );
    },
    // 切割
    splitCode() {
      const script = this.getSource(this.code, "script").replace(
        /export default/,
        "return"
      );
      const style = this.getSource(this.code, "style");
      const template = `<div id="app">${this.getSource(
        this.code,
        "template"
      )}</div>`;

      this.html = template;
      this.js = script;
      this.css = style;
    },
    // 渲染页面
    renderCode() {
      this.splitCode();
      // html与js不能为空 为空页面无法渲染
      if (this.html !== "" && this.js !== "") {
        // 自执行
        const parseStrToFunc = new Function(this.js)()
        parseStrToFunc.template = this.html
        const Component = Vue.extend(parseStrToFunc)
        // 手动挂载 之后 需要销毁！！！
        this.component = new Component().$mount()
        this.$refs.display.appendChild(this.component.$el)

        if( this.css !== "") {
          // 创建元素节点：style
          const style = document.createElement('style')
          style.type = 'text/css'
          // id标识符 防止样式冲突
          style.id = this.id
          style.innerHTML = this.css
          // 将css引入页面 放在头部
          document.getElementsByTagName('head')[0].appendChild(style)
        }
      }
    },
    // 手动销毁：实例 css... 
    destoryCode() {
      const $target = document.getElementById(thid.id)
      if($target) {
        // 找到父节点 让父节点移除它
        $target.parentNode.removeChild($target)
      }
      // 扩展出来的实例进行移除
      if (this.component) {
        this.$refs.display.removeChild(this.component.$el)
        this.component.$destory()
        this.component = null
      }
    }
  },
  mounted() {
    console.log(this.code);
    this.renderCode()
  },
  beforeDestroy() {
    this.destoryCode()
  },
  // 实现页面与code内容一致 实施监听 动态更新页面(数据发生变化)
  watch:{
    code () {
      this.destoryCode()
      this.renderCode()
    }
  }
};
</script>

<style>
</style>
