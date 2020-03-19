import Header from '../components/header'
import axios from 'axios' // axios 支持同构，同时可以在客户端和服务端执行

const Blog = ({ data }) => (
  <div>
    <Header />
    <h2>blog</h2>
    <ul>
      {data.map(i => <li key={i.id}>
        {/* 路径重写 post?id=1    /post/1.html */}
        {/* <Link href={`/post?id=${i.id}`} as={`/post/${i.id}`}><a>{i.title}</a></Link> */}
        <Link href={`/post/[id]`} as={`/post/${i.id}`}><a>{i.title}</a></Link>
      </li>)}
    </ul>
  </div>
)

Blog.getInitalProps = async () => {
  // 这里的代码会在服务端（Node环境）执行。这里不能使用ajax
  // 在开发 SSR 类型的时候，一定要使用 同构代码
  const res = await axios.get('http:localhost:8080/posts')
  // 这个函数返回对象就是当前组件的 props
  return {
    data: res.data
  }
}

export default Blog


// import Header from '../components/header'
// import { useState, useEffect } from 'react'

// export default () => {
//   // const [count, setCount] = useState(1)
//   const [data, setData] = useState([])

//   useEffect(() => {
//     // 当组件挂载到 dom 上时执行
//     // 这里的代码只能在客户端执行
//     // 取出的数据是不会参与服务端渲染的
//     fetch('http://localhost:8080/posts')
//       .then(res => res.json())
//       .then(res => setData(res))
//   }, [])

//   return (
//     <div>
//       <Header />
//       <h3>blog</h3>
//       {/* <button onClick={() => setCount(count + 1)}>{count}</button> */}
//       <ul>
//         {data.map(i => <li key={i.id}>{i.title}</li>)}
//       </ul>
//     </div>
//   )
// }
