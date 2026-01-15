import { Module } from '@nestjs/common';
import { ConvertModule } from './convert/convert.module';

@Module({
  imports: [ConvertModule],  // register the convert module
  controllers: [],
  providers: [],
})
export class AppModule {}