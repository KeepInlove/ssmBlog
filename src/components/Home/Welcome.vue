<template>
    <div class="welcome">
      <cards></cards>
        <div class="echarts_time">
            <!--统计图-->
            <blog-echarts ></blog-echarts>
                <!--日期-->
            <el-card>
                <Char></Char>
            </el-card>
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
    import Char from "../../views/Char";
    export default {
        name: "Welcome",
        components:{
            Cards,
            BlogEcharts,
            Char
        }
    }
</script>

<style scoped lang="less">
    .echarts_time{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
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
