<template>
    <div class="drag"></div>
    <NLayout position="absolute" h-100vh has-sider>
        <n-layout-sider :native-scrollbar="false" bordered width="200">
            <div v-for="index of 100">这是左侧菜单{{ index }}</div>
        </n-layout-sider>
        <n-layout>
            <n-layout-header style="z-index: 99999;" h-64px bordered position="absolute">
                <div>这是头部</div>
            </n-layout-header>
            <n-layout-content :native-scrollbar="false" bordered position="absolute" style="top:64px;bottom: 64px;">
                <RouterView />
                <div v-for="index of 100">{{ index }}</div>
            </n-layout-content>
            <n-layout-footer h-64px bordered position="absolute">
                这是底部
            </n-layout-footer>
        </n-layout>
    </NLayout>
</template>
<script lang="ts" setup>

</script>
<style scoped >
.drag {
    -webkit-app-region: drag;
    z-index: 1000;
    width: 100vw;
    height: 10vh;
    position: absolute;
}
</style>
```