<template>
    <div class="shareCard">
        <div slot="header" class="clearfix topTitle">
            <span>分享组件四：仿简书侧栏分享</span>
        </div>
        <div class='RowItems flex-row'>
            <el-tooltip content="分享文章" placement="left">
                 <svg-icon icon-class="share1"/>
            </el-tooltip>
        </div>
    </div>
</template>
<script>

export default {
   
}
</script>
<style lang="less" scoped>
.RowItems {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 160px;
    padding: 10px;
}
.svg-icon {
    font-size: 50px;
}
</style>