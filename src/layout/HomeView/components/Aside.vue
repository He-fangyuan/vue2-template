<template>
     <el-aside :width="Collapse ? '64px' : '200px'" class="home-aside">
            <el-menu
                :default-active="activePath"
                background-color="#304156"
                text-color="#fff"
                :collapse="Collapse"
                :collapse-transition="false"
                unique-opened
                router
                active-text-color="#1890ff">
                <!-- 菜单列表 -->
                <template v-for="item in menuList">
                <!-- 包含二级菜单的一级菜单 -->
                    <el-submenu v-if="item.hasOwnProperty('children')" :index="item.id" :key="item.id">
                        <template slot="title">
                            <i style="margin-right: 16px;">
                                <svg-icon :icon-class="item.icon"/>
                            </i>
                            <span slot="title">{{$t(`menu.${item.title}`)}}</span>
                        </template>
                        <!-- 二级菜单 -->
                        <el-menu-item-group v-for="subitem in item.children">
                            <el-menu-item :index="subitem.path" :key="subitem.id" @click="saveNavState(subitem.path,item.title,subitem.title)">
                            {{$t(`menu.${subitem.title}`)}}</el-menu-item> 
                        </el-menu-item-group>
                    </el-submenu>
                    <!-- 只包含一级菜单 -->
                    <el-menu-item v-else :index="item.path"  class="menuItems" :key="item.id" @click="saveNavState(item.path,item.title)">
                            <i style="margin-right: 16px;">
                                <svg-icon :icon-class="item.icon"/>
                            </i>
                            <span slot="title">{{$t(`menu.${item.title}`)}}</span>
                    </el-menu-item>
                </template>
            </el-menu>
        </el-aside>
</template>
<script>
import menuLists from '@/assets/data/menuList'
import { mapGetters } from 'vuex'

export default {
    name: 'Aside',
    data() {
        return {
            // isCollapse:this.$store.getters.Collapse,//控制折叠
            menuList: menuLists,//菜单栏列表，包含多组含有图标和标题的对象
        }
    },
    computed: {
        ...mapGetters([
            'Collapse',
            'activePath'
      ]),
    },
    methods: {
        // 保存链接的激活状态
        saveNavState() {
            const arr = [...arguments].slice(1)
            this.$store.commit('SET_BreadcrumbArray', arr)
            this.$store.commit('SET_ActivePath', arguments[0])
            const path = '/' + arguments[0]
            window.sessionStorage.setItem('activePath', path)
        },
    },
}
</script>
<style lang="less" scoped>
.home-aside {
    background-color: #304156;
}  
</style>