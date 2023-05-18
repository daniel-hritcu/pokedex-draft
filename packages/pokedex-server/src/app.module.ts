import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { PrismaModule } from './common/prisma/prisma.module';
import { PokemonModule } from './modules/pokemon/pokemon.module';
import { join } from 'path';
import { TeamModule } from './modules/team/team.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'schema.gql'),
      sortSchema: true,
      playground: false,
    }),
    PrismaModule,
    PokemonModule,
    TeamModule,
  ],
})
export class AppModule {}
