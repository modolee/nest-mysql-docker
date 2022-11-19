import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'planners' })
export class Planner {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @Column({ type: 'date' })
  date: string;

  @Column()
  isRecommended: boolean;

  @Column()
  isCompleted: boolean;

  @Column()
  userId: number;
}
