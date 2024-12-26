import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class ArticlesService {
    private prisma = new PrismaClient();

  async getAllPosts() {
    return this.prisma.article.findMany();
  }

  async getPostById(id: number) {
    return this.prisma.article.findUnique({
      where: { id },
    });
  }
}
