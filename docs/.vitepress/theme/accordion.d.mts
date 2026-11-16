export interface AccordionGroupState {
  isActive: boolean
  isCollapsed: boolean
  el?: Element
}

/** VitePress Router 的路由钩子为单回调属性，非注册方法，无解绑返回值。 */
export interface AccordionRouter {
  state?: Record<string, unknown>
  onAfterPageLoad?: (to: string) => void | Promise<void>
}

export declare const SIDEBAR_ACCORDION_OPTION: 'sidebarAccordion'
export declare const SIDEBAR_ACCORDION_STORAGE_KEY: 'tk:sidebar-accordion'
export declare const SIDEBAR_ACCORDION_CHANGE_EVENT: 'tk:sidebar-accordion-change'
export declare const SIDEBAR_ACCORDION_ROUTE_FLAG: 'tk:sidebar-accordion-route'
export declare const SIDEBAR_TITLE_ROUTE_FLAG: 'tk:sidebar-title'

export declare function readSidebarAccordion(defaultValue?: boolean): boolean
export declare function writeSidebarAccordion(value: boolean): void

/** 把回调追加到 onAfterPageLoad 尾部，保留原回调；按 stateFlag 防重复绑定。 */
export declare function bindAfterPageLoad(
  router: AccordionRouter | null | undefined,
  stateFlag: string,
  callback: (to: string) => void | Promise<void>
): void

export declare function pickGroupsToCollapse(
  groups: AccordionGroupState[] | null | undefined,
  enabled: boolean,
  keepIndices?: number[]
): number[]

export declare function readSidebarGroups(
  root: ParentNode | null | undefined
): Array<AccordionGroupState & { el: Element }>

export declare function attachSidebarAccordion(options?: {
  router?: AccordionRouter | null
  isEnabled?: () => boolean
}): () => void
