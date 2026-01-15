import { IsNumber, IsOptional, IsIn } from 'class-validator';
import { Type } from 'class-transformer';

export class ConvertQueryDto {
  @Type(() => Number)
  @IsNumber()
  value!: number;

  @IsIn(['px', 'rem', 'em'])
  from!: 'px' | 'rem' | 'em';

  @IsIn(['px', 'rem', 'em'])
  to!: 'px' | 'rem' | 'em';

  @Type(() => Number)
  @IsOptional()
  @IsNumber()
  base?: number;
}
