<template>
    <div class="HomeContainer">
        <!-- 头部收益和投资信息卡片列表 -->
        <TopMsg />
        <!-- 项目更新日志和访问下载统计 -->
        <div class="LogsContainer">
            <Log/>
            <Columnar/>
        </div>
        <!-- 图表区域 -->
        <div class="chartsContainer">
            <!-- 用户投资类型饼状图 -->
            <Pie />
            <!-- 资金折线图 -->
            <LineChart />
            <!-- 各个区域人数雷达图 -->
            <Radar />
        </div>
        <!-- 用户数据信息列表 -->
        <div class="userList">
            <!-- 用户资金列表 -->
            <UserMoneyList />
            <!-- 各个用户信息 -->
            <UserMsgList/> 
            <!-- 个人学习比例信息 -->
            <LearnRate/>
        </div>
    </div>
</template>
<script>
import TopMsg from './components/topMsg'
import Log from './components/log'
import Columnar from '@/components/echarts/Columnar'
import Pie from '@/components/echarts/Pie'
import LineChart from '@/components/echarts/LineChart'
import Radar from '@/components/echarts/Radar'
import UserMoneyList from './components/userMoneyList.vue'
import UserMsgList from './components/userMsgList.vue'
import LearnRate from './components/learnRate.vue'

export default {
    name: 'HomePage',
    components: {
        TopMsg,
        Log,
        Columnar,
        Pie,
        LineChart,
        Radar,
        UserMoneyList,
        UserMsgList,
        LearnRate,
    }
}
</script>
<style lang="less" scoped>
.HomeContainer {
    width: 100%;
    border-radius: 20px;
    overflow: hidden;
    border: 1px solid #fff;
    background-color: #f0f2f5;
}
.LogsContainer {
    display: flex;
    width: 100%;
    height: 400px;
    padding: 0 20px;
}  
.chartsContainer {
    display: flex;
    justify-content: space-around;
    height: 300px;
    margin-top: 20px;
}
.userList {
    display: flex;
    justify-content: space-between;
    height: 400px;
    margin-top: 20px;
}
</style>