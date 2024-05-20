/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Hashtag as PrismaHashtag,
  Tweet as PrismaTweet,
} from "@prisma/client";
import { HashtagDto } from "../HashtagDto";

export class HashtagServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.HashtagCountArgs, "select">): Promise<number> {
    return this.prisma.hashtag.count(args);
  }

  async hashtags<T extends Prisma.HashtagFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.HashtagFindManyArgs>
  ): Promise<PrismaHashtag[]> {
    return this.prisma.hashtag.findMany<Prisma.HashtagFindManyArgs>(args);
  }
  async hashtag<T extends Prisma.HashtagFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.HashtagFindUniqueArgs>
  ): Promise<PrismaHashtag | null> {
    return this.prisma.hashtag.findUnique(args);
  }
  async createHashtag<T extends Prisma.HashtagCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.HashtagCreateArgs>
  ): Promise<PrismaHashtag> {
    return this.prisma.hashtag.create<T>(args);
  }
  async updateHashtag<T extends Prisma.HashtagUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.HashtagUpdateArgs>
  ): Promise<PrismaHashtag> {
    return this.prisma.hashtag.update<T>(args);
  }
  async deleteHashtag<T extends Prisma.HashtagDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.HashtagDeleteArgs>
  ): Promise<PrismaHashtag> {
    return this.prisma.hashtag.delete(args);
  }

  async getTweet(parentId: string): Promise<PrismaTweet | null> {
    return this.prisma.hashtag
      .findUnique({
        where: { id: parentId },
      })
      .tweet();
  }
  async GetHashtags(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async ListHashtags(args: string): Promise<HashtagDto[]> {
    throw new Error("Not implemented");
  }
}
