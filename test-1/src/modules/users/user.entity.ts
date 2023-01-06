import { HistoryTaking } from '../history-taking/history-taking.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Address } from '../address/address.entity';
import { CommonField } from 'src/common/common-field';

@Entity()
export class User extends CommonField {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'enum',
    enum: ['นาย', 'นาง', 'นางสาว', 'เด็กชาย', 'เด็กหญิง'],
  })
  title: string;

  @Column()
  citizenId: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({
    type: 'enum',
    enum: ['ชาย', 'หญิง'],
  })
  gender: string;

  @Column()
  dateOfBirth: Date;

  @Column({ type: 'float' })
  weight: number;

  @Column({ type: 'float' })
  height: number;

  @Column()
  phone: string;

  @Column()
  addressId: number;

  @Column()
  historyTakingId: number;

  @OneToOne(() => Address)
  @JoinColumn()
  address: Address;

  @OneToOne(() => HistoryTaking)
  @JoinColumn()
  historyTaking: HistoryTaking;
}
