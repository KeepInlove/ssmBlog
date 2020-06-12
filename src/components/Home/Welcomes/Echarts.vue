<template>
<!--    <v-chart id ='main' ref='main' style="width: 600px;height:400px;" />-->
    <div >
        <v-chart theme="ovilia-green" :options="polar"/>
    </div>
</template>

<style scoped lang="less">
    /**
     * 默认尺寸为 600px×400px，如果想让图表响应尺寸变化，可以像下面这样
     * 把尺寸设为百分比值（同时请记得为容器设置尺寸）。
     */
    .echarts {
        width: 100%;
        height: 100%;
    }
</style>

<script >
    import ECharts from 'vue-echarts'
    import 'echarts/lib/chart/line'
    import 'echarts/lib/component/polar'
    export default {
        components: {
            'v-chart': ECharts
        },
        data () {
            return {
                polar: {
                    title : {
                        text: '会员数据统计',
                        subtext: '动态数据',
                        x:'center'
                    },
                    tooltip : {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: {
                        show: true,
                        orient: 'vertical',
                        left: 'left',
                        data: ['微信访问','公众号访问','扫码进入','分享进入','搜索访问']
                    },
                    series : [
                        {
                            name: '访问来源',
                            type: 'pie',
                            radius : '55%',
                            center: ['50%', '60%'],
                            data:[
                                {value:335, name:'微信访问'},
                                {value:310, name:'公众号访问'},
                                {value:234, name:'扫码进入'},
                                {value:135, name:'分享进入'},
                                {value:1548, name:'搜索访问'}
                            ],
                            itemStyle: {
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        }
                    ]
                }
            }
        }
    }
</script>
