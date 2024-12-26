import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class ArticlesService {
    private prisma = new PrismaClient();

  async getAllPosts() {
    return this.prisma.post.findMany();
  }

  async getPostById(id: number) {
    return this.prisma.post.findUnique({
      where: { id },
    });
  }
}
