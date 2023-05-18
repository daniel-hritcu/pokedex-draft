import { Field, HideField, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export abstract class BaseModel {
  @Field(() => ID, { nullable: false })
  id!: number;

  @HideField()
  updatedAt!: Date;

  @HideField()
  createdAt!: Date;
}
