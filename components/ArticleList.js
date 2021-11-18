import ArticleStyles from '../styles/Article.module.css'
import ArticleItem from './ArticleItem'

export default function ArticleList({  articles }) {
  return (
    <ul className={ArticleStyles.grid}>
      {articles.map(article => (
        <li key={article.id}>
          <ArticleItem article={article} />
        </li>
      ))}
    </ul>
  )
}
