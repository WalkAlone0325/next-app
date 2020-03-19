import { useRouter } from 'next/router'

const Post = ({ data }) => {
  const router = useRouter()

  return (
    <div>
      <p>Post {router.query.id}</p>
    </div>
  )
}
Post.getInitalProps = async context => {
  const { id } = context.query
  const res = await axios.get('http:localhost:8080/posts' + id)
  return {
    data: res.data
  }
}

export default Post