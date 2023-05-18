import Prisma, { PrismaClient, PokemonType } from '@prisma/client';
import pokedexSeed from './pokedex.seed.json';

const prisma = new PrismaClient();

async function seed() {
  await seedPokedex(prisma);
}

seed()
  .then(() => {
    console.log('Seeding complete!');
    process.exit(0);
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

export async function seedPokedex(
  prisma: PrismaClient,
): Promise<Prisma.Pokemon[]> {
  return prisma.$transaction(
    pokedexSeed.map((pokemon) => {
      return prisma.pokemon.create({
        data: {
          id: pokemon.id,
          name: {
            create: {
              english: pokemon.name.english,
              japanese: pokemon.name.japanese,
              chinese: pokemon.name.chinese,
              french: pokemon.name.french,
            },
          },
          // TODO: Don't use prisma runtime validation. Instead, implement a proper validation.
          type: pokemon.type.map((type) => PokemonType[type.toUpperCase()]),
          base: {
            create: {
              hp: pokemon.base.HP,
              attack: pokemon.base.Attack,
              defense: pokemon.base.Defense,
              spAttack: pokemon.base['Sp. Attack'],
              spDefense: pokemon.base['Sp. Defense'],
              speed: pokemon.base.Speed,
            },
          },
        },
      });
    }),
  );
}
