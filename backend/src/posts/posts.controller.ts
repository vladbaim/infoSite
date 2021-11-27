import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, UseInterceptors, UploadedFile } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostDTO } from './dto/post.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('post')
@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  @ApiResponse({ status: 201, type: PostDTO })
  create(@Body() createPostDto: CreatePostDto): Promise<PostDTO> {
    return this.postsService.create(createPostDto);
  }

  @Get()
  @ApiResponse({ status: 201, type: PostDTO, isArray: true })
  findAll() {
    return this.postsService.findAll();
  }

  @Get(':id')
  @ApiResponse({ status: 201, type: PostDTO })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.postsService.findOne(id);
  }

  @Patch(':id')
  @ApiResponse({ status: 201, type: PostDTO })
  update(@Param('id', ParseIntPipe) id: number, @Body() updatePostDto: UpdatePostDto) {
    return this.postsService.update(id, updatePostDto);
  }

  @Delete(':id')
  @ApiResponse({ status: 201 })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.postsService.remove(id);
  }
}
