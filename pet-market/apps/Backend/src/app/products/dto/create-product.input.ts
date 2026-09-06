import { Field, Float, InputType } from '@nestjs/graphql';

@InputType()
export class CreateProductInput {
  @Field()
  name: string;

  @Field()
  description: string;

  @Field(() => Float)
  price: number;

  @Field()
  image: string;

  @Field()
  stripePriceId: string;

  @Field({ nullable: true, defaultValue: false })
  isFeatured?: boolean;
}
