import Link from 'next/link'

export default function pokemon({ pokemons }) {
  return (
    <div>
      {pokemons.results.map(pokemon => (
        <div key={pokemon}>
          <h4>{pokemon.name}</h4>
          <Link href={pokemon.url}><a>{pokemon.url}</a></Link>
        </div>
      ))}    
    </div>
  )
}
export async function getStaticProps() {
  const res = await fetch(`http://localhost:3000/api/pokemon`)
  const pokemons = await res.json()
  return {
    props: {
      pokemons
    }
  }
}