<template>
    <div class="note-login">
        <el-container class="login-layout">
            <el-header>

            </el-header>
            <el-container>
                <el-aside>

                </el-aside>
                <el-main>
                    <el-card class="login-card">

                        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal"
                            @select="handleSelect">
                            <el-menu-item index="1">登录</el-menu-item>

                            <el-menu-item index="2">注册</el-menu-item>

                        </el-menu>
                        <div>
                            <el-form v-show="loginVisible">
                                <el-form-item>
                                    <el-input placeholder="请输入账户" v-model="account" maxlength="20" show-word-limit>

                                    </el-input>
                                </el-form-item>
                                
                                <el-form-item>
                                    <el-input placeholder="请输入密码" show-password v-model="password" maxlength="20"
                                        show-word-limit>

                                    </el-input>
                                </el-form-item>
                                <el-form-item>
                                    <el-button @click="handleLogin">
                                        登录
                                    </el-button>
                                    <el-link type="primary">注册</el-link>
                                </el-form-item>

                            </el-form>
                        </div>
                        <div>
                            <el-form v-show="!loginVisible">
                                <el-form-item>
                                    <el-input placeholder="请输入账户" v-model="account" maxlength="20" show-word-limit
                                        style="width: 80%;">

                                    </el-input>
                                </el-form-item>
                                <el-form-item clas="passwd">
                                    <el-popover placement="top-start" title="提示" :width="200" trigger="hover"
                                        content="密码长度大于8,密码必须有字母、数字以及特殊符号,不超过20位">
                                        <template #reference>
                                            <el-input placeholder="请输入密码" @input="getLevel" show-password
                                                v-model="password" maxlength="20" show-word-limit style="width: 80%;">

                                            </el-input>
                                        </template>
                                    </el-popover>

                                    <div class="password-level">

                                        <div :class="{'level-1':level>=0,'level-2':level>=1,'level-3':level==3}">

                                        </div>

                                        <div :class="{'level-1':level>=0,'level-2':level>=2,'level-3':level==3}">

                                        </div>
                                        <div :class="{'level-1':level>=0,'level-3':level==3}">

                                        </div>
                                    </div>
                                </el-form-item>
                                <el-form-item>
                                    <el-input placeholder="请输入用户名" v-model="userName" maxlength="20" show-word-limit>

                                    </el-input>
                                </el-form-item>
                                <el-form-item>
                                    <el-upload class="avatar-uploader" action="" :show-file-list="false"
                                        :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
                                        <img v-if="imageUrl" :src="imageUrl" class="avatar">
                                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                    </el-upload>
                                    <p>上传用户头像,大小不超过2M</p>
                                </el-form-item>
                                
                                <el-form-item>
                                    <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 3}"
                                        placeholder="请输入用户描述,不超过60个字" v-model="textarea" resize="none" maxlength="60">

                                    </el-input>
                                </el-form-item>
                                <el-form-item>
                                    <el-button @click="encryption">
                                        注册
                                    </el-button>
                                </el-form-item>

                            </el-form>

                        </div>


                    </el-card>
                </el-main>
                <el-aside>

                </el-aside>
            </el-container>
            <el-footer>

            </el-footer>
        </el-container>

    </div>
</template>

<script>
import md5 from 'js-md5';
import axios from 'axios'
export default {
    data() {
        return {
            account: '',
            password: '',
            activeIndex: '1',
            loginVisible: true,
            imageUrl: '',
            textarea: '',
            level: 0,
            url: 'https://32y1255s71.zicp.fun/',
            userName: ''
        }
    }, methods: {
        //md加密密码
        encryption: function () {
            const encryPassword = md5(this.password + 'hello');
            console.log(encryPassword);
            return encryPassword;
        }, handleSelect: function () {
            this.loginVisible = !this.loginVisible;
        }, handleAvatarSuccess(res, file) {
            this.imageUrl = URL.createObjectURL(file.raw);
        },
        beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isJPG) {
                this.$message.error('上传头像图片只能是 JPG 格式!');
            }
            if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isJPG && isLt2M;
        },
        getLevel: function () {
            //必须为字母加数字且长度不小于8位
            this.level = 0;
            if (this.password == null || this.password.length < 8) {
                return false;
            }
            //密码中是否有数字
            if (/[0-9]/.test(this.password)) {
                this.level++;
            }
            //判断密码中有没有字母
            if (/[a-zA-Z]/.test(this.password)) {
                this.level++;
            }
            //判断密码中有没有特殊符号
            if (/[^0-9a-zA-Z_]/.test(this.password)) {
                this.level++;
            }
        }, cheackPasswd: function () {
            if (this.level === 3)
                return true;
            return false;
        }, handleLogin() {

            const encryPassword = this.encryption(this.password);
            var config = {
                method: 'post',
                url: this.url + 'nologin/login?account=' + this.account + '&password=' + encryPassword,
            };
            var that = this;
            axios(config)
                .then(function (response) {
                    console.log(JSON.stringify(response.data));
                })
                .catch(function (error) {
                    console.log(error);
                });
        }, handleRegester() {
            if (this.level === 3) {
                const encryPassword = this.encryption(this.password);
                var config = {
                    method: 'post',
                    url: this.url + '/nologin/addUser',
                    data:{uName:'',}
                };
                var that = this;
                axios(config)
                    .then(function (response) {
                        console.log(JSON.stringify(response.data));
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }

        }
    }
}
</script>

