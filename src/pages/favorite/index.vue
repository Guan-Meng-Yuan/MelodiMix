<template>
    <div>
        <NH1>我喜欢</NH1>
        <NTabs size="large" animated>
            <NTabPane name="歌曲">
                <div mr-1 pb-2 flex="~ justify-between">
                    <NButton strong secondary round type="primary">播放全部
                        <template #icon>
                            <div i-line-md:pause-to-play-filled-transition></div>
                        </template>
                    </NButton>
                    <NInput :style="{ width: '28%' }" round clearable placeholder="搜索">
                        <template #prefix>
                            <div i-iconamoon:search-fill></div>
                        </template>
                    </NInput>
                </div>
                <NDataTable :bottom-bordered='false' :columns="columns" :data="data" :bordered="false" w-full>
                </NDataTable>
            </NTabPane>
            <NTabPane name="专辑">喜欢的音乐</NTabPane>
            <NTabPane name="歌单">喜欢的电影</NTabPane>
            <NTabPane name="MV">喜欢的电影</NTabPane>
        </NTabs>
    </div>
</template>
<script setup lang="ts">
import { DataTableColumn } from 'naive-ui';

const columns = ref<DataTableColumn[]>([
    {
        title: '歌曲',
        key: 'name'
    }, {
        title: '歌手',
        key: 'singer',
    }, {
        title: '专辑',
        key: 'album',
    }, {
        title: '时长',
        key: 'duration'
    }

])
const data = ref([
    {
        name: '下雪哈尔滨',
        singer: '高进',
        album: '下雪哈尔滨',
        duration: '03:30'
    }
])
</script>
<style scope></style>