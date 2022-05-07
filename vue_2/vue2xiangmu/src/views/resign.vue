<template>
  <div class="login-body">
    <div class="login">
      <h2>用户注册</h2>
      <div class="login_box">
        <!-- required就是不能为空 必须在css效果中有很大的作用 -->
        <!-- 可以简写为required -->
        <input type="text" required v-model="resignData.student_id" /><label
          >学号</label
        >
      </div>
      <div class="login_box">
        <input
          type="text"
          required="required"
          v-model="resignData.username"
        /><label>姓名</label>
      </div>
      <div class="login_box">
        <input
          type="text"
          required="required"
          v-model="resignData.phone"
        /><label>手机号</label>
      </div>
      <div class="login_box">
        <input
          type="password"
          required="required"
          v-model="resignData.password"
        /><label>密码</label>
      </div>
      <!-- <a href="javascript:void(0)">
        注册
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </a> -->
      <el-button-group>
        <el-button type="primary" @click="bk_login">返回登录</el-button>
        <el-button type="primary" @click="cof_resign">确认注册</el-button>
      </el-button-group>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      resignData: {
        student_id: "",
        username: "",
        phone: "",
        password: "",
      },
    };
  },
  methods: {
    bk_login() {
      this.$router.push({
        name: "login",
      });
    },
    cof_resign() {
      // console.log(this.resignData);
      // if (this.resignData.student_id == "") {
      //   this.$message({
      //     message: "学号不能为空",
      //     type: "error",
      //   });
      // }
      for (let index in this.resignData) {
        // console.log(this.resignData[index]);
        if (this.resignData[index] == "") {
          this.$message({
            message: "输入框内不能为空",
            type: "error",
          });
          return;
        }
      }
      this.$axios
        .post("http://localhost:8090/admin/register", this.resignData)
        .then((res) => {
          console.log(res);
          if (res.status == 200) {
            if (res.data.code == 200) {
              this.$message({
                message: res.data.msg,
                type: "success",
              });
              this.$router.push({
                name: "login",
              });
            } else {
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
            return;
          }
        });
    },
  },
};
</script>


<style lang='scss' scoped>
//@import url(); 引入公共css类
@import url("../assets/css/common.css");
</style>