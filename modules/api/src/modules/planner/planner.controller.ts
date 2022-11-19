import { Controller, Get, Query } from '@nestjs/common';
import { PlannerService } from './planner.service';

@Controller('planner')
export class PlannerController {
  constructor(private readonly plannerService: PlannerService) {}

  @Get()
  async getOne(@Query() { userId, date }) {
    return this.plannerService.getOne(Number.parseInt(userId, 10), date);
  }
}
