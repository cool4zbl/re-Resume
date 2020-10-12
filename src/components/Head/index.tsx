/**
 * @description HTML Head for resume
 */
import React from 'react'
import { Helmet } from 'react-helmet'

interface HeadProps {
  basics: Resume.Basics
}

const Head: React.FC<HeadProps> = ({ basics = {} }: HeadProps) => {
  if (!basics) return null

  const { name, label, picture, summary: desc, website, url } = basics

  const title = `${name} - ${label} - resume`
  // Redirect to resume url or personal website.
  const resumeURL = url || website

  return (
    <Helmet>
      {/* <!-- Primary Meta Tags --> */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="theme-color" content="#ffffff" />
      <meta itemProp="description" content={desc} />
      <meta itemProp="image" content={picture} />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={resumeURL} />
      <meta
        property="og:image"
        content="http://zhangbinliu.me/content/images/avatar_zbl.jpg"
      />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="300" />
      <meta property="og:image:height" content="300" />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content={picture} />
      <meta property="twitter:url" content={resumeURL} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={desc} />
      <meta property="twitter:image" content={picture} />

      {/* <!-- AppleTouch --> */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/manifest.json" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#d55b6a" />
    </Helmet>
  )
}

export default Head
