import { Controller, Get, Post, Delete, Patch, Body, Param, Query, UsePipes, UseGuards, ValidationPipe } from '@nestjs/common';
import { CreateSanitizerDto } from './dto/create-sanitizer.dto';
import { UpdateSanitizerDto } from './dto/update-sanitizer.dto';
import { SanitizerService } from './sanitizer.service';
import { Sanitizer } from './sanitizer.entity';

@Controller('sanitizer')
export class SanitizerController {
  constructor  (private sanitizerService: SanitizerService) {}

  @Get()
  getSanitizers() {
    return this.sanitizerService.getSanitizers();
  }

  @Get('/:id')
  getSanitizer(
    @Param('id') id: number
  ) {
    return this.sanitizerService.getSanitizer(id);    
  }

  @Post()
  @UsePipes(ValidationPipe)
  createSanitizer(
    @Body() createSanitizerDto: CreateSanitizerDto
  ): Promise<Sanitizer> {
    return this.sanitizerService.createSanitizer(createSanitizerDto);
  }

  @Patch('/:id')
  updateSanitizer(
    @Param('id') id: number, 
    @Body() updateSanitizerDto: UpdateSanitizerDto,
  ): Promise<Sanitizer> {
    return this.sanitizerService.updateSanitizer(id, updateSanitizerDto);
  }

}