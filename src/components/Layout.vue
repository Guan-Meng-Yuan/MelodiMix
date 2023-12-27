<template>
    <div class="drag"></div>
    <NLayout position="absolute" h-100vh has-sider>
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
            <NLayoutContent p4 :native-scrollbar="false" position="absolute" pr10 style="top:50px;bottom: 100px;">
                <slot />
            </NLayoutContent>
            <NLayoutFooter pl4 pr4 pb5 h-100px position="absolute">
                <AudioPlayer ref="audioPlayer" :audio-list="audioList.map(elm => elm.url)" theme-color="#ff2929" />
            </NLayoutFooter>
        </NLayout>
    </NLayout>
</template>
<script lang="ts" setup>
import { MenuGroupOption, MenuOption } from 'naive-ui';
import { RouterLink } from 'vue-router';
import AudioPlayer from '@liripeng/vue-audio-player'
const currentAudioName = ref('')
const audioList = [
    {
        name: 'audio1',
        url: 'https://www.0dutv.com/upload/dance/F25F74A0B8FF82503241801D0E2CA5CD.mp3'
    },
    {
        name: 'audio2',
        url: 'https://www.0dutv.com/upload/dance/20200316/C719452E3C7834080007662021EA968E.mp3'
    }
]
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