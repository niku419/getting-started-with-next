import HeaderStyles from '../styles/Header.module.css';

export default function Header() {
  return (
    <div>
      <h1 className={HeaderStyles.title}>Next News</h1>
      <p className={HeaderStyles.description}>Get the latest news with next news</p>
    </div>
  )
}
