<template>
<div class="tabs">
    <el-tag size="small" :key="tag.name" v-for="tag in tags" :closable="tag.name!='home'" :disable-transitions="false" @close="handleClose(tag)" @click="clickTag(tag)" :effect="$route.name===tag.name?'dark':'plain'">
        {{tag.label}}
    </el-tag>
</div>
</template>

<script>
// import { mapState, mapMutations } from 'vuex';
import {
    mapState,
    mapMutations
} from 'vuex'
export default {
    computed: {
        ...mapState({
            tags: state => state.tab.tabsList
        })
    },
    data() {
        return {
            dynamicTags: ['标签一', '标签二', '标签三'],
            inputVisible: false,
            inputValue: ''
        };
    },
    methods: {
        ...mapMutations({
            close: 'closeTab'
        }),
        handleClose(tag) {
            this.close(tag);
        },
        clickTag(tag) {
            if (this.$route.name !== tag.name)
                this.$router.push({
                    name: tag.name
                });
            this.$store.commit("selectMenu", tag);
        }
    }
}
</script>

<style lang="scss" scoped>
.tabs {
    padding: 20px;
    cursor: pointer;

    .el-tag {
        margin-left: 2px;
    }
}
</style>
