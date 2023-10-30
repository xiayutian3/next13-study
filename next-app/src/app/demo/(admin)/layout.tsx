import { ReactNode } from "react";

// 分组，路径保持不变 没有（admin 路由 http://localhost:3000/demo/us
export default function DemoLayout({ children }: {children:ReactNode}) {
  return (
    <div className="demo p-8 bg-rose-600 text-white">
      <h4>admin layout 的母版页</h4>
      {children}
    </div>
  )
}
