<template>
    <div class="home-header">
        <!-- 控制折叠图标和面包屑导航地址 -->
        <div class="leftItem">
            <button v-if="$store.getters.Collapse" class="el-icon-s-fold iconSize" @click="changeCollapse"></button>
            <button v-else class="el-icon-s-unfold iconSize" @click="changeCollapse"></button>
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item v-for="item in breadcrumbArray">{{$t(`menu.${item}`)}}</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <!-- 右侧菜单栏 -->
        <div class="rightItem">
            <!-- 全屏按钮 -->
            <svg-icon v-if="isFullscreen" @click="screen" icon-class="exit-fullscreen" class="pointer"/>
            <svg-icon v-else @click="screen" icon-class="fullscreen" class="pointer"/>
            <!-- 语言切换按钮 -->
            <i18nGrey />
            <span>Hi,Admin</span>
            <!-- 头像 -->
            <el-dropdown index="2" @command="handleCommand">
                <template>
                    <div class="userPhoto">
                        <img :src="personPhoto" alt="">
                    </div>
                </template>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item index="2-1" command="Person">个人信息</el-dropdown-item>
                    <el-dropdown-item index="2-2" command="Home">首页</el-dropdown-item>
                    <el-dropdown-item index="2-3" divided command="SignOut">退出登录</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>
<script>
import screenfull from 'screenfull'
import { mapGetters } from 'vuex'
import i18nGrey from '@/layout/maxin/i18n-grey'
import avator from "@/assets/imgs/avator.gif"

export default {
    name: 'Header',
    data() {
        return {
            isFullscreen: false,//控制全屏
            personPhoto:avator,
        }
    },
    computed: {
        ...mapGetters([
            'breadcrumbArray',
            'activePath'
      ]),
    },
    methods: {
        changeCollapse() {
            this.$store.dispatch('setChangeCollapse')
        },
        // 如果不允许进入全屏，发出不允许提示
        screen() {
            if (!screenfull.enabled) {
                this.$message.error('您的浏览器不能全屏');
                return false
            }
            this.isFullscreen = !this.isFullscreen
            screenfull.toggle();
            if (this.isFullscreen) {
                this.$message.success('全屏啦')
            } else {
                this.$message.success('全屏退出')
            }
            
        },
        //退出登录
        signOut() {
            this.$store.commit('Clear_Token')
            this.$router.push('/login')
        },
        handleCommand(command) {
            switch (command) {
                 case 'Home':
                    this.$router.push('/home')
                    break;
                case 'SignOut':
                    this.signOut();
                    break;
            }
        }
    },
    components:{i18nGrey}
    
}
</script>
<style lang="less" scoped>
.home-header {
    height: 100%;
    width: 100%;
    padding:0 10px;
    background-color: #fff;
}
.leftItem {
    float: left;
    display: flex;
    align-items: center;
    height: 100%;
}
.rightItem {
    float: right;
    display: flex;
    align-items: center;
    height: 100%;
    .userPhoto {
        width: 40px;
        height: 40px;
        margin-left: 10px;
        border-radius: 10px;
        overflow: hidden;
        cursor: pointer;
        img {
            width: 40px;
        }

    }
}
.iconSize {
    font-size: 22px;
    margin-right: 10px;
    cursor: pointer;
    border: none;
    background-color: #fff;
}
</style>