import { Field, ObjectType, HideField } from '@nestjs/graphql';
import { Pokemon } from './pokemon.model';
import { PokemonName as IPokemonName } from '@prisma/client';
import { BaseModel } from 'src/common/graphql/base.model';

@ObjectType()
export class PokemonName extends BaseModel implements IPokemonName {
  @Field(() => String, { nullable: false })
  english!: string;

  @Field(() => String, { nullable: false })
  japanese!: string;

  @Field(() => String, { nullable: false })
  chinese!: string;

  @Field(() => String, { nullable: false })
  french!: string;

  @HideField()
  pokemon?: Pokemon | null;
}
