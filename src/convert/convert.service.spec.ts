import { Controller, Get, Query } from '@nestjs/common';
import { ConvertService } from './convert.service';
import { ConvertQueryDto } from './dto/convert-query.dto';

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