<style>
.note-login {
    width: 100%;
    height: 100%;
    background-color: beige;
}

.login-layout {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.login-card {
    height: 60vh;
    width: 400px;
}

.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}

.avatar-uploader .el-upload:hover {
    border-color: #409EFF;
}

.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 80px;
    height: 80px;
    line-height: 80px;
    text-align: center;
}

.avatar {
    width: 80px;
    height: 80px;
    display: block;
}

.passwd {
    display: flex;
    justify-content: center;
    width: 100%;
}

.password-level {
    display: flex;
    justify-content: center;
}

.level-1 {
    border-radius: 4px;
    background-color: #F56C6C;
    width: 10px;
    height: 20px;
    margin: 0 2px;
}

.level-2 {
    border-radius: 4px;
    background-color: #E6A23C;
    width: 10px;
    height: 20px;
    margin: 0 2px;
}

.level-3 {
    border-radius: 4px;
    background-color: #67C23A;
    width: 10px;
    height: 20px;
    margin: 0 2px;
}
</style>

<!-- <template>
    <div class="container">
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="left">
            <div class="header-logo">
                <h1><a href="#">TodayBuy</a><span></span><span></span></h1>

            </div>
        </div>
        <div class="right">
            <table>
                <tr>
                    <td></td>
                    <th colspan="2">用户登录</th>
                </tr>

                <tr>
                    <td>手机号：</td>
                    <td colspan="2"><input type="text" id="num" onchange="checkNum()" placeholder="请输入11位手机号"></td>
                </tr>
                <tr>
                    <td>密码：</td>
                    <td colspan="2"> <input type="password" id="passwd" onchange="checkPw()"
                            placeholder="请输入密码，包含数字和字母">
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td><a href="index.html">返回主站</a></td>
                    <td>
                        <button onclick="checkAccount()">登录</button>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>



<style>
    * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #E9E9E8;
        }

        a {
            display: inline-block;
            text-decoration: none;
            color: white;

        }

        .right a {
            width: 70px;
            height: 28px;
            background-color: #e7b944;
            border-radius: 15px;
            text-align: center;
            line-height: 28px;
        }

        .container {
            position: relative;
            display: flex;
            width: 600px;
            height: 460px;
            background-color: rgba(0, 0, 0, 0.5);
            margin-top: 8%;
            color: white;
            overflow: hidden;
            border-radius: 15px;
            box-shadow: 0 2px 30px rgba(0, 0, 0, 0.3);
        }

        .left {
            width: 40%;
            height: 100%;
            z-index: 1;
        }

        .right {
            padding: 15% 0;
            height: 100%;
            width: 60%;
            z-index: 1;
        }

        .right table {
            height: 100%;
        }

        .right td {
            padding-left: 30px;
        }

        th {
            height: 40px;
            font-size: 36px;
            text-align: center;
            padding-left: 20px;
        }

        td input {
            width: 200px;
            height: 32px;
            border: 3px solid white;
            padding: 10px;
            transition: all 0.2s linear;
            border-radius: 15px;
        }

        input:focus {
            border-radius: 15px;
            border: 3px solid #16db65;
            outline: none;
        }

        td button {
            width: 70px;
            height: 28px;
            margin-left: 20px;
            border-radius: 15px;
            background-color: deepskyblue;
            font-size: 16px;
            color: white;
            border: none;
        }

        .header-logo {
            left: 5px;
            top: 180px;
            position: relative;
            font-size: 26px;
        }

        .header-logo h1 span {
            position: absolute;
            display: inline-block;
            background-color: rgb(28, 198, 255);
            width: 8px;
            height: 8px;
            border-radius: 25px;
            transition: all 0.2s linear;
            animation-name: example;
            animation-duration: 5s;
            animation-iteration-count: infinite;
        }

        .header-logo h1 span:nth-child(2) {
            left: 17.5%;
            top: 54%;
        }

        .header-logo h1 span:nth-child(3) {
            left: 31.5%;
            top: 54%;
        }

        .header-logo:hover span {
            transform: translateX(-4px);
        }

        .wave {
            width: 800px;
            height: 800px;
            position: absolute;
            background-color: deepskyblue;
            top: -520px;
            left: -100px;
            filter: opacity(0.4);
            border-radius: 42%;
            animation: drift linear infinite;
            animation-duration: 5s;
        }

        .wave:nth-of-type(1) {
            animation-duration: 5s;
        }

        .wave:nth-of-type(2) {
            animation-duration: 7s;
        }

        .wave:nth-of-type(3) {
            animation-duration: 9s;
            background-color: red;
            filter: opacity(0.1);
        }

        @keyframes drift {
            from {
                transform: rotate(360deg);
            }
        }
</style>
 -->
