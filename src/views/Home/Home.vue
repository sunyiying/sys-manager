<template>
    <el-row class="home">
        <el-col :span=8>
            <el-card shadow="hover" style="height: 290px;">
                <div class="user">
                    <img :src="userImg" alt=""/>
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
                鼠标悬浮显示
            </el-card>
        </el-col>
        <el-col :span=16>
            <div class="num">
                <el-card shadow="hover" v-for="item in countData" :key="item.name" :body-style="{display:'flex',padding:0}">
                    <i class="icon" :class="`el-icon-${item.icon}`" :style="{background:item.color}" > </i>
                    <div class="detail">
                        <p class="num">￥{{ item.value }}</p>
                        <p class="txt">{{ item.name }}</p>
                    </div>
                </el-card>
            </div>
            <el-card shadow="hover">
                <div style="height: 280px;">
                    鼠标悬浮显示
                </div>
            </el-card>
            <div class="graph" style="height: 260px;margin-top: 20px;">
                <el-card shadow="hover">
                    鼠标悬浮显示
                </el-card>
                <el-card shadow="hover">
                    鼠标悬浮显示
                </el-card>
            </div>
        </el-col>
    </el-row>

</template>
<script>
    export default {
        data() {
            return {
                userImg: require('../../assets/images/bird.jpg'),
                countData:[
                    {
                        name:'今天支付订单',
                        value:1234,
                        icon:'success',
                        color:'#2ec709'
                    },
                    {
                        name:'今天收藏订单',
                        value:345,
                        icon:'success',
                        color:'#2ec709'
                    },
                    {
                        name:'今天未支付订单',
                        value:124,
                        icon:'success',
                        color:'#2ec709'
                    },
                    {
                        name:'本月支付订单',
                        value:1234,
                        icon:'success',
                        color:'#2ec709'
                    },
                    {
                        name:'本月收藏订单',
                        value:345,
                        icon:'success',
                        color:'#2ec709'
                    },
                    {
                        name:'本月未支付订单',
                        value:444,
                        icon:'success',
                        color:'#2ec709'
                    },
                ]
            }
        },
        mounted() {
            this.$http.get('/home/getData').then(res => {
                console.log(res.code);
                console.log(res.data);
            })
        }
    }
</script>
<style lang="scss" scoped>
    @import "~@/assets/scss/home";

    .num {
        .el-card {}
    }
</style>