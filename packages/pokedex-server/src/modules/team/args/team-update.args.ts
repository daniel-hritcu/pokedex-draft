import { ArgsType, Field, Int } from '@nestjs/graphql';
import { TeamCreateArgs } from './team-create.args';

@ArgsType()
export class TeamUpdateArgs extends TeamCreateArgs {
  @Field(() => [Int])
  id: number;
}
