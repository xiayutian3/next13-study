import { Metadata } from "next"

type Props = {
  params:{id:string},
  searchParams:any
}

// 动态seo
export async function generateMetadata({params, searchParams}:Props): Promise<Metadata> {
  return {
    title:'这是详情页-'+ params.id,
    description:"这是一个动态seo动态seo动态seo动态seo",
    keywords:"动态seo"
  }
}
// http://localhost:3000/demo/list/15?key=456
export default function ListDetail({params,searchParams}:any) {
  return (
      <h1>动态路由页 ListDetail {params.id}---query：{searchParams.key}</h1>
  )
}
