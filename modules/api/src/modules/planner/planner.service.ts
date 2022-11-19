import { Injectable } from '@nestjs/common';
import { PlannerOrderDAO } from './models/planner-order.dao';
import { PlannerDAO } from './models/planner.dao';

@Injectable()
export class PlannerService {
  constructor(
    private readonly plannerDAO: PlannerDAO,
    private readonly plannerOrderDAO: PlannerOrderDAO,
  ) {}

  async getOne(userId: number, date: string) {
    const orders = await this.plannerOrderDAO.getOne(userId, date);

    const recommendedPlanner = await this.plannerDAO.getRecommendedOne(
      userId,
      date,
    );

    const planners = await this.plannerDAO.getMany(orders);

    return {
      recommended: recommendedPlanner,
      todo: planners,
    };
  }
}
