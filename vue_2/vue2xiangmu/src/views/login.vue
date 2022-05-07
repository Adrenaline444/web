$router.push();
<template>
  <div class="login-body">
    <div class="login">
      <h2>用户登录</h2>
      <div class="login_box">
        <input type="text" required v-model="loginFrom.student_id" /><label
          >用户名</label
        >
      </div>
      <div class="login_box">
        <input
          type="password"
          required="required"
          v-model="loginFrom.password"
        /><label>密码</label>
      </div>
      <!-- <a href="javascript:void(0)" @click="loginClick('re_login')">
        登录
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </a> -->

      <el-button-group>
        <el-button type="primary" @click="login_clk">登录</el-button>
        <el-button type="primary" @click="resign_clk">注册</el-button>
      </el-button-group>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      loginFrom: {
        student_id: "",
        password: "",
      },
    };
  },
  //方法集合
  methods: {
    // loginClick() {
    //     axios
    //       .post("http://localhost:8090/admin/login", this.ruleForm)
    //       .then((res) => {
    //         console.log(res);
    //       });
    // },
    resign_clk() {
      // this.$router.push({
      //   name: "resign",
      // });
      this.$router.push({
        name: "resign",
      });
    },
    login_clk() {
      if (this.loginFrom.student_id == "") {
        this.$message({
          message: "用户名不能为空",
          type: "error",
        });
        return;
      }
      if (this.loginFrom.password == "") {
        this.$message({
          message: "密码不能为空",
          type: "error",
        });
        return;
      }

      this.$axios 
        .post("http://localhost:8090/admin/login", this.loginFrom)
        .then((res) => {
          console.log(res);
          if (res.status == 200) {
            if (res.data.code == 200) {
              this.$message({
                message: res.data.msg,
                type: "success",
              });
              this.$router.push({
                name:'home'
              })
            } else if (res.data.code == 201) {
              this.$message({
                message: res.data.msg,
                type: "error",
              });
            }
          } else {
            this.$message({
              message: "你的网是坨屎",
              type: "error",
            });
          }
        });
    },
  },
};
</script>
<style lang='scss' scoped>
@import url("../assets/css/common.css");
//@import url(); 引入公共css类
</style>