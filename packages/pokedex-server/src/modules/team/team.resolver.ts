import {
  Resolver,
  Query,
  Args,
  ResolveField,
  Int,
  Mutation,
  Parent,
} from '@nestjs/graphql';
import { TeamService } from './team.service';
import { Team } from './models/team.model';
import { TeamFindOneArgs } from './args/team-find-one.args';
import { TeamFindAllArgs } from './args/team-find-all.args';
import { TeamCreateArgs } from './args/team-create.args';
import { TeamUpdateArgs } from './args/team-update.args';
import { Pokemon } from '../pokemon/models/pokemon.model';

@Resolver(() => Team)
export class TeamResolver {
  constructor(protected readonly teamService: TeamService) {}

  @Query(() => Team, { nullable: true, name: 'team' })
  async findOne(@Args() args: TeamFindOneArgs): Promise<Team | null> {
    return this.teamService.findOne(args);
  }

  @Query(() => [Team], { name: 'teams' })
  async findAll(@Args() args: TeamFindAllArgs): Promise<Team[]> {
    return this.teamService.findAll(args);
  }

  @Mutation(() => Team, { name: 'createTeam', nullable: true })
  async create(@Args() args: TeamCreateArgs): Promise<Team> {
    return this.teamService.create(args);
  }

  @Mutation(() => Team, { name: 'updateTeam', nullable: true })
  async update(@Args() args: TeamUpdateArgs): Promise<Team> {
    return this.teamService.update(args);
  }

  @Query(() => Int, { name: 'teamCount' })
  async count(): Promise<number> {
    return this.teamService.getCount();
  }

  @ResolveField(() => [Pokemon], { name: 'pokemons' satisfies keyof Team })
  async resolveFieldBaseStats(@Parent() parent: Team) {
    return this.teamService.getPokemons(parent.id);
  }
}
