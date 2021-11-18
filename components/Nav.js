import Link from 'next/link';

export default function Nav() {
  return (
    <nav>
      <ul>
        <li >
          <Link href="/"> 
            Home
          </Link>
        </li>
        <li>
          <Link href="/pokemon" >
             Pokemons
          </Link>
        </li>
      </ul>
    </nav>
  )
}
