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
                        <div>
                            <NButton size="small" mr-2 @click="addLocalMusic">添加本地音乐</NButton>
                            <NButton size="small">添加本地文件夹</NButton>
                            <NButton size="small" @click="play">播放</NButton>

                        </div>
                    </template>
                </NEmpty>

            </template>
        </NDataTable>
    </div>
</template>
<script setup lang="ts">
import * as remote from '@electron/remote'
import * as mm from 'music-metadata';
import { Howl, Howler } from 'howler'
const play = () => {
    let sound = new Howl({
        src: ['a.mp3'],
        html5: true,
        preload: true,
    });

    sound.play();
}
const addLocalMusic = async () => {
    const window = remote.getCurrentWindow()
    const fileList = remote.dialog.showOpenDialogSync(window, {
        title: '选择歌曲',
        buttonLabel: '选择',
        properties: ['multiSelections', 'openFile'],
        filters: [
            {
                extensions: ['AIFF', 'FLAC', 'mp3'],
                name: '音乐文件'
            }
        ]
    })
    console.log(fileList);
    if (fileList) {

        const fileInfo = await mm.parseFile(fileList[0])
        console.log(fileInfo);
        const sound = new Howl({
            src: 'a.mp3',
            volume: 0.5,
            format: ['mp3'],
            onload: (res) => {
                console.log(res);
            },
            onloaderror: (res) => {
                console.log(res);
            },
            onplayerror: (res) => {
                console.log(res);
            },
        })
        console.log(sound);
        sound.play()





    }
}
</script>
<style scope></style>