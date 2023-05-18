import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { BaseStats as IBaseStats } from '@prisma/client';
import { Pokemon } from './pokemon.model';

@ObjectType()
export class BaseStats implements IBaseStats {
  @Field(() => ID, { nullable: false })
  id!: number;

  @HideField()
  updatedAt!: Date;

  @HideField()
  createdAt!: Date;

  @Field(() => Int, { nullable: false })
  hp!: number;

  @Field(() => Int, { nullable: false })
  attack!: number;

  @Field(() => Int, { nullable: false })
  defense!: number;

  @Field(() => Int, { nullable: false })
  spAttack!: number;

  @Field(() => Int, { nullable: false })
  spDefense!: number;

  @Field(() => Int, { nullable: false })
  speed!: number;

  @HideField()
  pokemon?: Pokemon;
}
