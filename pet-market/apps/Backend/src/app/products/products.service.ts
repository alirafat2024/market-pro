import { Injectable } from '@nestjs/common';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { PrismaService } from '../prisma.service';
import { Product } from '../../generated/prisma/client';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}

  create(createProductInput: CreateProductInput) {
    return this.prisma.product.create({ data: createProductInput });
  }

  findAll() {
    return this.prisma.product.findMany({ orderBy: { createdAt: 'desc' } });
  }

  findOne(id: string) {
    return this.prisma.product.findUnique({ where: { id } });
  }

  async searchProducts(term: string): Promise<Product[]> {
    const lowercaseTerm = term.toLowerCase();
    return this.prisma.product.findMany({
      where: {
        OR: [
          { name: { contains: lowercaseTerm, mode: 'insensitive' } },
          { description: { contains: lowercaseTerm, mode: 'insensitive' } },
        ],
      },
    });
  }

  update(id: string, updateProductInput: UpdateProductInput) {
    const { id: inputId, ...data } = updateProductInput;
    return this.prisma.product.update({ where: { id: id || inputId }, data });
  }

  remove(id: string) {
    return this.prisma.product.delete({ where: { id } });
  }
}
