import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Planner } from './planner.entity';

@Injectable()
export class PlannerDAO {
  constructor(
    @InjectRepository(Planner)
    private readonly plannerRepository: Repository<Planner>,
  ) {}

  async getRecommendedOne(userId: number, date: string) {
    return this.plannerRepository.findOneBy({ userId, date });
  }

  async getMany(orders: string) {
    const plannerIds = orders
      .split(',')
      .map((order) => Number.parseInt(order, 10));

    const planner = await this.plannerRepository
      .createQueryBuilder()
      .whereInIds(plannerIds)
      .orderBy(`FIELD(id, ${orders})`)
      .getMany();

    return planner;
  }
}
