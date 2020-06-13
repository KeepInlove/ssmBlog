<template>
<!--    <v-chart id ='main' ref='main' style="width: 600px;height:400px;" />-->
    <div class="b_echarts">
        <el-card><div id="myChart" :style="{width: '350px', height: '350px'}"></div></el-card>
<!--        <el-card><div id="myChart2" :style="{width: '350px', height: '350px'}"> </div></el-card>-->
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
    .b_echarts{
        display: flex;
        flex-direction: row;
       margin-left: 20px;
    }
    .el-card{
        margin-right: 20px;
    }
</style>

<script >
    import 'echarts/lib/chart/line'
    import 'echarts/lib/component/polar'
    export default {
        name: 'blogEcharts',
        data () {
            return {
            }
        },
        mounted(){
            this.drawLine();
        },
        methods: {
            drawLine(){
                let myChart = this.$echarts.init(document.getElementById('myChart'))
                // 绘制图表
                myChart.setOption({
                    title: { text: '分类博客数量' },
                    tooltip: {},
                    xAxis: {
                        data: ["java","mysql","vue","spring","python"]
                    },
                    yAxis: {},
                    series: [{
                        name: '销量',
                        type: 'bar',
                        data: [5, 20, 36, 10, 10, 20]
                    }]
                });
            }
        },
    }
</script>
