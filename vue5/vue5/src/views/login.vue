<!--  -->
<template>
  <div class="login">
    <div class="login_body">
      <h2>登录</h2>
      <van-form @submit="onSubmit">
        <van-field
          v-model="from.username"
          name="用户名"
          label="用户名"
          placeholder="用户名"
        />
        <van-field
          v-model="from.password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
        />
        <div style="margin: 16px">
          <van-button
            round
            block
            type="info"
            native-type="submit"
            @click="login_btn"
            >提交</van-button
          >
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      from: {
        username: "",
        password: "",
      },
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    onSubmit() {},
    login_btn() {
      console.log(this.from);
    },
  },

};
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.login_body {
  h2 {
    margin-top: 80px;
  }
}
</style>