<template>
    <div w-full flex="~ justify-center  items-center" h-100px>
        <img :src="logoUrl" h-30px w-140px />
    </div>
</template>
<script lang="ts" setup>
const logoUrl = ref('src/assets/logo.jpg')
const isDark = useDark()
watchEffect(() => {
    logoUrl.value = isDark.value ? 'src/assets/logo_dark.jpg' : 'src/assets/logo.jpg'
})

</script>
<style scoped></style>