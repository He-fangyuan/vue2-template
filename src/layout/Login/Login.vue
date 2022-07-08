<template>
    <div class="login_container flex-row">
        <!-- 登录页面 -->
       <el-form :model="LoginForm" :rules="loginRules" ref="loginRef" class="login-form flex-col" autocomplete="on" label-position="left">
           <!-- 标题 -->
            <div class="title-container flex-row">
                <h3 class="title">{{$t('login.title')}}</h3>
                <i18n class="icon-position"></i18n>
            </div>
           <!-- 用户名 -->
            <el-form-item prop="username">
                <el-input
                ref="username"
                v-model="LoginForm.username"
                :placeholder="$t('login.usernameTip')"
                name="username"
                type="text"
                autocomplete="on"
                >
                    <template slot="prepend">
                        <svg-icon icon-class="user"/>
                    </template>
                </el-input> 
            </el-form-item>
            <!-- 密码 -->
            <el-form-item prop="password">
                 <el-input
                    ref="password"
                    v-model="LoginForm.password"
                    :placeholder="$t('login.passwordTip')"
                    name="password"
                    type="text"
                    tabindex="2"
                    autocomplete="on"
                    show-password
                >
                    <template slot="prepend">
                        <svg-icon icon-class="password"/>
                    </template>
                </el-input> 
            </el-form-item>
            <!-- 忘记密码 -->
            <div class="forget">
                 <a href="" class="aaa">{{$t('login.forget')}}</a>
            </div>
            <!-- 登录 重置按钮 -->
            <el-form-item>
                <el-button type="primary" @click="login" class="login-btn">{{$t('login.login')}}</el-button>
                <el-button @click="resetForm('loginRef')" class="login-btn ri">{{$t('login.reset')}}</el-button>
            </el-form-item>
            <!-- 第三方登录 提示区域 -->
            <el-form-item>
                <div class="tips">
                    <div class="tip">
                        <span>{{$t('login.admin')}}</span>
                        <span style="margin-left: 10px;">{{$t('login.passwordAny')}}</span>
                    </div>
                    <div class="tip">
                        <span>{{$t('login.editor')}}</span>
                        <span style="margin-left: 10px;">{{$t('login.passwordAny')}}</span>
                    </div>
                </div>
                <el-button type="primary" @click="LioginVisible = true" class="login-btn ri">{{$t('login.third')}}</el-button>
                <!-- 第三方对话框 -->
                <el-dialog
                :title="$t('login.third')"
                :visible.sync="LioginVisible"
                width="50%">
                    <span>{{$t('login.thirdTip')}}</span>
                    <div slot="footer" class="dialogForm">
                        <div class="dialogItem">
                            <span class="svg-container flex-row">
                                <svg-icon icon-class="wechat" />
                            </span>
                            Wechat
                        </div>
                        <div class="dialogItem">
                            <span class="svg-container flex-row" style="background-color: #6ba2d6;">
                                <svg-icon icon-class="qq" />
                            </span>
                            QQ
                        </div>
                    </div>
                </el-dialog>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import i18n from '@/layout/maxin/i18n'
import axios from '@/api/axios'
import { setToken } from '@/utils/auth'
import { mapGetters } from 'vuex'

export default {
    name: 'Login',
    data() {
        return {
            LoginForm: {
                username: 'admin',
                password:'123456'
            },  
           //验证规则
            loginRules: {
                username: [
                    { required: true, message: '请输入用户名', trigger: 'blur' },
                    { min: 3, max: 8, message: '长度在 3 到 8 个字符', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
                ]
            },
                //控制对话框显示
            LioginVisible:false,
        }
    },
    computed: {
        ...mapGetters([
            'activePath'
      ]),
    },
    methods: {
        login() {
            this.$refs.loginRef.validate(async valid => {
                if (!valid) return;
                const lang = this.$i18n.locale;
                const { data: res } = await axios.post('\login', this.LoginForm)
                //登录失败
                if (res.meta.status !== 200) return this.$message.error(this.$i18n.messages[lang]['login']['fail'])
                //登录成功
                this.$message.success(this.$i18n.messages[lang]['login']['success'])
                //将token保存在本地和Vuex
                // console.log(res);
                this.$store.commit('SET_NAME', this.LoginForm.username)
                this.$store.commit('SET_Token', res.data.token)
                window.localStorage.setItem('token', res.data.token)
                setToken('token', res.data.token)
                //跳转主页面
                const path = '/' + this.activePath
                this.$router.push(path)
            })
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        // 第三方登录
    },
    components:{i18n}
}
</script>

<style lang="less" scoped>
// element-ui样式修改
.login-item {
   .el-input {
    display: inline-block;
    height: 45px;
    width: 90%;
    input {
      background-color: transparent;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 17px;
      color: #fff;
      height: 45px;
      caret-color: #fff;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px #283443 inset !important;
        -webkit-text-fill-color: #fff !important;
      }
    }
   }
   .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 5px;
    color: #454545;
   } 
}
  .login_container {
    width: 100%;
    height: 100%;
    background-color: #2d3a4b;
  }  
  .login-form {
    width: 500px;
  }
  .title-container {
    position: relative;
    width: 490px;
    height: 50px;
    margin-bottom: 10px;
    .icon-position {
        position: absolute;
        right: 0;
    }
  }
  .title {
    font-size: 26px;
    font-weight: bold;
    color: #fff;
  }
  .forget {
    width: 490px;
    margin-bottom: 10px;
    .aaa {
        float: right;
        font-size: 14px;
        color: #fff;
    }
  }
  .login-btn {
    width: 200px;
  }
  .ri {
    margin-left: 90px;
  }
 .tips {
    width: 300px;
    .tip {
        height: 20px;
        line-height: 20px;
        font-size: 14px;
        color: #fff;
    }
 }
 .dialogForm {
    display: flex;
    .dialogItem {
        display: flex;
        width: 150px;
        height: 40px;
        margin-right: 10px;
    }
    .svg-container {
        width: 40px;
        height: 40px;
        font-size: 20px;
        margin-right: 5px;
        border-radius: 3px;
        background-color: #24da70;
    }
 }
</style>