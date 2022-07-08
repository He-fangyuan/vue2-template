<template>
    <div class="columnar">
        <div class="columnCharts" ref="columnar"></div>
    </div>
</template>
<script>
import * as echarts from 'echarts';

export default {
    name: 'columnar',
    mounted() {
      this.getEchartData()
    },
    methods: {
        getEchartData() {
            const chart = this.$refs.columnar
            const myChart = echarts.init(chart)
            const option = {
        tooltip: {
            trigger: 'axis',
        },
        legend: {
            data: ['访问量', '下载量']
        },
        xAxis: [
            {
            type: 'category',
            axisTick: { show: false },
            splitLine:{
                show:true,
            },
            data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
            }
        ],
        yAxis: [
            {
            type: 'value',
            interval: 30,
            },
        ],
        series: [
            {
            name: '访问量',
            type: 'bar',
            color:'#516b91',
            markPoint:{
                data:[
                {
                type:"max",
                name:"最大值"
                },
                {
                type:"min",
                name:"最小值"
                }
                ]
            },
            data: [
                2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3
            ]
            },
            {
            name: '下载量',
            type: 'bar',
            color:'#59c4e6',
            markPoint:{
                data:[
                {
                type:"max",
                name:"最大值"
                },
                {
                type:"min",
                name:"最小值"
                }
                ]
            },
            data: [
                2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3
            ]
            },
        ]
        }
            myChart.setOption(option)
        }
    }
}
</script>
<style lang="less" scoped>
.columnar {
  width: 70%;
  height: 400px;
  border-radius: 10px;
  margin-left: 10px;
  background-color: #eaebec;
}
.columnCharts {
    height: 380px;
    margin: 10px;
    padding: 10px;
    border-radius: 5px;
    background-color: #fff;
}
</style>