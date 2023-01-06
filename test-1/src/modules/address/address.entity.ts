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
export class Address extends CommonField {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  no: string;

  @Column()
  moo: string;

  @Column()
  road?: string;

  @Column()
  tambol: string;

  @Column()
  amphure: string;

  @Column()
  province: string;

  @Column()
  zipCode: string;

  @OneToOne(() => User)
  user: User;
}
