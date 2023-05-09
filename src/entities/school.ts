import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from 'typeorm';
import { Location } from './location';

export type Statuses = "pending" | "active";

@Entity({ name: 'schools' })
export class School {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({
    type: 'enum',
    enum: ["pending", "active"],
    default: "pending",
    nullable: false
  })
  status?: Statuses;

  @Column()
  name?: string;

  @Column()
  phone?: string;

  @Column()
  fax?: string;

  @Column()
  email?: string;

  @Column()
  cue?: string;

  @Column()
  director_name?: string;

  @Column()
  referent_name?: string;

  @OneToOne(() => Location, { cascade: true, onDelete: 'CASCADE' })
  @JoinColumn()
  location?: Location;

  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
  created_at?: Date;

  @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
  updated_at?: Date;
}