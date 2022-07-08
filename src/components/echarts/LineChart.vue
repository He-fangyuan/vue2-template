<template>
    <div class="LineCharts" ref="line">
    </div>
</template>
<script>
import * as echarts from 'echarts';

export default {
    name: 'columnar',
    mounted() {
      this. getLineEchartData()
    },
    methods: {
        getLineEchartData() {
            const chart = this.$refs.line
            const myChart = echarts.init(chart)
            const option = {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#6a7985'
                    }
                    }
                },
                legend: {
                    data: ['股票', '基金', '债券', '储蓄', '期货']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: [
                    {
                    type: 'category',
                    splitLine:{show:true},
                    boundaryGap: false,
                    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                    }
                ],
                yAxis: [
                    {
                    type: 'value'
                    }
                ],
                series: [
                    {
                    name: '股票',
                    type: 'line',
                    stack: 'Total',
                    areaStyle: {},
                    emphasis: {
                        focus: 'series'
                    },
                    data: [120, 132, 101, 134, 90, 230, 210]
                    },
                    {
                    name: '基金',
                    type: 'line',
                    stack: 'Total',
                    areaStyle: {},
                    emphasis: {
                        focus: 'series'
                    },
                    data: [220, 182, 191, 234, 290, 330, 310]
                    },
                    {
                    name: '债券',
                    type: 'line',
                    stack: 'Total',
                    areaStyle: {},
                    emphasis: {
                        focus: 'series'
                    },
                    data: [150, 232, 201, 154, 190, 330, 410]
                    },
                    {
                    name: '储蓄',
                    type: 'line',
                    stack: 'Total',
                    areaStyle: {},
                    emphasis: {
                        focus: 'series'
                    },
                    data: [320, 332, 301, 334, 390, 330, 320]
                    },
                    {
                    name: '期货',
                    type: 'line',
                    stack: 'Total',
                    label: {
                        show: true,
                        position: 'top'
                    },
                    areaStyle: {},
                    emphasis: {
                        focus: 'series'
                    },
                    data: [820, 932, 901, 934, 1290, 1330, 1320]
                    }
                ]
                };
            myChart.setOption(option)
        }
    }
}
</script>
<style lang="less" scoped>
.LineCharts {
  width: 40%;
  height: 300px;
  border-radius: 10px;
  margin-left: 10px;
  padding: 10px;
  background-color: #fff;
}
</style>