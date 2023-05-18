import { Field, ObjectType } from '@nestjs/graphql';
import { BaseModel } from 'src/common/graphql/base.model';
import { Prisma } from '@prisma/client';
import { Pokemon } from 'src/modules/pokemon/models/pokemon.model';

@ObjectType()
export class Team extends BaseModel implements ITeam {
  @Field(() => [Pokemon])
  pokemons?: Pokemon[];
}

type ITeam = Partial<
  Prisma.TeamGetPayload<{
    include: {
      pokemons: true;
    };
  }>
>;
