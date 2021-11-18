export default function Article({ article }) {
  return (
    <div>
      <h4>{article.title}</h4>
      <p>{article.body}</p>
    </div>
  )
}
