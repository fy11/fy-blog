//配置网站标题和描述利于SEO
module.exports={
title:'测试文档',
description:'测试1',
theme: 'reco',
base: '/fy-blog/',
//语言
locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
themeConfig:{
    subSidebar: 'auto',
    //顶部导航栏
    nav:[
        { text: '首页', link: '/' },
        { 
            text: 'fy的博客', 
            items: [
                { text: 'Github', link: 'https://github.com/mqyqingfeng' },
                { text: '掘金', link: 'https://juejin.cn/user/712139234359182/posts' }
            ]
        }   
    ],
    //侧边栏
    sidebar: [
        {
            title: '欢迎学习',
            path: '/',
            collapsable: false, // 不折叠
            children: [
                { title: "学前必读", path: "/" }
            ]
        },
        {
          title: "基础学习",
          path: '/handbook/ConditionalTypes',
          collapsable: false, // 不折叠
          children: [
            { title: "条件类型", path: "/handbook/ConditionalTypes" },
            { title: "泛型", path: "/handbook/Generics" }
          ],
        }
      ]
}

}