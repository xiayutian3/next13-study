import { Metadata } from "next"
import DemoList from './_components/List'

// 静态seo
export const metadata: Metadata = {
  title: "这是列表页",
  description: "这是一个列表输出也",
  keywords: "nextjs seo"
}

export default function List() {
  return (
    <>
      <h1>List</h1>
      <DemoList />
    </>

  )
}
