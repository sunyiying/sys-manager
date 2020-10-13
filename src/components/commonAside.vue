<template>
<el-menu default-active="2" class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" :collapse="isCollapse">
    <el-menu-item :index="item.path" v-for="item in noChild" :key="item.path" @click="clickMenu(item)">
        <i :class="'el-icon-'+item.icon"></i>
        <span slot="title">{{ item.label }}</span>
    </el-menu-item>

    <el-submenu :index="item.path" v-for="(item,index) in hasChild" :key="index">
        <template slot="title">
            <i :class="'el-icon-'+item.icon"></i>
            <span>{{item.label}}</span>
        </template>
        <el-menu-item-group>
            <el-menu-item :index="subItem.path" v-for="(subItem,subIndex) in item.children" :key="subIndex" @click="clickMenu(subItem)">{{subItem.label}}</el-menu-item>
        </el-menu-item-group>
    </el-submenu>
</el-menu>
</template>

<script>
export default {
    data() {
        return {
            asideMenu: [{
                    path: "/",
                    label: "首頁",
                    name: "home",
                    icon: "s-home"
                },
                {
                    path: "/video",
                    label: "视频管理",
                    name: "video",
                    icon: "video-play"
                },
                {
                    path: "/user",
                    label: "用戶管理",
                    name: "user",
                    icon: "user"
                },
                {
                    label: "其它",
                    icon: "setting",
                    path: "",
                    children: [{
                            path: "/page1",
                            label: "页面1",
                            name: "page1",
                            icon: "setting"
                        },
                        {
                            path: "/page2",
                            label: "页面2",
                            name: "page2",
                            icon: "setting"
                        }
                    ]
                }
            ]
        };
    },
    computed: {
        hasChild() {
            return this.asideMenu.filter(item => item.children);
        },
        noChild() {
            return this.asideMenu.filter(item => !item.children);
        },
        isCollapse() {
            return this.$store.state.tab.isCollapse;
        }
    },
    methods: {
        clickMenu(item) {

            if (this.$route.name !== item.name)
                this.$router.push({
                    name: item.name
                });
            this.$store.commit("selectMenu", item);
        }
    }
};
</script>

<style lang="scss" scoped>
.el-menu {
    height: 100%;
    border: none;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}
</style>
