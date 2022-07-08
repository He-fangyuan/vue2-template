<template>
    <div class="PieCharts" ref="pie">
    </div>
</template>
<script>
import * as echarts from 'echarts';

export default {
    name: 'columnar',
    mounted() {
      this. getPieEchartData()
    },
    methods: {
        getPieEchartData() {
            const chart = this.$refs.pie
            const myChart = echarts.init(chart)
            const option = {
                    title: {
                        text: '用户投资类型',
                        left: 'center'
                    },
                    tooltip: {
                        trigger: 'item'
                    },
                    legend: {
                        orient: 'vertical',
                        left: 'left'
                    },
                    series: [
                        {
                        name: '访问来源',
                        type: 'pie',
                        center: ['55%', '60%'],  
                        radius: '50%',
                        data: [
                            { value: 1548, name: '期货' },
                            { value: 335, name: '基金' },
                            { value: 310, name: '股票' },
                            { value: 234, name: '债券' },
                            { value: 135, name: '储蓄' }
                        ],
                        emphasis: {
                            itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                        }
                    ]
                    };
            myChart.setOption(option)
        }
    }
}
</script>
<style lang="less" scoped>
.PieCharts {
  width: 29%;
  height: 300px;
  border-radius: 10px;
  margin-left: 10px;
  padding: 10px;
  background-color: #fff;
}
</style>