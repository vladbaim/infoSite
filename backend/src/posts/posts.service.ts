import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DatabaseFilesService } from '../database-files/database-files.service';

import { CreatePostDto } from './dto/create-post.dto';
import { PostDTO } from './dto/post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from './entities/post.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private readonly postsRepository: Repository<Post>
  ) {}

  create(createPostDto: CreatePostDto): Promise<PostDTO> {
    return this.postsRepository
      .create(createPostDto)
      .save()
      .then((post) => new PostDTO(post));
  }

  findAll(): Promise<PostDTO[]> {
    return this.postsRepository.find().then((posts) => posts.map((post) => new PostDTO(post)));
  }

  findOne(id: number): Promise<PostDTO> {
    return this.postsRepository.findOneOrFail(id).then((post) => new PostDTO(post));
  }

  update(id: number, updatePostDto: UpdatePostDto): Promise<PostDTO> {
    return this.postsRepository
      .findOneOrFail(id)
      .then((post) => updatePostDto.mergeWithEntity(post).save())
      .then((post) => new PostDTO(post));
  }

  remove(id: number) {
    this.postsRepository.delete(id);
  }
}
