<template>
    <div :class="className" :style="{width: '350px', height: '350px'}" />
</template>

<script>
    import echarts from 'echarts'
    require('echarts/theme/macarons') // echarts theme
    export default {
        props: {
            className: {
                type: String,
                default: 'chart'
            },
            width: {
                type: String,
                default: '100%'
            },
            height: {
                type: String,
                default: '300px'
            }
        },
        data() {
            return {
                chart: null,
                name:[],
            }
        },
        mounted() {
            this.$nextTick(() => {
                this.initChart()
            })
        },
        beforeDestroy() {
            if (!this.chart) {
                return
            }
            this.chart.dispose()
            this.chart = null
        },
        methods: {
            initChart() {
               const that=this;
                this.chart = echarts.init(this.$el, 'macarons')
                this.$axios.get('findAllLab').then((res)=>{
                    // console.log(res.data.data);
                    const labList=res.data.data.labList
                    this.name=labList.map(obj=>{
                        return obj.name;
                    });
                    // console.log(that.name)
                    that.chart.setOption({
                        tooltip: {
                            trigger: 'item',
                            formatter: '{a} <br/>{b} : {c} ({d}%)'
                        },
                        legend: {
                            left: 'center',
                            bottom: '10',
                            data: that.name,
                        },
                        series:[{
                            name:'WEEKLY WRITE ARTICLES',
                            type: 'pie',
                            roseType: 'radius',
                            radius: [15, 95],
                            center: ['50%', '38%'],
                            data:labList
                        }],
                        animationEasing: 'cubicInOut',
                        animationDuration: 2600
                    })
                })
            }
        }
    }
</script>
