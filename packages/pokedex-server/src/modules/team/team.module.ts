import { Module } from '@nestjs/common';
import { TeamService } from './team.service';
import { TeamResolver } from './team.resolver';

@Module({
  providers: [TeamService, TeamResolver],
})
export class TeamModule {}
