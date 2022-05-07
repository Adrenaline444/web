<!--  -->
<template>
  <div class="login">
    <div class="top">
      <img src="../assets/img/Snipaste_2022-05-01_01-20-42.png" alt="" />
    </div>
    <h1>用户登录</h1>

    <div class="from">
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="pass">
          <el-input
            type="text"
            v-model="ruleForm.student_id"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="checkPass">
          <el-input
            type="password"
            v-model="ruleForm.password"
            autocomplete="off"
          ></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >登录</el-button
          >
          <el-button @click="resetForm('ruleForm')">注册</el-button>
        </el-form-item>
      </el-form>
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
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        password: "",
        student_id: "",
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
      },
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    submitForm() {
      console.log(this.ruleForm);
      this.$axios
        .post("http://localhost:8090/admin/login", this.ruleForm)
        .then((a) => {
          //   console.log(a.data.code);
          if (a.data.code == 200) {
            this.$message({
              message: "登录成功",
              type: "success",
            });
          } else {
            this.$message({
              message: "登录失败",
              type: "warning",
            });
          }
        });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
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
@import url("../assets/css/common");
.login {
  background-color: #3ca992;
  height: 100vh;
  .top {
    text-align: center;
    margin: 0 auto;
    position: relative;
    top: 20%;
  }
  h1 {
    display: block;
    width: 20%;
    text-align: center;
    position: relative;
    left: 50%;
    top: 20%;
    color: #fff;
    font-weight: 400;
    border-bottom: 1px solid #fff;
    transform: translate(-50%, -50%);
    padding-bottom: 15px;
  }
  .from {
    position: relative;
    left: 50%;
    top: 30%;
    width: 30%;
    transform: translate(-63%, -35%);
  }
}
</style>