# 简历 🤓
### 又一份前端工程师简历

一键生成排版良好，具有设计感, 多种风格和配色的程序员在线简历模板。

Preview
![补截图]()

## 特色： Feature:
1. 简单、简洁，仅仅就是一个简历模板生成器。Just a resume template.
2. 排版良好，多种风格切换
3. 支持基本的代码高亮和 Markdown 粗体、斜体语法
4. 原子化组件，方便各种自定义配置
5. SEO 优化


## 如何使用
1. 编辑 `src/Me/index.js`， 按字段名称填写对应内容
2. `yarn start`，打开你的浏览器 `localhost:3000`
3. Done.


## Customize
- `src/typography/Typography/index.js`，可以覆盖原生样式
- `src/components/themes/default.js`，可以修改主题配色

简历内容结构如下
```
bio contains:

    name : string
    role : string
    contacts : an object with
          mobile: string
          email: string
          github: string
          twitter: string (optional)
          location: string
    welcomeMessage: string
    skills: array of strings
    biopic: string url
    display: function taking no parameters


education contains:

    schools: array of objects with
         name: string
         location: string
         degree: string
         majors: array of strings
         dates: string (works with a hyphen between them)
         url: string
    onlineCourses: array of objects with
         title: string
         school: string
         dates: string (works with a hyphen between them)
         url: string
    display: function taking no parameters


work contains

    jobs: array of objects with
         employer: string
         title: string
         location: string
         dates: string (Can be 'in progress')
         description: string
    display: function taking no parameters


projects contains:

    projects: array of objects with
          title: string
          dates: string (works with a hyphen between them)
          description: string
          images: array with string urls
    display: function taking no parameters
```

## 技术栈
- 排版主题 Typography / Typography-theme-code
- React / React-Router
- Webpack2 / Webpack-blocks
- styled-components
- normalizr
- Storybook

## 开发
### 0. Install
`yarn install`

### 1. Dev
`[PORT=xxx] [HOST=xxx] [PUBLIC_PATH=xxx] yarn start`

### 2. Build
`[PORT=xxx] [HOST=xxx] [PUBLIC_PATH=xxx] yarn build`


---
#### Based on [Rocket 🚀](https://github.com/cool4zbl/rocket)
