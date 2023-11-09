"use client"

import React, { useEffect } from 'react'
import { useStore } from '@/store/index'
import { observer } from "mobx-react-lite"

function DemoPage() {
  const store = useStore()
  // 获取user Store里面的信息
  console.log(store.user.userInfo)
  // 设置user Store里面的信息
  useEffect(() => {
    store.user.setUserInfo({
      userId: 'DemoPage',
      nickname: 'DemoPage'
    })
  }, [])

  //点击事件
  const handleClick = () => {
    store.user.setUserInfo({
      userId: '改变了',
      nickname: '改变了'
    })
  }


  return (
    <div>
      <h1>DemoPage</h1>
      <button onClick={handleClick}>改变nickname</button>
      nickname: {store.user.userInfo.nickname}
    </div>
  )
}

export default observer(DemoPage)