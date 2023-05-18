import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: "../pokedex-server/schema.gql",
  documents: ['src/**/*.{ts,tsx}'],
  generates: {
    './.gql/': {
      preset: 'client',
      presetConfig: {
        gqlTagName: 'gql',
        
      },
      config: {
        skipTypename: true
      }
    }
  },
  ignoreNoDocuments: true,
};

export default config;