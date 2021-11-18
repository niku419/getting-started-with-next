import Link from 'next/link';
import ArticleStyles from '../styles/Article.module.css';


export default function ArticleItem({ article }) {
  return (
    <Link href="/article/[id]" as={`/article/${article.id}`}>
      <a className={ArticleStyles.card}>
        <h3>{article.title}</h3>
        <p>{article.body}</p>
      </a>
    </Link>
  )
}
