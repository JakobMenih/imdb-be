import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { GenresService } from './genres.service';
import { Genre } from './entity/genre';

@Controller('genres')
export class GenresController {
  constructor(private readonly genresService: GenresService) {}
  @Get()
  async findAll(): Promise<Genre[]> {
    return this.genresService.findAll();
  }
  @Post()
  async create(@Body('title') title: string): Promise<Genre> {
    return this.genresService.create(title);
  }
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body('title') title: string,
  ): Promise<Genre> {
    return this.genresService.update(+id, title);
  }
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    this.genresService.delete(+id);
  }
}
