<template>
    <div class="home">
        <div class="home_body">
            <div class="home_left">
                <img :src="xk" alt="" />
                <h2>{{ msg }}</h2>
            </div>
            <div class="home_right">
                <div class="home_right_from">
                    <h3>登录</h3>
                    <label>用户名</label>
                    <input type="text" v-model="from.username" placeholder="请输入用户名" />
                    <label>密码</label>
                    <input type="password" v-model="from.password" placeholder="密码" />
                    <div class="checkbox">
                        <input type="checkbox" v-model="checkbox" />
                        <p>记住密码</p>
                    </div>
                </div>
                <div class="login_btn">
                    <el-button class="test_btn" type="primary" @click="login">登录</el-button>
                </div>
                <!-- <div class="num">
                    {{num}}
                </div> -->
            </div>
        </div>
    </div>
</template>


<script>
    export default {
        data() {
            return {
                timer: true, //防抖开关
                from: {
                    username: "",
                    password: "",
                },
                msg: "快乐牌刀片",
                xk: require("../assets/img/xk.jpg"),
                checkbox: false,
            };
        },
        methods: {
            login() {
                let test_blm = this;
                if (test_blm.timer) {
                    test_blm.timer = false;
                    setTimeout(() => {
                        test_blm.timer = true;
                    }, 1000);
                    if (this.from.username == "") {
                        this.$message({
                            showClose: true,
                            message: "警告哦，这是一条警告消息",
                            type: "warning",
                        });
                        return;
                    } else if (this.from.password == "") {
                        this.$message({
                            showClose: true,
                            message: "密码为空",
                            type: "warning",
                        });
                        return;
                    }



                    if (this.from.username == "1" && this.from.password == "2") {
                        this.$message({
                            showClose: true,
                            message: "恭喜你，这是一条成功消息",
                            type: "success",
                        });
                        this.$router.push({
                            // name: "about",
                            path: "/about",
                        });
                    } else {
                        this.$message({
                            showClose: true,
                            message: "账号或密码错误",
                            type: "error",
                        });
                        return;
                    }

                    if (this.checkbox == true) {
                        localStorage.setItem("user", JSON.stringify(this.from)); // 转为字符串模式
                    }
                }
            },
        },
        // computed:{
        //     num(){
        //         console.log(parseInt(this.from.username)+parseInt(this.from.password));
        //         return parseInt(this.from.username)+parseInt(this.from.password)
        //     }
        // },
    };
</script>

<style lang='scss'>
    .home {
        height: 100vh;
        background-color: #263145;
    }

    .home_body {
        display: flex;
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        height: 80%;
        width: 50%;
        background-color: #fff;
    }

    .home_left {
        height: 100%;
        width: 40%;
        overflow: hidden;
    }

    .home_left h2 {
        position: absolute;
        top: 8%;
        left: 12%;
        color: #fff;
    }

    .home_right {
        height: 100%;
        width: 60%;
    }

    .home_right_from {
        line-height: 40px;
        padding: 5em 2em 2em 2em;

        input {
            padding-bottom: 7px;
        }
    }

    .home_right_from h3 {
        font-weight: 400;
        font-size: 40px;
        padding-bottom: 25px;
    }

    .home_right_from .checkbox {
        input {
            width: 20px;
            float: left;
            margin-top: 14px;
        }

        p {
            font-size: 12px;
        }
    }

    input {
        width: 100%;
    }

    label {
        width: 100%;
    }

    .login_btn {
        width: 80%;
        margin: 0 auto;

        .test_btn {
            width: 100%;
        }
    }
</style>