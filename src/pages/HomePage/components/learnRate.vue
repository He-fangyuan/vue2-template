<template lang="">
    <div class="learnRate">
        <div class="topPhoto">
            <img :src="avatorPhoto" alt="">
        </div>
        <div class="rateMsg">
            <el-row class="rateMsgRow">
                <span>vue:</span>
                <el-progress :percentage="100" status="success"></el-progress>
            </el-row>
            <el-row class="rateMsgRow">
                <span>js:</span>
                <el-progress :percentage="80"></el-progress>
            </el-row>
            <el-row class="rateMsgRow">
                <span>css:</span>
                <el-progress :percentage="60"></el-progress>
            </el-row>
            <el-row class="rateMsgRow">
                <span>html:</span>
                <el-progress :percentage="90"></el-progress>
            </el-row>
            <el-row class="rateMsgRow">
                <span>react:</span>
                <el-progress :percentage="0"></el-progress>
            </el-row>
            <el-row class="rateMsgRow">
                <span>angular:</span>
                <el-progress :percentage="0"></el-progress>
            </el-row>
        </div>
    </div>
</template>
<script>
import avatar3 from '@/assets/imgs/avatar-3.png'

export default {
    name: 'learnRate',
    data() {
        return {
            avatorPhoto:avatar3
        }
    },
}
</script>
<style lang="less" scoped>
.learnRate {
    width: 27%;
    border-radius: 5px;
    padding: 10px;
    background-color: #fff;
    border: 1px solid #eaebec;
    overflow: hidden;
}
.topPhoto {
    height: 240px;
    margin-bottom: 20px;
    img {
        width: 100%;
        height: 100%;
        border-radius: 10px;
    }
}
.rateMsg {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 120px;
}
.rateMsgRow {
    display: flex;
    span {
        display: inline-block;
        width: 25%;
    }
    .el-progress {
        width: 75%;
    }
}
</style>