import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "集云",
  description: "集云是一款综合众多云盘服务的手机客户端,目前支持云盘:阿里云盘|百度网盘|SMMS|七牛云|阿里云OSS|腾讯云COS|百度BOS|又拍云|华为云OBS,针对存储空间的功能|新增|删除,针对文件的功能:分享|上传|下载|删除。",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '常见问题', link: '/faq' }
    ],

    sidebar: [
      {
        text: '文章列表',
        items: [
          { text: '常见问题', link: '/faq' },
          { text: '服务协议', link: '/service' },
          { text: '隐私协议', link: '/privacy' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/xiaobingtech/Cloud-Front' }
    ],

    search: {
      provider: 'algolia',
      options: {
        appId: 'WQJP28D58M',
        apiKey: '7c661f6d3094ca6be4a6ba13e32a0021',
        indexName: 'cloud-xiaobingkj'
      }
    }
  }
})
