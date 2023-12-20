<template>
    <div class="drag"></div>
    <NLayout position="absolute" h-100vh has-sider>
        <NLayoutSider :native-scrollbar="false" bordered width="180">
            <NLayoutHeader style="z-index: 99999;" h-10vh position="absolute">
                <Logo w-full mt-2 />
            </NLayoutHeader>
            <NLayoutContent :native-scrollbar="false" position="absolute" style="top: 90px;" h-90vh>
                <div flex="~ col items-center justify-center">
                    <div v-for="index of 100">{{ `侧边菜单${index}` }}</div>
                </div>
            </NLayoutContent>

        </NLayoutSider>
        <NLayout>
            <NLayoutHeader flex="~ items-center" style="z-index: 99999;" h-10vh bordered position="absolute">
                <NButtonGroup>
                    <NButton size="large" text>
                        <template #icon>
                            <div i-iconamoon:arrow-left-2></div>
                        </template>
                    </NButton>
                    <NButton size="large" text>
                        <template #icon>
                            <div i-iconamoon:arrow-right-2></div>
                        </template>
                    </NButton>
                </NButtonGroup>
            </NLayoutHeader>
            <NLayoutContent :native-scrollbar="false" bordered position="absolute" style="top:64px;bottom: 64px;">
                <RouterView />
                <div v-for="index of 100">{{ index }}</div>
            </NLayoutContent>
            <NLayoutFooter h-10vh bordered position="absolute">
                这是底部
            </NLayoutFooter>
        </NLayout>
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