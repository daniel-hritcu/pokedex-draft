import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export abstract class BaseFindAllOutput {
  @Field(() => Int, { nullable: false })
  _count?: number;
}

// @ObjectType()
// abstract class PaginationInfo {
//   @Field(() => Boolean, { nullable: false })
//   hasNextPage: boolean;

//   @Field(() => Boolean, { nullable: false })
//   hasPreviousPage: boolean;

//   @Field(() => String, { nullable: false })
//   startCursor: string;

//   @Field(() => String, { nullable: false })
//   endCursor: string;
// }
