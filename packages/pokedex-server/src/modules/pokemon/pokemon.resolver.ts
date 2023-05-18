import {
  Resolver,
  Query,
  Args,
  ResolveField,
  Parent,
  Int,
} from '@nestjs/graphql';
import { PokemonService } from './pokemon.service';
import { Pokemon } from './models/pokemon.model';
import { PokemonFindOneArgs } from './args/pokemon-find-one.args';
import { PokemonFindAllArgs } from './args/pokemon-find-many.args';
import { PokemonName } from './models/pokemon-name.model';
import { BaseStats } from './models/pokemon-base-stats.model';

@Resolver(() => Pokemon)
export class PokemonResolver {
  constructor(protected readonly pokemonService: PokemonService) {}

  @Query(() => Pokemon, { nullable: true, name: 'pokemon' })
  async findOne(@Args() args: PokemonFindOneArgs): Promise<Pokemon | null> {
    return this.pokemonService.findOne(args);
  }

  @Query(() => [Pokemon], { name: 'pokemons' })
  async findAll(@Args() args: PokemonFindAllArgs): Promise<Pokemon[]> {
    return this.pokemonService.findAll(args);
  }

  @ResolveField(() => PokemonName, { name: 'name' satisfies keyof Pokemon })
  async resolveFieldName(@Parent() parent: Pokemon) {
    return this.pokemonService.getName(parent.id);
  }

  @ResolveField(() => BaseStats, { name: 'base' satisfies keyof Pokemon })
  async resolveFieldBaseStats(@Parent() parent: Pokemon) {
    return this.pokemonService.getBase(parent.id);
  }

  @Query(() => Int, { name: 'pokemonCount' })
  async count(): Promise<number> {
    return this.pokemonService.getCount();
  }
}
