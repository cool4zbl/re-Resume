# Re-Resume 简历 🤓

### 又一份前端工程师简历

排版良好，具有设计感的响应式在线简历生成器.

## Preview & Demo

See [Resume](http://zhangbinliu.me/resume)

## 原则

- 极简, 无过多依赖. Simplicity matters. Concise, simple, and configurable, without excessive dependence
- 可配置. Configurable.

## 特色

- 响应式，SEO 优化，i18n 支持
- 自动生成 PDF

## 内容结构

See `src/resume/data.json`

## 如何使用

### Local Develop & Customize

0. `npm install`
1. Edit `src/resume/data[_zh].json`， fill the content field
1. `[PORT=xxx] [HOST=xxx] [PUBLIC_PATH=xxx] npm run dev`，then open `localhost:3000/public`
1. Done.

### Build

1. `[PORT=xxx] [HOST=xxx] [PUBLIC_PATH=xxx] npm run build`, then go to the `dist` dir.

### Export PDF

1. `npm run export`, then go to the `download` dir.
