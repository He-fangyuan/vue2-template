<template>
    <el-container class="home-container">
        <Aside/>
        <el-container>
            <el-header>
                <Header/>
            </el-header>
            <el-main ref="menu">
                <router-view></router-view>
                <Footer />
            </el-main>
        </el-container>
    </el-container>
</template>
<script>
import menuLists from '@/assets/data/menuList'
import Aside from './components/Aside'
import Header from './components/Header'
import Footer from '../maxin/Footer.vue'
export default {
    name: 'Home',
    components: {
        Aside,
        Header,
        Footer
    }
}
</script>
<style lang="less" scoped>
.home-container {
    width: 100%;
    height: 100%;
    background-color: #eff1f4;
}


</style>