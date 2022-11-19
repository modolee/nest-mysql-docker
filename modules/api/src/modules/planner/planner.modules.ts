import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlannerOrderDAO } from './models/planner-order.dao';
import { PlannerOrder } from './models/planner-order.entity';
import { PlannerDAO } from './models/planner.dao';
import { Planner } from './models/planner.entity';
import { PlannerController } from './planner.controller';
import { PlannerService } from './planner.service';

@Module({
  imports: [TypeOrmModule.forFeature([Planner, PlannerOrder])],
  providers: [PlannerService, PlannerDAO, PlannerOrderDAO],
  controllers: [PlannerController],
})
export class PlannerModule {}
