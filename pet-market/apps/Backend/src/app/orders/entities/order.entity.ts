import { ObjectType, Field, Float } from '@nestjs/graphql';
import { OrderItem } from './order-item.entity';

@ObjectType()
export class Order {
  @Field(() => String)
  id!: string;

  @Field(() => Float)
  totalAmount!: number;

  @Field(() => [OrderItem])
  items!: OrderItem[];
}
