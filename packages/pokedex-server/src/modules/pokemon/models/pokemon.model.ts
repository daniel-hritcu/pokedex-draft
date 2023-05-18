import { Field, ObjectType, HideField } from '@nestjs/graphql';
import { PokemonType } from '../enums/pokemon-type.enum';
import { PokemonName } from './pokemon-name.model';
import { BaseStats } from './pokemon-base-stats.model';
import { BaseModel } from 'src/common/graphql/base.model';
import Prisma from '@prisma/client';

@ObjectType()
export class Pokemon extends BaseModel implements IPokemon {
  @HideField()
  nameId!: number;

  @HideField()
  baseId!: number;

  @Field(() => [PokemonType], { nullable: true })
  type!: Array<keyof typeof PokemonType>;

  @Field(() => PokemonName, { nullable: false })
  name?: PokemonName;

  @Field(() => BaseStats, { nullable: false })
  base?: BaseStats;
}

type PokemonInclude = Partial<
  Pick<
    Prisma.Prisma.PokemonGetPayload<{
      include: {
        base: true;
        name: true;
        teams: true;
      };
    }>,
    'base' | 'name'
  >
>;
type IPokemon = Prisma.Pokemon & PokemonInclude;
