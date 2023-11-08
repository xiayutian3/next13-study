import { NextResponse } from "next/server"

//get请求 GET
export const GET =  () => {
  return NextResponse.json({
    success:true,
    errorMessage:"",
    data:[
      {
        id:1,
        name:'hell'
      },
      {
        id:2,
        name:'nico'
      }
    ]
  })
}