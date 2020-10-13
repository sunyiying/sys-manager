<template>
<el-row class="home">
    <el-col :span=8>
        <el-card shadow="hover" style="height: 290px;">
            <div class="user">
                <img :src="userImg" alt="" />
                <div class="userInfo">
                    <p class="name">Nick</p>
                    <p class="access">超级管理员</p>
                </div>
            </div>
            <div class="loginInfo">
                <p>上次登录时间：<span>2020-09-13</span></p>
                <p>上次登录地点：<span>北京</span></p>
            </div>

        </el-card>
        <el-card shadow="hover" style="height: 522px;">
            <el-table :data="tableData">
                <el-table-column show-overflow-tooltip v-for="(val,key) in tableLabel" :key="key" :prop="key" :label="val"></el-table-column>
            </el-table>
        </el-card>
    </el-col>
    <el-col :span=16>
        <div class="num">
            <el-card shadow="hover" v-for="item in countData" :key="item.name" :body-style="{display:'flex',padding:0}">
                <i class="icon" :class="`el-icon-${item.icon}`" :style="{background:item.color}"> </i>
                <div class="detail">
                    <p class="num">￥{{ item.value }}</p>
                    <p class="txt">{{ item.name }}</p>
                </div>
            </el-card>
        </div>
        <el-card shadow="hover">
            <echart style="height: 280px;" :chartData="this.echartData.order">
                鼠标悬浮显示
            </echart>
        </el-card>
        <div class="graph" style="height: 260px;margin-top: 20px;">
            <el-card shadow="hover">
                <echart style="height: 260px;" :chartData="this.echartData.user"></echart>
            </el-card>
            <el-card shadow="hover">
                <echart style="height: 260px;" :chartData="this.echartData.video"></echart>
            </el-card>
        </div>
    </el-col>
</el-row>
</template>

<script>
import Echart from '../../components/echart'
export default {
    components: {
        Echart
    },
    data() {
        return {
            userImg: require('../../assets/images/bird.jpg'),
            countData: [{
                    name: '今日支付订单',
                    value: 1234,
                    icon: 'success',
                    color: '#2ec7c9'
                },
                {
                    name: '今日收藏订单',
                    value: 345,
                    icon: 'star-on',
                    color: '#2ec709'
                },
                {
                    name: '今日未支付订单',
                    value: 124,
                    icon: 's-goods',
                    color: '#2ec709'
                },
                {
                    name: '本月支付订单',
                    value: 1234,
                    icon: 'success',
                    color: '#2ec7c9'
                },
                {
                    name: '本月收藏订单',
                    value: 345,
                    icon: 'star-on',
                    color: '#2ec709'
                },
                {
                    name: '本月未支付订单',
                    value: 444,
                    icon: 's-goods',
                    color: '#2ec709'
                },
            ],
            tableData: [],
            tableLabel: {
                "name": "课题",
                "todayBuy": "今日购买",
                "monBuy": "本月购买",
                "totalBuy": "总购买"
            },
            echartData: {
                order: {
                    xData: [],
                    series: []
                },
                user: {
                    xData: [],
                    series: []
                },
                video: {
                    series: []
                }
            }
        }
    },
    methods: {
        getTableData() {
            this.$http.get('/home/getTableData').then(res => {
                console.log(res.data);
                this.tableData = res.data.tableData;
                //订单折线图
                const order = res.data.orderData;
                this.echartData.order.xData = order.date;
                //取出键名，
                let keyArray = Object.keys(order.data[0]);
                keyArray.forEach(k => {
                    this.echartData.order.series.push({
                        name: k == 'wechat' ? '小程序' : k,
                        data: order.data.map(item => item[k]),
                        type: 'line',
                    });
                });

                //柱状图
                this.echartData.user.xData = order.date;
                keyArray.forEach(k => {
                    this.echartData.user.series.push({
                        name: k == 'wechat' ? '小程序' : k,
                        data: order.data.map(item => item[k]),
                        type: 'bar',
                    });
                });
                //饼状图
                keyArray.forEach(k => {
                    this.echartData.video.series.push({
                        name: k == 'wechat' ? '小程序' : k,
                        data: order.data.map(item => item[k]),
                        type: 'pie',
                    });
                });
                console.log('pie', this.echartData.video.series);
            });
        }
    },
    mounted() {
        // this.$http.get('/home/getData').then(res => {
        //     // console.log(res.data);
        // })
    },
    created() {
        this.getTableData();
    }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/home";

.num {
    .el-card {}
}
</style>
