import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";
import { useState, useEffect } from "react"

function PokemonPage() {

  const [pokemons, setPokemons] = useState([])
  const [queryMon, setQueryMon] = useState("")
  
  // useEffect(() => {
  //   const fetchData = () => {
  //     fetch("http://localhost:3000/pokemon")
  //     .then(res => res.json())
  //     .then(pokemonList => setPokemons(pokemonList))
  //     .catch(err => alert(err))
  //   }
  //     fetchData()
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch("http://localhost:3000/pokemon")
        const pokemonList = await resp.json()
        setPokemons(pokemonList)
      } catch (error) {
        alert(error)
      }
    }

    fetchData()
  }, []);

  const filteredMon = pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(queryMon))

 

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm />
      <br />
      <Search query={queryMon} setQuery={setQueryMon}/>
      <br />
      <PokemonCollection pokemons={filteredMon}/>
    </Container>
  );
}

export default PokemonPage;
