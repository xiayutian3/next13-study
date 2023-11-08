import { NextRequest, NextResponse } from "next/server"

//get请求 GET
export const GET =  (req:NextRequest,{params}:any) => {
  return NextResponse.json({
    success:true,
    errorMessage:"获取动态参数"+params.id,
    data:{}
  })
}