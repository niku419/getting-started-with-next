import Head from 'next/head'
import ArticleList from '../components/ArticleList'

export default function Home({ articles }) {
  return (
    <div>
      <Head>
        <title>Next News</title>
      </Head>
      <ArticleList articles={articles} />      
    </div>
  )
}
//6a3b927919de4154826be11d0e2dd739
export async function getStaticProps() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
  const articles = await res.json()
  return {
    props: {
      articles
    }
  }
}
