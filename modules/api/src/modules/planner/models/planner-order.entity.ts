import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'planner_orders' })
export class PlannerOrder {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  orders: string;

  @Column({ type: 'date' })
  date: string;

  @Column()
  userId: number;
}
