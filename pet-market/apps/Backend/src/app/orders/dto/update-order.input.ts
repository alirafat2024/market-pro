import { CreateOrderInput } from './create-order.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateOrderInput extends PartialType(CreateOrderInput) {
  @Field(() => String)
  id!: string;
}
