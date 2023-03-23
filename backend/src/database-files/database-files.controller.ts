import { Get, Param, ParseIntPipe, Post, Res, StreamableFile, UploadedFile, UseInterceptors } from '@nestjs/common';
import { ApiBody, ApiConsumes, ApiNotFoundResponse, ApiOkResponse } from '@nestjs/swagger';
import { Readable } from 'stream';
import { DatabaseFilesService } from './database-files.service';
import { Response } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';
import { Auth } from '../shared/decorators/auth';
import { ApiTagEnum } from '../../../common/api.enum';
import { ControllerWithTag } from '../shared/decorators/controllerWithTag';
import { crudFullAuthRoutesConfig } from '../shared/constants/crudRoutes';
import { DatabaseFile } from './entities/database-file.entity';
import { CreateDatabaseFileDTO } from './dto/create-database-file.dto';
import { UpdateDatabaseFileDTO } from './dto/update-database-file.dto';
import { Crud, CrudRequest, CrudRequestInterceptor, ParsedRequest } from '@nestjsx/crud';
import { PureDatabaseFileDTO } from './dto/pure-database-file.dto';

@Crud({
  model: { type: DatabaseFile },
  dto: { update: UpdateDatabaseFileDTO, replace: CreateDatabaseFileDTO },
  routes: { ...crudFullAuthRoutesConfig, exclude: ['createOneBase', 'createManyBase', 'replaceOneBase'] }
})
@ControllerWithTag(ApiTagEnum.DatabaseFiles)
export class DatabaseFilesController {
  constructor(private readonly service: DatabaseFilesService) {}

  @Get('image/:id')
  @ApiOkResponse({ content: { 'image': { schema: { type: 'string', format: 'binary' } } } })
  @ApiNotFoundResponse()
  async getImage(@Param('id', ParseIntPipe) id: number, @Res({ passthrough: true }) response: Response): Promise<StreamableFile> {
    const file = await this.service.getWithData(id);
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
  @Auth()
  @UseInterceptors(FileInterceptor('file'))
  @ApiOkResponse({ type: PureDatabaseFileDTO })
  createOne(@ParsedRequest() req: CrudRequest, @UploadedFile('file') file: Express.Multer.File): Promise<PureDatabaseFileDTO> {
    return this.service.upload({ filename: file.originalname, data: file.buffer });
  }
}
