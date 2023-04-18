import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

import { User } from './user';

@Entity({ name: 'tokens' })
export class Token {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  value?: string;

  @Column()
  userId?: number;

  @OneToOne(() => User, { onDelete: 'CASCADE' })
  user?: User;
}
