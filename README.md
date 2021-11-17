# re-Resume 🤓

**v2 is coming out, with a breaking change especially in design.**

Yet another responsive resume template-builder with good typography and design sense.
Simple but useful.
Instant resume with no config!

## Preview & Demo

See [Resume](http://zhangbinliu.me/resume)

## Design Principles

- 极简, 无过多依赖. Simplicity matters. Concise, simple, and configurable, without excessive dependence
- 可配置. Configurable.

## Features

- Responsive
- Intl supported
- Auto export PDF
- SEO optimization
- Easy deploy with github pages

## Content Structure

See `src/resume/data.json` or go to https://jsonresume.org/schema/

## Usage

### Local Develop & Customize

0. `npm install`
1. Edit `src/resume/data[_zh].json`， fill the content field
1. `[PORT=xxx] [HOST=xxx] [PUBLIC_PATH=xxx] npm run dev`，then open `localhost:3000/public`
1. Done.

### Build

1. `[PORT=xxx] [HOST=xxx] [PUBLIC_PATH=xxx] npm run build`, then go to the `dist` dir.

### Export PDF

1. `npm run export`, then go to the `download` dir.

## Tech Stack

- react
- typescript
- webpack
- puppeteer

### TODO

- Set http header `content-disposition: attachment` when download PDF, which is not supported by github pages.
