<template>
    <el-container style="height: 100%;">
        <el-aside width="auto">
            <common-aside></common-aside>
        </el-aside>
        <el-container>
            <el-header>
                <common-header></common-header>                
            </el-header>
            <common-tab></common-tab>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>
<script>

    import CommonHeader from "../components/commonHeader";
    import CommonAside from "../components/commonAside";
    import CommonTab from "../components/commonTab"
    export default {
        components: {
            CommonHeader,
            CommonAside,
            CommonTab
        },
    }
</script>
<style lang="scss" scoped>
    .el-header{
        background-color: #333;
    }
</style>