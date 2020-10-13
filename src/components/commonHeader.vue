<template>
<header>
    <div class="l-content">
        <el-button type="plain" icon="el-icon-menu" size="mini" @click="closeMenu"></el-button>
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="current.path" v-if="current!=null">
                {{current.label}}
            </el-breadcrumb-item>
        </el-breadcrumb>
    </div>
    <div class="r-content">
        <el-dropdown trigger="click">
            <span class="el-dropdown-link">
                <img :src="userImg" alt="" />
            </span>
            <el-dropdown-menu slot="dropdown" size="mini">
                <el-dropdown-item>个人中心</el-dropdown-item>
                <el-dropdown-item>退出</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>

    </div>

</header>
</template>

<script>
import {
    mapState
} from 'vuex'
export default {
    computed: {
        ...mapState({
            current: state => state.tab.currentMenu
        })
    },
    data() {
        return {
            userImg: require("../assets/images/bird.jpg"),
        }
    },
    methods: {
        closeMenu() {
            this.$store.commit("closeMenu");
        }
    },
}
</script>

<style lang="scss" scoped>
header {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: space-between;
}

.l-content {
    display: flex;
    align-items: center;

    .el-button {
        margin-right: 20px;
    }
}

.r-content {
    img {
        border-radius: 50%;
        width: 40px;
        height: 40px;
    }
}
</style><style lang="scss">
.el-breadcrumb__item {
    .el-breadcrumb__inner {
        columns: #666666;
        font-weight: normal;
    }

    &:last-child {
        .el-breadcrumb__inner {
            color: #fff;
        }
    }
}
</style>
