import { registerEnumType } from '@nestjs/graphql';
import { PokemonType } from '@prisma/client';

export { PokemonType };

registerEnumType(PokemonType, {
  name: 'PokemonType',
});
