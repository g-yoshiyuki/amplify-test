import type { Blog, BlogResponse } from '@/@types/blog'
import { createClient } from 'microcms-js-sdk'

if (!process.env.MICROCMS_API_KEY) {
  throw new Error('MICROCMS_API_KEY is required')
}

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error('MICROCMS_SERVICE_DOMAIN is required')
}

// microCMSのAPIクライアントを作成
// microCMSのAPIにリクエストを送信するために使用
export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
})

// 'blog'エンドポイントにリクエストを送信
// レスポンスオブジェクトについて。response.contents配列の中に記事情報のオブジェクトが入っている。responseにはcontents配列と、記事の総数などの情報が入っている。
// Promise(戻り値)には記事の型を指定している。<Blog[]>
export const getBlogs = async (): Promise<Blog[]> => {
  const response = await client.get<BlogResponse>({
    endpoint: 'blog',
    // 公開日の新しいものから取得
    queries: { orders: '-publishedAt' },
  })
  return response.contents
}
