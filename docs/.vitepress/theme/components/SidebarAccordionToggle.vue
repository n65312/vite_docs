<script setup lang="ts">
import { ref } from 'vue'
import { TkThemeEnhanceBaseTemplate, TkSwitch } from 'vitepress-theme-teek/es/components/theme/theme-enhance/index.mjs'
import listIcon from 'vitepress-theme-teek/es/static/icons/theme-enhance/layout.mjs'
import {
  SIDEBAR_ACCORDION_OPTION,
  readSidebarAccordion,
  writeSidebarAccordion,
} from '../accordion.mjs'

const props = defineProps<{ defaultEnabled?: boolean }>()

const checked = ref(readSidebarAccordion(props.defaultEnabled ?? false))

function onChange(value: boolean) {
  checked.value = value
  writeSidebarAccordion(value)
}
</script>

<template>
  <TkThemeEnhanceBaseTemplate
    title="侧栏分组展开模式"
    helper-desc="开启：展开某个分组会自动收起其他已展开的分组；关闭：允许多个分组同时展开。"
    helper
    :icon="listIcon"
    :border-highlight="false"
  >
    <TkSwitch :model-value="checked" @change="onChange" />
  </TkThemeEnhanceBaseTemplate>
</template>
