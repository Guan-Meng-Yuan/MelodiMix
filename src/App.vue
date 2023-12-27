<template>
  <NConfigProvider :theme="themeValue" :theme-overrides="isDark ? darkThemeOverride : lightThemeOverride">
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
  themeValue.value = isDark.value ? darkTheme : null
})
const darkThemeOverride: GlobalThemeOverrides = {
  DataTable: {
    thColor: null,
    thColorHover: null,
    thColorHoverModal: null,
    thColorHoverPopover: null,
    borderColor: null,
    thButtonColorHover: null,
  },
  Layout: {
    footerColor: 'rgb(24, 24, 28)',

  }
}
const lightThemeOverride: GlobalThemeOverrides = {
  DataTable: {
    thColor: null,
    thColorHover: null,
    thColorHoverModal: null,
    thColorHoverPopover: null,
    borderColor: null,
    thButtonColorHover: null,
  },
  Layout: {
    footerColor: 'white',

  }
}
</script>


<style></style>
