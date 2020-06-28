<template>
    <div class="b_echarts">
        <el-card><div id="myChart" :style="{width: '350px', height: '350px'}"></div></el-card>
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
                name:[],
                // data:[]
                // labList:[]
            }
        },
        mounted(){
            this.drawLine();
            this.getData();
        },
        methods: {
            drawLine(){
                let myChart = this.$echarts.init(document.getElementById('myChart'));
                // 绘制图表
                // myChart.setOption({
                //     title: { text: '分类博客数量' },
                //     tooltip: {},
                //     xAxis: {
                //         data: ['']
                //     },
                //     yAxis: {},
                //     series: [{
                //         name: '数量',
                //         type: 'bar',
                //         data: ['']
                //     }]
                // });
                this.$axios.get('findAllLab').then((res) => {
                    // console.log(res);
                    // console.log(res.data.data.labList.name)
                    const labList=res.data.data.labList
                    this.name=labList.map(obj=>{
                        return obj.name;
                    });
                    // console.log(this.name);
                    myChart.setOption({
                        tooltip: {},
                        title: { text: '分类博客数量' },
                        xAxis: {
                            data:this.name,
                            axisLabel:{
                                interval:0,
                                rotate:-30,
                            }
                        },
                        legend: {},
                        yAxis: {},
                        series: [{
                            name: '数量',
                            type: 'bar',
                            data: res.data.data.labList
                        }]
                    })
                });

            },
            getData(){

            }
        },
    }
</script>
