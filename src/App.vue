<template>
  <NConfigProvider :theme="themeValue" :theme-overrides="themeOverrides">
    <NGlobalStyle />
    <Layout>
      <RouterView />
    </Layout>
  </NConfigProvider>
</template>
<script setup lang="ts">
import { darkTheme, GlobalThemeOverrides } from 'naive-ui';
const isDark = useDark();
const themeValue = ref()
watchEffect(() => {
  console.log(isDark.value);
  themeValue.value = isDark.value ? darkTheme : null
})
const themeOverrides: GlobalThemeOverrides = {
  DataTable: {
    thColor: null,
    thColorHover: null,
    thColorHoverModal: null,
    thColorHoverPopover: null,
    borderColor: null,
    thButtonColorHover: null,
  }
}
</script>


<style></style>
