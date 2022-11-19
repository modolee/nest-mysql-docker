import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PlannerOrder } from './planner-order.entity';

@Injectable()
export class PlannerOrderDAO {
  constructor(
    @InjectRepository(PlannerOrder)
    private readonly plannerOrderRepository: Repository<PlannerOrder>,
  ) {}

  async getOne(userId: number, date: string) {
    const plannerOrder = await this.plannerOrderRepository.findOneBy({
      userId,
      date,
    });

    console.log({ plannerOrder });

    return plannerOrder?.orders;
  }
}
