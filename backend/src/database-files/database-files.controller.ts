import { Controller, Get, Param, ParseIntPipe, Post, Res, StreamableFile, UploadedFile, UseInterceptors } from '@nestjs/common';
import { ApiBody, ApiConsumes, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Readable } from 'stream';
import { DatabaseFilesService } from './database-files.service';
import { Response } from 'express';
import { DatabaseFileDTO } from './dto/database-file.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@ApiTags('database-file')
@Controller('database-files')
export class DatabaseFilesController {
  constructor(private readonly databaseFilesService: DatabaseFilesService) {}

  @Get(':id')
  @ApiResponse({ status: 201, content: { 'image': { schema: { type: 'string', format: 'binary' } } } })
  async getDatabaseFileById(@Param('id', ParseIntPipe) id: number, @Res({ passthrough: true }) response: Response) {
    const file = await this.databaseFilesService.getFileById(id);
    const stream = Readable.from(file.data);

    response.set({
      'Content-Disposition': `inline; filename="${file.filename}"`,
      'Content-Type': 'image'
    });

    return new StreamableFile(stream);
  }

  @Post()
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary'
        }
      }
    }
  })
  @ApiResponse({ status: 201, type: DatabaseFileDTO })
  @UseInterceptors(FileInterceptor('file'))
  async uploadDatabaseFile(@UploadedFile('file') file: Express.Multer.File) {
    return this.databaseFilesService.uploadDatabaseFile(file);
  }
}
