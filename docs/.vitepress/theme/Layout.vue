<script lang="ts">
import { defineComponent, h } from 'vue'
import { useData } from 'vitepress'
import { TkLayout } from 'vitepress-theme-teek'
import SidebarAccordionToggle from './components/SidebarAccordionToggle.vue'
import { SIDEBAR_ACCORDION_OPTION } from './accordion.mjs'

export default defineComponent({
  name: 'SiteLayout',
  setup(_, { slots }) {
    const { theme } = useData()
    const isEnabled = () => (theme.value as Record<string, unknown>)[SIDEBAR_ACCORDION_OPTION] === true

    return () => h(TkLayout, null, {
      ...slots,
      'teek-theme-enhance-top': () => [
        slots['teek-theme-enhance-top']?.({}),
        h(SidebarAccordionToggle, { defaultEnabled: isEnabled() }),
      ],
    })
  },
})
</script>
