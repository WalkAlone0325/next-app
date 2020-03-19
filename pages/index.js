// react 组件（一个组件一个页面）
import Link from 'next/link'
import Header from '../components/header'

export default () => (
  <div className="container">
    <Header />
    <h1>Home Page</h1>
    <Link href="/about"><a>about</a></Link>
    {/* jsx 类似于 Vue 单文件组件 style 标签的 scoped */}
    <style jsx>{`
      .container {
        border: 1px solid red;
      }
      h1 {
        color: blue;
      }
    `}</style>
  </div>
)
