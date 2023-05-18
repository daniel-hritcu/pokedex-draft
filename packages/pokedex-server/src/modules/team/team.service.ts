import { Injectable } from '@nestjs/common';

import { PrismaService } from 'src/common/prisma/prisma.service';
import { TeamFindOneArgs } from './args/team-find-one.args';
import { Team } from './models/team.model';
import { TeamFindAllArgs } from './args/team-find-all.args';
import { TeamCreateArgs } from './args/team-create.args';
import { TeamUpdateArgs } from './args/team-update.args';
import { Pokemon } from '../pokemon/models/pokemon.model';

@Injectable()
export class TeamService {
  constructor(protected readonly prisma: PrismaService) {}

  async findOne(args: TeamFindOneArgs): Promise<Team> {
    return this.prisma.team.findUnique({ where: { id: args.id } });
  }

  async findAll(args: TeamFindAllArgs): Promise<Team[]> {
    return this.prisma.team.findMany(args);
  }

  async create(args: TeamCreateArgs): Promise<Team> {
    return this.prisma.team.create({
      data: {
        pokemons: {
          connect: [...args.pokemonIds.map((id) => ({ id }))],
        },
      },
    });
  }

  async update(args: TeamUpdateArgs): Promise<Team> {
    return this.prisma.team.update({
      where: { id: args.id },
      data: {
        pokemons: {
          connect: [...args.pokemonIds.map((id) => ({ id }))],
        },
      },
    });
  }

  async delete(args: TeamFindOneArgs): Promise<Team> {
    return this.prisma.team.delete({ where: { id: args.id } });
  }

  async getCount(): Promise<number> {
    return this.prisma.team.count();
  }

  async getPokemons(id: number): Promise<Pokemon[]> {
    return this.prisma.team.findUnique({ where: { id } }).pokemons();
  }
}
