import { CreateDateColumn, UpdateDateColumn } from 'typeorm';

export class CommonField {
  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  updatedDate: Date;
}
