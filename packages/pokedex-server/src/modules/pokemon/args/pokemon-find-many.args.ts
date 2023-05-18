import { ArgsType, Field } from '@nestjs/graphql';
import { PokemonType } from '@prisma/client';
import { BaseFindAllArgs } from 'src/common/graphql/base-find-all.args';

@ArgsType()
export class PokemonFindAllArgs extends BaseFindAllArgs {
  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => [PokemonType], { nullable: true })
  type?: PokemonType[];
}
