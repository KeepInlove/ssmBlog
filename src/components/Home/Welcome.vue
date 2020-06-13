<template>
    <div class="welcome">
      <cards></cards>

        <div class="echarts_time">
            <!--统计图-->
            <blog-echarts ></blog-echarts>
                <!--日期-->
             <el-calendar class="time-table" >
                 <template slot="dateCell" slot-scope="{date, data}">
                  <p :class="data.isSelected ? 'is-selected' : ''">
                    {{ data.day.split('-').slice(1).join('-') }} {{ data.isSelected ? '✔️' : ''}}
                 </p>
             </template>
         </el-calendar>
        </div>
    </div>
</template>

<script>
    import Cards from "./Welcomes/Cards";
    import BlogEcharts from "./Welcomes/BlogEcharts";
    export default {
        name: "Welcome",
        components:{
            Cards,
            BlogEcharts
        }
    }
</script>

<style scoped lang="less">
    .echarts_time{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    /*.b_echarts{*/
    /*    float: left;*/
    /*}*/
    /*时间表样式*/
    .time-table{
        font-size: 15px;
        width: 500px;
        height: 0;
    }
    .is-selected {
        color: #1989FA;
    }
    .welcome {
        width: 100%;
    }
    .panel-group {
        margin-top: 18px;

        .card-panel-col {
            margin-bottom: 32px;
        }

        .card-panel {
            height: 108px;
            cursor: pointer;
            font-size: 12px;
            position: relative;
            overflow: hidden;
            color: #666;
            background: #fff;
            box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
            border-color: rgba(0, 0, 0, .05);

            &:hover {
                .card-panel-icon-wrapper {
                    color: #fff;
                }

                .icon-people {
                    background: #40c9c6;
                }

                .icon-message {
                    background: #36a3f7;
                }

                .icon-money {
                    background: #f4516c;
                }

                .icon-shopping {
                    background: #34bfa3
                }
            }

            .icon-people {
                color: #40c9c6;
            }

            .icon-message {
                color: #36a3f7;
            }

            .icon-money {
                color: #f4516c;
            }

            .icon-shopping {
                color: #34bfa3
            }

            .card-panel-icon-wrapper {
                float: left;
                margin: 14px 0 0 14px;
                padding: 16px;
                transition: all 0.38s ease-out;
                border-radius: 6px;
            }

            .card-panel-icon {
                float: left;
                font-size: 48px;
            }

            .card-panel-description {
                float: right;
                font-weight: bold;
                margin: 26px;
                margin-left: 0px;

                .card-panel-text {
                    line-height: 18px;
                    color: rgba(0, 0, 0, 0.45);
                    font-size: 16px;
                    margin-bottom: 12px;
                }

                .card-panel-num {
                    font-size: 20px;
                }
            }
        }
    }

    @media (max-width:550px) {
        .card-panel-description {
            display: none;
        }

        .card-panel-icon-wrapper {
            float: none !important;
            width: 100%;
            height: 100%;
            margin: 0 !important;

            .svg-icon {
                display: block;
                margin: 14px auto !important;
                float: none !important;
            }
        }
    }
</style>
