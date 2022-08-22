export default {
  title: 'VitePress',
  description: 'Just Playing around.',
  base: '/vite_docs/',
  lastUpdated: true,
  themeConfig: {
    siteTitle: 'My VitePress',
    nav: [
      { text: 'Article', link: '/article/Q&A1', activeMatch: '/article/' },
      { 
        text: 'Course Notes',
        items: [
          { text: 'Computer Basics', link: '/courses/Lecture1' }
      ]
     },
      {
        text: 'Notes',
        items: [
          { text: 'HTML', link: '/html/introduce' },
          { text: 'CSS', link: '/css/Add-style' },
          { text: 'JavaScript', link: '/js/Overview' }
        ]
      }
    ],
    sidebar: {
      '/article/':[
        {
          text: 'Q&A',
          collapsible: true,
          items: [
            { text: '30 岁了， 现在开始努力，晚吗?', link: '/article/Q&A1' }
          ]
        },
      ],
      '/courses/': [
        {
          text: 'Computer Basics',
          collapsible: true,
          items: [
            { text: 'Lecture1', link: '/courses/Lecture1' }
          ]
        }
      ],
      '/html/': [
        {
          text: 'HTML',
          collapsible: true,
          items: [
            { text: 'Introduce', link: '/html/introduce' }, 
            { text: 'First page', link: '/html/First-page' }, 
            { text: 'Semantic', link: '/html/Semantic' },
            {text: 'Text element', link: '/html/Text-element' },
            {text: 'HTML Entity', link: '/html/HTML-Entity' },
            {text: 'a element', link: '/html/a-element' },
            {text: 'path', link: '/html/path' },
            {text: 'img element', link: '/html/img-element' },
            {text: 'multimedia element', link: '/html/multimedia-element' },
            {text: 'list element', link: '/html/list-element' },
            {text: 'Container element', link: '/html/Container-element' },
            {text: 'element relation', link: '/html/element-relation' },
            {text: 'iframe element', link: '/html/iframe-element' },
            {text: 'flash', link: '/html/flash' },
            {text: 'form element', link: '/html/form-element' },
            {text: 'Beautify the form', link: '/html/Beautify-the-form' },
            {text: 'table', link: '/html/table' },
            {text: 'other element', link: '/html/other-element' }
          ]
        }
      ],
      '/css/': [
        {
          text: 'CSS',
          collapsible: true,
          items: [
            { text: 'Add style', link: '/css/Add-style' },
            { text: 'Style declaration', link: '/css/Style-declaration' },
            { text: 'Selector', link: '/css/Selector' },
            { text: 'Cascade', link: '/css/Cascade' },
            { text: 'Attribute calculation', link: '/css/Attribute-calculation' },
            { text: 'Box model', link: '/css/Box-model' },
            { text: 'Box model application', link: '/css/Box-model-application' },
            { text: 'Inline block', link: '/css/Inline-block' },
            { text: 'Regular flow', link: '/css/Regular-flow' },
            { text: 'Float', link: '/css/Float' },
            { text: 'Position', link: '/css/Position' },
            { text: 'More selectors', link: '/css/More-selectors' },
            { text: 'More styles', link: '/css/More-styles' },
            { text: '@rule', link: '/css/@rule' },
            { text: 'Body background', link: '/css/Body-background' },
            { text: 'Vertical align', link: '/css/Vertical-align' },
            { text: 'Reference line', link: '/css/Reference-line' },
            { text: 'Stacking context', link: '/css/Stacking-context' },
            { text: 'svg', link: '/css/svg' },
            { text: 'Data URL', link: '/css/Data-URL' },
            { text: 'Browser compatibility', link: '/css/Browser-compatibility' },
            { text: 'Centered summary', link: '/css/Centered-summary' },
            { text: 'Style supplement', link: '/css/Style-supplement' }
          ]
        }
      ],
      '/js/': [
        {
          text: 'JavaScript',
          collapsible: true,
          items: [
            { text: 'Overview', link: '/js/Overview' },
            { text: 'First JS program', link: '/js/First-JS-program' },
            { text: 'Data types', link: '/js/Data-types' },
            { text: 'Variable', link: '/js/Variable1' },
            { text: 'Variable&Object', link: '/js/Variable&Object' },
            { text: 'Reference type', link: '/js/Reference-type' },
            { text: 'Operator', link: '/js/Operator' },
            { text: 'Arithmetic Operator', link: '/js/Arithmetic-Operator' },
            { text: 'Increase & decrease', link: '/js/Increase&decrease' },
            { text: 'Logical Operators', link: '/js/Logical-Operators' },
            { text: 'Supplementary', link: '/js/Supplementary' },
            { text: 'Digital storage', link: '/js/Digital-storage' },
            { text: 'Bit operation', link: '/js/Bit-operation' },
            { text: 'Remainder operation', link: '/js/Remainder-operation' },
            { text: 'flow chart', link: '/js/flow-chart' },
            { text: 'if', link: '/js/if' },
            { text: 'switch', link: '/js/switch' },
            { text: 'cycle', link: '/js/cycle' },
            { text: 'Array', link: '/js/Array' },
            { text: 'Function', link: '/js/Function' },
            { text: 'Scope Closure', link: '/js/Scope-Closure' },
            { text: 'Function & this', link: '/js/Function-this' },
            { text: 'Constructor', link: '/js/Constructor' },
            { text: 'Function essence', link: '/js/Function-essence' },
            { text: 'Recursion', link: '/js/Recursion' },
            { text: 'Standard library', link: '/js/Standard-library' },
            { text: 'Array constructor', link: '/js/Array-constructor' },
            { text: 'Wrapper', link: '/js/Wrapper' },
            { text: 'Math', link: '/js/Math' },
            { text: 'Date', link: '/js/Date' },
            { text: 'Regular expression', link: '/js/Regular-expression' },
            { text: 'Error handling', link: '/js/Error-handling' },
            { text: 'Web API', link: '/js/Web-API' },
            { text: 'DOM get node', link: '/js/DOM1' },
            { text: 'DOM element manipulation', link: '/js/DOM2' },
            { text: 'DOM style', link: '/js/DOM3' },
            { text: 'DOM events', link: '/js/DOM4' },
            { text: 'Event registration', link: '/js/Event-registration' },
            { text: 'Event object', link: '/js/Event-object' },
            { text: 'Mouse events', link: '/js/Mouse-events' },
            { text: 'Keyboard events', link: '/js/Keyboard-events' },
            { text: 'Other events', link: '/js/Other-events' },
            { text: 'Element position', link: '/js/Element-position' },
            { text: 'Timer', link: '/js/Timer' },
            { text: 'Window', link: '/js/Window' },
            { text: 'Prototype', link: '/js/Prototype' },
            { text: 'Prototype Application', link: '/js/Prototype2' },
            { text: 'Attribute descriptor', link: '/js/Attribute-descriptor' },
            { text: 'Execution context', link: '/js/Execution-context' },
            { text: 'Scope chain', link: '/js/Scope-chain' },
            { text: 'Event loop', link: '/js/Event-loop' },
            { text: 'Object method', link: '/js/Object-method' },
            { text: 'Debounce & throttle', link: '/js/Debounce-throttle' },
            { text: 'Curry', link: '/js/Curry' },
            { text: 'Pipeline Function', link: '/js/Pipeline-Function' },
          ]
        }
      ],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You'
    },
    algolia: {
      appId: '8J64VVRP8K',
      apiKey: 'a18e2f4cc5665f6602c5631fd868adfd',
      indexName: 'vitepress'
    },
    lastUpdatedText: 'Updated Date',
    docFooter: {
      prev: 'Pagina prior',
      next: 'Proxima pagina'
    }
  }
}
