import { gql } from "@apollo/client";
import {GetPokemonsQuery, GetPokemonsQueryVariables} from "@/graphql";
import { getClient } from "@/utils/graphql.client";

const query = gql`
  query GetPokemons(
    $skip: Int
    $take: Int
    $name: String
    $type: [PokemonType!]
  ) {
    pokemons: pokemons(
      skip: $skip
      take: $take
      name: $name
      type: $type
    ) {
      id
      name {
        english
      }
      type
      base {
        attack
        defense
        hp
        spAttack
        spDefense
        speed
      }
    }
    pokemonCount
  }
`;

export async function getPokemons(variables?: GetPokemonsQueryVariables) {
  const { data } = await getClient().query<GetPokemonsQuery>({ query, variables });

  return data;
}
