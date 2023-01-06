import { CommonField } from 'src/common/common-field';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { User } from '../users/user.entity';

@Entity()
export class HistoryTaking extends CommonField {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  covidCheckDate: Date;

  @Column({
    type: 'enum',
    enum: ['positive', 'negative'],
  })
  covidResult: string;

  @Column()
  isVaccinated: boolean;

  @Column()
  isRegularDisease: boolean;

  @Column('simple-array', { nullable: true })
  regularDiseaseList?: string[];

  @OneToOne(() => User)
  user: User;
}
