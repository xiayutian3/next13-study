
export default function DemoLayout({ children }: any) {
  return (
    <div className="list">
      <h2>list 的母版页</h2>
      <hr/>
      {children}
    </div>
  )
}
