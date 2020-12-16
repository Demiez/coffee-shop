import { IsOptional, IsPositive } from 'class-validator';

export class PaginationQueryDto {
  @IsOptional()
  @IsPositive()
  // @Type(() => Number) not needed with implicit conversion at main.ts
  limit: number;

  @IsOptional()
  @IsPositive()
  offset: number;
}
