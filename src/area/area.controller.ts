import { Controller, Get, Post, Delete, Patch, Body, Param, Query, UsePipes, UseGuards, ValidationPipe } from '@nestjs/common';
import { CreateAreaDto } from './dto/create-area.dto';
import { UpdateAreaDto } from './dto/update-area.dto';
import { AreaService } from './area.service';
import { Area } from './area.entity';

@Controller('area')
export class AreaController {
  constructor  (private areaService: AreaService) {}

  @Get()
  getAreas() {
    return this.areaService.getAreas();
  }

  @Get('/:id')
  getArea(
    @Param('id') id: number
  ) {
    return this.areaService.getArea(id);    
  }

  @Post()
  @UsePipes(ValidationPipe)
  createArea(
    @Body() createAreaDto: CreateAreaDto
  ): Promise<Area> {
    return this.areaService.createArea(createAreaDto);
  }

  @Patch('/:id')
  updateArea(
    @Param('id') id: number, 
    @Body() updateAreaDto: UpdateAreaDto,
  ): Promise<Area> {
    return this.areaService.updateArea(id, updateAreaDto);
  }

}