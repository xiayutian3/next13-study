
import React from 'react'
import { Metadata } from "next"
import DemoHome from './_components/demo'

// 静态seo
export const metadata: Metadata = {
  title: "这是store页",
  description: "这是一个storestorestore",
  keywords: "store seo"
}

function StorePage() {

  return (
    <div>
      <h1>StorePage</h1>
      <hr />
      <DemoHome/>
    </div>
  )
}

export default StorePage