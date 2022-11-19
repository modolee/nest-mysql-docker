import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { PlannerModule } from './modules/planner/planner.modules';

@Module({
  imports: [DatabaseModule, PlannerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
