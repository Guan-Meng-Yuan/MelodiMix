<template>
    <div>
        <NH1>本地歌曲</NH1>
        <NDataTable>
            <template #empty>
                <NEmpty size="huge" description="还没有本地歌曲">
                    <template #icon>
                        <div i-solar:music-library-2-broken></div>
                    </template>
                    <template #extra>
                        <NButtonGroup>
                            <NButton @click="addLocalMusic">添加本地音乐</NButton>
                            <NButton>添加本地文件夹</NButton>
                        </NButtonGroup>
                    </template>
                </NEmpty>
            </template>
        </NDataTable>
    </div>
</template>
<script setup lang="ts">
import { dialog } from 'electron'

const addLocalMusic = async () => {
    dialog.showOpenDialogSync({

    })
}
</script>
<style scope></style>