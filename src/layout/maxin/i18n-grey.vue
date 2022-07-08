<template lang="">
    <div class="svg flex-row">
        <el-dropdown trigger="click"  @command="handleCommand">
            <span class="svg-container flex-row">
                <svg-icon icon-class="language"/>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="cn">中文</el-dropdown-item>
                <el-dropdown-item command="en">English</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>

<script>
  export default {
    name:'i18n',
    methods: {
        handleCommand(e) {
            let loc = this.$i18n.locale
            // console.log(e,loc)
            if (e !== loc) {
                this.$i18n.locale = e
                // localStorage.set('lang','e')
                if (e === 'cn') {
                    this.$message.success('语言切换成功！');
                } else {
                    this.$message.success('Language switching succeeded!');
                }
            }
      }
    }
  }
</script>
<style lang="less" scoped>
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  } 
  .svg-container {
        width: 30px;
        color: grey;
        font-size: 18px;
        cursor: pointer;
    }
    .svg {
        height: 100%;
        padding: 0 10px;
    }
</style>