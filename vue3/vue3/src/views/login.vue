<!--  -->
<template>
  <div class="login_body">
    <div class="login_banner">
      <div class="login_left">
        <div class="login_left_bg">
          <div class="text">WELCOME</div>
        </div>
      </div>
      <div class="login_right">
        <div class="login_right_from_title">
          <h2>登录</h2>
        </div>
        <div class="login_right_from">
          <div class="login_right_from_input">
            <input
              type="text"
              placeholder="请输入学号"
              v-model="loginFrom.student_id"
            />
            <input
              type="password"
              placeholder="请输入密码"
              v-model="loginFrom.password"
            />
            <!-- <input type="text" placeholder="请输入验证码" /> -->
          </div>
        </div>
        <div class="login_right_btn">
          <button @click="login_clk">登录</button>
        </div>
      </div>
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
      loginFrom: {
        student_id: "",
        password: "",
      },
      timer: true,
    };
  },

  //方法集合
  methods: {
    login_clk() {
      // if (this.loginFrom.student_id == "") {
      //   this.$message({
      //     message: "用户名不能为空",
      //     type: "warning",
      //   });
      //   return;
      // }
      // if (this.loginFrom.password == "") {
      //   this.$message({
      //     message: "密码不能为空",
      //     type: "error",
      //   });
      //   return;
      // }

      let then = this;
      if (then.timer) {
        then.timer = false;
        // console.log(1);
        this.$axios
          .post("http://localhost:8090/admin/login", this.loginFrom)
          .then((res) => {
            if (res.data.code == 200) {
              this.$message({
                message: res.data.msg,
                type: "success",
              });
            } else if (res.data.code == 201) {
              this.$message({
                message: res.data.msg,
                type: "error",
              });
            }
          });
        setTimeout(() => {
          then.timer = true;
        }, 1000);
      }
    },
  },
};
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类

.login_body {
  position: relative;
  background-color: #4a93f5;
  height: 100vh;
  .login_banner {
    display: flex;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 60%;
    height: 80vh;
    background-color: #fff;
    transform: translate(-50%, -50%);
    border-radius: 15px;
    box-sizing: border-box;
    box-shadow: 0 0 10px 0 #fff;
    overflow: hidden;
    .login_left {
      flex: 1;

      .login_left_bg {
        position: relative;
        background-color: #66a2fe;
        height: 100%;
        border-radius: 0 50% 50% 0;
        .text {
          position: absolute;
          top: 50%;
          left: 30%;
          transform: translate(-50%, -50%);
          font-size: 30px;
          font-weight: 18.75rem;
          color: #fff;
        }
      }
    }
    .login_right {
      display: flex;
      flex-direction: column;
      flex: 1;
      align-items: center;
      .login_right_from_title {
        h2 {
          letter-spacing: 30px;
        }
        display: flex;
        align-items: center;
        flex: 1;
        width: 80%;
      }

      .login_right_from {
        // height: 80%;
        width: 80%;
        // padding: 20px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 2;

        .login_right_from_input {
          input {
            font-size: 14px;
            width: 100%;
            line-height: 50px;
            border: none;
            border-bottom: 1px solid gray;
            outline: none;
            text-indent: 5px;
          }
        }
      }
      .login_right_btn {
        flex: 1;
        width: 80%;
        button {
          border: none;
          background: #4a93f5;
          padding: 10px 30px;
          color: #fff;
          border-radius: 50px;
          box-shadow: 0 0 10px #4a93f5;
          cursor: pointer;
          &:active {
            filter: brightness(80%);
          }
        }
      }
    }
  }
}
</style>