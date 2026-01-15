import { Controller, Get, Query } from '@nestjs/common';
import { ConvertService } from './convert.service';

@Controller('v1/convert')
export class ConvertController {
  constructor(private readonly convertService: ConvertService) {}

  @Get()
  convert(
    @Query('value') value: string,
    @Query('from') from: string,
    @Query('to') to: string,
    @Query('base') base?: string,
  ) {
    // Parse numbers manually
    const numValue = Number(value);
    const baseValue = base ? Number(base) : 16;

    // Validate required fields
    if (!numValue || !from || !to) {
      return {
        error: 'Missing required query parameters: value, from, to',
      };
    }

    const result = this.convertService.convert(numValue, from, to, baseValue);

    return {
      input: numValue,
      from,
      to,
      base: baseValue,
      result,
    };
  }
}
