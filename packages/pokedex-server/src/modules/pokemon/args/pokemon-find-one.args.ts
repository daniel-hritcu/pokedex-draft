import { Field, ArgsType, Int } from '@nestjs/graphql';

@ArgsType()
export class PokemonFindOneArgs {
  @Field(() => Int, { nullable: true })
  id?: number;
}
