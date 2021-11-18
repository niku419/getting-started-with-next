export default async function handler(req, res) {
  if(req.method === 'POST') {
    const { id } = req.params;
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const pokemon = await data.json();
    return res.status(200).json(pokemon);
  }
  else if(req.method === 'GET') {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/`)
    const pokemons = await data.json();
    return res.status(200).json(pokemons);
  }
  return res.status(404).json({ error: 'Not found' });
}