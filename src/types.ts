import { type ViteSSGContext } from 'vite-ssg'

export type UserModule = (ctx: ViteSSGContext) => void

export interface Post {
  title: string
  id: number
  date: string
  desc?: string
  duration?: string
}
