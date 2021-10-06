import * as React from 'react'

import {PokemonForm, fetchPokemon, PokemonInfoFallback, PokemonDataView} from '../pokemon'

function PokemonInfo({pokemonName}) {
  // 🐨 Have state for the pokemon (null)

  const [pokemon, setPokemon] = React.useState(null)
  // 🐨 use React.useEffect where the callback should be called whenever the
  // pokemon name changes.
  // 💰 DON'T FORGET THE DEPENDENCIES ARRAY!
  React.useEffect(() => {

  // 💰 if the pokemonName is falsy (an empty string) then don't bother making the request (exit early).
  if(! pokemonName) return

  // 🐨 before calling `fetchPokemon`, clear the current pokemon state by setting it to null
  setPokemon(null)

  // 💰 Use the `fetchPokemon` function to fetch a pokemon by its name:
  //   fetchPokemon('Pikachu').then(
  //     pokemonData => { /* update all the state here */},
  //   )
  fetchPokemon(pokemonName).then(
    pokemonData => {
      console.log(pokemonData)
      setPokemon(pokemonData)
    }
  )
  
  }, [pokemonName])

  // 🐨 return the following things based on the `pokemon` state and `pokemonName` prop:
  //   1. no pokemonName: 'Submit a pokemon'
  //   2. pokemonName but no pokemon: <PokemonInfoFallback name={pokemonName} />
  //   3. pokemon: <PokemonDataView pokemon={pokemon} />

  if(! pokemonName) return 'Submit a pokemon'
  else if(pokemonName && ! pokemon) return (
    <PokemonInfoFallback name={pokemonName} />
  )
  else return (
    <PokemonDataView pokemon={pokemon} />
  )

  // 💣 remove this
  return 'TODO'
}

export default function Exercicio06() {
  const [pokemonName, setPokemonName] = React.useState('')

  function handleSubmit(newPokemonName) {
    setPokemonName(newPokemonName)
  }

  return (
    <div className="pokemon-info-app">
      <PokemonForm pokemonName={pokemonName} onSubmit={handleSubmit} />
      <hr />
      <div className="pokemon-info">
        <PokemonInfo pokemonName={pokemonName} />
      </div>
    </div>
  )
}