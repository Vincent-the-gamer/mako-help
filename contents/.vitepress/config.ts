import { defineConfig } from 'vitepress'
import { docsConfig } from "./docs"
import { zhHansConfig } from './configs/zh_hans'

export default defineConfig({
  base: "./",
  ...docsConfig,
  themeConfig: {
    search: {
      provider: "local",
      options: {
        locales: {
          zh_hans: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    },
  },
  head: [
    ['link', { rel: 'icon', href: '/logo/mako.png' }],
  ],
  locales: {
    root: {
      label: "简体中文",
      lang: "zh_hans",
      link: "/",
      ...zhHansConfig
    }
  }
})
