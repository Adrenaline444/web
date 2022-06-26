<template>
  <div class="login-box">
    <el-form
      ref="loginFromRef"
      :model="loginFrom"
      status-icon
      :rules="rules"
      label-width="120px"
      class="demo-loginFrom"
    >
      <el-form-item label="账号:" prop="userName">
        <el-input v-model="loginFrom.userName" autocomplete="off" />
      </el-form-item>
      <el-form-item label="密码:" prop="password">
        <el-input
          v-model="loginFrom.password"
          type="password"
          autocomplete="off"
        />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm(loginFromRef)"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
  setup() {
    const data = reactive({
      loginFrom: {
        userName: "",
        password: "",
      },
      rules: {
        userName: [
          {
            required: true,
            message: "请输入账号",
            trigger: "blur",
          },
          {
            min: 6,
            max: 24,
            message: "账号长度需要在6-24之间",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur",
          },
          {
            min: 6,
            max: 24,
            message: "密码长度需要在6-24之间",
            trigger: "blur",
          },
        ],
      },
    });
    return {
      ...toRefs(data),
    };
  },
});
</script>

<style lang='scss' scoped>
.login-box {
  width: 100%;
  height: 100%;
//   background: url("../assets/logo.png");
}
</style>