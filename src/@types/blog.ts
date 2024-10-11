type Blog = {
  id: string
  title: string
  content: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
}

type BlogResponse = {
  contents: Blog[]
  totalCount: number
  offset: number
  limit: number
}

export type { Blog, BlogResponse }