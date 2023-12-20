<template>
  <NConfigProvider :theme="themeValue">
    <NGlobalStyle />
    <RouterView />
  </NConfigProvider>
</template>
<script setup lang="ts">
import { darkTheme } from 'naive-ui';
const isDark = useDark();
const themeValue = ref()
watchEffect(() => {
  console.log(isDark.value);
  themeValue.value = isDark.value ? darkTheme : null
})
</script>


<style></style>
