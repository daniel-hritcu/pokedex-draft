import { Field, ArgsType, Int } from '@nestjs/graphql';

@ArgsType()
export class TeamFindOneArgs {
  @Field(() => Int, { nullable: true })
  id?: number;
}
