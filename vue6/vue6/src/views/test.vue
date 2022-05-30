<!--  -->
<template>
  <div class="ad">
    <input type="text" placeholder="请输入第一个值" v-model="one_val" />
    <input type="text" placeholder="请输入第二个值" v-model="two_val" />
    <div class="box">{{ num_box }}</div>

    <div class="val2">
      <login></login>
    </div>
    <div class="watch">
      <input type="text" v-model="watch_test" />
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import login from "./login.vue";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    login,
  },
  data() {
    //这里存放数据
    return {
      one_val: "",
      two_val: "",
      watch_test: "123",
    };
  },
  //监听属性 类似于data概念
  computed: {
    num_box() {
      return parseInt(this.one_val) - parseInt(this.two_val);
    },
  },
  //监控data中的数据变化
  watch: {
    watch_test(newVal, oldVal) {
      console.log(newVal, oldVal);
    },
  },
  //方法集合
  methods: {
    init() {
      console.log(123);
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    // this.init()
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    // console.log(this.watch_test);
  },
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.val2 {
  width: 100%;
  height: 300px;
  overflow: hidden;
}
</style>