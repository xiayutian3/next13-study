
export default function DemoLayout({ children }: any) {
  return (
    <div className="demo">
      <h2>demo 的母版页</h2>
      <hr/>
      {children}
    </div>
  )
}
