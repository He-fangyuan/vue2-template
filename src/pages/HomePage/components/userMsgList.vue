<template>
    <div class="userMsgList">
        <el-row v-for="item in msgList" :index="item.id" class="msgRow"> 
            <el-col class="photoIcon">
                <img :src="MsgPhoto" alt="">
            </el-col>
            <el-col class="MsgContext">
                <div class="msgTitle">{{item.username}}</div>
                <div class="msgText">{{item.text}}</div>
                <div class="msgTime">
                    <i class="el-icon-time"></i>
                    {{item.date}}
                </div>
            </el-col>
        </el-row> 
    </div>
</template>
<script>
import userMoneyLists from '@/assets/data/userMoney'
import avatar from '@/assets/imgs/avatar-2.jpg'

export default {
    name: 'userMsgList',
    data() {
        return {
            msgList: userMoneyLists,
            MsgPhoto: avatar,
        }
    },
}
</script>
<style lang="less" scoped>
.userMsgList {
    width: 27%;
    background-color: #fff;
    border-radius: 5px;
    overflow: auto;
}   
.msgRow {
    width: 100%;
    padding-top: 10px;
    border-bottom: 1px solid #eaebec;
}
.photoIcon {
    width: 20%;
    height: 130px;
    text-align: center;
    img {
        width: 50px;
        border-radius: 50%;
    }
}
.MsgContext {
    width: 80%;
    height: 130px;
}
.msgTitle {
    height: 30px;
    line-height: 30px;
    font-weight: 700;
}
.msgText {
    height: 80px;
    font-size: 10px;
    padding: 10px;
}
.msgTime {
    height: 20px;
    line-height: 20px;
    text-align: right;
    font-size: 12px;
}
</style>