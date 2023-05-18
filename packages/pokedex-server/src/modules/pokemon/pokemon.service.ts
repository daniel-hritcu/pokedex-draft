import { Injectable } from '@nestjs/common';

import { PrismaService } from 'src/common/prisma/prisma.service';
import { PokemonFindAllArgs } from './args/pokemon-find-many.args';
import { PokemonFindOneArgs } from './args/pokemon-find-one.args';
import { Pokemon } from './models/pokemon.model';
import { PokemonName } from './models/pokemon-name.model';
import { BaseStats } from './models/pokemon-base-stats.model';

@Injectable()
export class PokemonService {
  constructor(protected readonly prisma: PrismaService) {}

  async findAll(args: PokemonFindAllArgs): Promise<Pokemon[]> {
    return this.prisma.pokemon.findMany({
      skip: args.skip,
      take: args.take,
      where: {
        AND: [
          args.name ? { name: { english: { contains: args.name } } } : {},
          args.type ? { type: { hasEvery: args.type } } : {},
        ],
      },
    });
  }

  async findOne(args: PokemonFindOneArgs): Promise<Pokemon | null> {
    return this.prisma.pokemon.findUnique({ where: { id: args.id } });
  }

  async getName(parentId: number): Promise<PokemonName | null> {
    return this.prisma.pokemon.findUnique({ where: { id: parentId } }).name();
  }

  async getBase(parentId: number): Promise<BaseStats | null> {
    return this.prisma.pokemon.findUnique({ where: { id: parentId } }).base();
  }

  async getCount(): Promise<number> {
    return this.prisma.pokemon.count();
  }
}
