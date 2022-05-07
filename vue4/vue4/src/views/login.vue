<!--  -->
<template>
  <div class="login_body">
    <div class="login_from_body">
      <van-form @submit="onSubmit">
        <van-field
          v-model="from.username"
          name="用户名"
          placeholder="用户名"
          :clearable="true"
          left-icon="user-o"
        />
        <van-field
          v-model="from.password"
          type="password"
          name="密码"
          placeholder="密码"
          :clearable="true"
          class="iconfont icon-password"
        />
        <div style="margin: 16px">
          <van-button
            round
            block
            type="info"
            native-type="submit"
            @click="login_clk"
            >提交</van-button
          >
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      username: "",
      password: "123",
      href: require("../assets/img/test.jpg"),

      from: {
        username: "",
        password: "",
      },
    };
  },

  //方法集合
  methods: {
    onSubmit() {},
    login_clk() {
      console.log(this.from);
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
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

::v-deep.van-form {
  width: 80%;
  margin: 0 auto;
}
::v-deep.van-icon-user-o:before,
.icon-password:before {
  font-size: 14px;
}
::v-deep.icon-password:before {
  font-size: 17px;
  margin-right: 3px;
}

::v-deep.van-cell,
::v-deep.van-field:first-child {
  margin-bottom: 20px;
}

.login_body {
  height: 100vh;
  width: 100%;
  background-image: url(../assets/img/test.jpg);
  background-color: black;
  background-repeat: no-repeat;
  background-size: cover;

  .login_from_body {
    position: relative;
    bottom: -30%;
    left: 0;
    height: 70vh;
    width: 100%;
    background-image: linear-gradient(transparent 10%, #fff 80%);
    .van-form {
      padding-top: 20px;
    }
  }
}
</style>D