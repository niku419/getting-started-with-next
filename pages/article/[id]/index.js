import React from 'react'
import Article from '../../../components/Article'

export default function article({ article }) {
  return (
    <div>
      {/* {JSON.stringify(article)} */}
      <Article article={article} />
    </div>
  )
}

// export const getServerSideProps  = async (context) => {
//   const { id } = context.params
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
//   const article = await res.json()
//   return {
//     props: {
//       article
//     }
//   }
// }

export const getStaticProps = async ({ params }) => {
  const { id } = params
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const article = await res.json()
  return {
    props: {
      article
    }
  }
}
 export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await res.json()
  const paths = posts.map((post) => ({
    params: { id: post.id.toString() }
  }))
  return {
    paths,
    fallback: false
  }
}
