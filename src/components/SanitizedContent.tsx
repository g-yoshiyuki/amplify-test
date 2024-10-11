'use client'
import { useEffect, useState } from 'react'
import DOMPurify from 'dompurify'
import parse from 'html-react-parser'

// microCMSから取得したブログ本文のHTML文字列を安全にレンダリングするコンポーネント

type SanitizedContentProps = {
  content: string
}

export const SanitizedContent = ({ content }: SanitizedContentProps) => {
  const [sanitizedContent, setSanitizedContent] = useState('')

  useEffect(() => {
    const clean = DOMPurify.sanitize(content)
    setSanitizedContent(clean)
  }, [content])

  return <>{parse(sanitizedContent)}</>
}
