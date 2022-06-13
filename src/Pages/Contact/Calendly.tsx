import React, {useEffect, useRef, useState} from 'react'

export default function Calendly() {
  useEffect(() => {
    const head = document.querySelector('head')
    const script = document.createElement('script')
    script.setAttribute(
      'src',
      'https://assets.calendly.com/assets/external/widget.js',
    )
    head?.appendChild(script)
  }, [])

  return (
    <div
      className="calendly-inline-widget"
      data-url="https://calendly.com/kalijonn/chat?hide_gdpr_banner=1&background_color=1a1a1a&text_color=ffffff&primary_color=06B6D4"
      style={{height: '630px', minWidth: '320px'}}
    />
  )
}
