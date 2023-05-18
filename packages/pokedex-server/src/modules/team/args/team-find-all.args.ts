import { ArgsType } from '@nestjs/graphql';
import { BaseFindAllArgs } from 'src/common/graphql/base-find-all.args';

@ArgsType()
export class TeamFindAllArgs extends BaseFindAllArgs {}
