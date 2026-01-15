import { Controller, Get, Query } from '@nestjs/common';
// ONLY import type because it's used in the signature, not at runtime
import type { ConvertQueryDto } from './dto/convert-query.dto';
import { ConvertService } from './convert.service';

@Controller('v1/convert')
export class ConvertController {
  constructor(private readonly convertService: ConvertService) {}

  @Get()
  convert(@Query() query: ConvertQueryDto) {
    const { value, from, to, base } = query;

    const result = this.convertService.convert(value, from, to, base);

    return {
      input: value,
      from,
      to,
      base: base ?? 16,
      result,
    };
  }
}

