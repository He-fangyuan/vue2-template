<template>
    <div class="RadarCharts" ref="radar">
    </div>
</template>
<script>
import * as echarts from 'echarts';

export default {
    name: 'columnar',
    mounted() {
      this. getRadarEchartData()
    },
    methods: {
        getRadarEchartData() {
            const chart = this.$refs.radar
            const myChart = echarts.init(chart)
            const option = {
                    radar: {
                        // shape: 'circle',
                        indicator: [
                        { name: '华南区域', max: 100 },
                        { name: '东北区域', max: 100 },
                        { name: '港澳台', max: 100 },
                        { name: '东南区域', max: 100 },
                        { name: '西南区域', max: 100 },
                        { name: '西北区域', max: 100 },
                        { name: '华北区域', max: 100 },
                        { name: '华中区域', max: 100 },
                        ]
                    },
                    series: [
                        {
                        name: 'Budget vs spending',
                        type: 'radar',
                        data: [
                            {
                            value: [73, 60, 0, 0, 100, 50,40,85],
                            name: 'Allocated Budget'
                            },
                        ],
                            areaStyle: {},
                          //这里的配置显示数值
                        label: {
                            normal: {
                                show: true,
                                formatter:function(params) {
                                    return params.value;
                                }
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
.RadarCharts {
  width: 29%;
  height: 300px;
  border-radius: 10px;
  margin-left: 10px;
  padding: 10px;
  background-color: #fff;
}
</style>