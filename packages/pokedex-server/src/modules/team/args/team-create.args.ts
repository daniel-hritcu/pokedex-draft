import { ArgsType, Field, Int } from '@nestjs/graphql';
import { ArrayMaxSize } from 'class-validator';
import { MAX_TEAM_SIZE } from '../team.constants';

@ArgsType()
export class TeamCreateArgs {
  @Field(() => [Int], {
    description: `The IDs of the Pokemon to add to the team. Up to ${MAX_TEAM_SIZE}.`,
  })
  @ArrayMaxSize(MAX_TEAM_SIZE)
  pokemonIds: number[];
}
