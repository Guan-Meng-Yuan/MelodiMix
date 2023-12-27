<template>
    <div class="drag"></div>
    <NLayout position="absolute" h100vh has-sider>
        <NLayoutSider collapse-mode="width" :native-scrollbar="false" :collapsed-width="60" :width="200">
            <Logo />
            <NMenu ref="menu" :options="menus"></NMenu>
        </NLayoutSider>
        <NLayout>
            <NLayoutHeader flex="~ items-center" h-50px style="z-index: 100;" position="absolute">
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
            <NLayoutContent p4 :native-scrollbar="false" position="absolute" pr10 style="top:50px;bottom: 80px;">
                <slot />
            </NLayoutContent>
            <NLayoutFooter pb5 h-80px position="absolute">
                <NProgress processing :height="2" :percentage="20" status="success" :border-radius="0" type="line"
                    :show-indicator="false" />
            </NLayoutFooter>
        </NLayout>


    </NLayout>
</template>
<script lang="ts" setup>
import { MenuGroupOption, MenuOption } from 'naive-ui';
import { RouterLink } from 'vue-router';
const currentAudioName = ref('')

const menus = ref<MenuOption[] | MenuGroupOption[]>([
    {
        type: 'group',
        label: '我的音乐',
        key: '1',
        children: [
            {
                label: () =>
                    h(RouterLink, { to: { name: 'favorite' } }, { default: () => '我喜欢' }),
                key: '2',
                icon: () => h('div', { class: 'i-solar:heart-pulse-bold-duotone' })

            }, {
                label: () =>
                    h(RouterLink, { to: { name: 'like' } }, { default: () => '测试歌单' }),
                key: '3',
                icon: () => h('div', { class: 'i-line-md:heart-filled' })
            }
        ]
    }
])
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