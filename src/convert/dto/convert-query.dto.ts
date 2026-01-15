import { IsNumber, IsOptional, IsIn } from 'class-validator';
import { Type } from 'class-transformer';

export class ConvertQueryDto {
  @Type(() => Number)
  @IsNumber()
  value!: number;  // Note the "!" tells TS this will be initialized

  @IsIn(['px', 'rem', 'em'])
  from!: 'px' | 'rem' | 'em';

  @IsIn(['px', 'rem', 'em'])
  to!: 'px' | 'rem' | 'em';

  @Type(() => Number)
  @IsOptional()
  base?: number;  // Optional, no "!" needed
}
