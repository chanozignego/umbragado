import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, JoinColumn, Column, ManyToOne } from 'typeorm';
import { Partaker } from './partaker';
import { Professor } from './professor';
import { School } from './school';

export type InscriptionTypes = "delegate" | "authority" | "school" | "professor";
export type InscriptionStatuses = "pending" | "approved" | "rejected";

@Entity({ name: 'inscriptions' })
export class Inscription {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({
    type: 'enum',
    enum: ["delegate", "authority", "school", "professor"],
    default: "delegate",
    nullable: false
  })
  type?: InscriptionTypes;

  @Column({
    type: 'enum',
    enum: ["pending", "approved", "rejected"],
    default: "pending",
    nullable: false
  })
  status?: InscriptionStatuses;

  @ManyToOne(() => School, { cascade: true })
  @JoinColumn()
  school?: School;

  @ManyToOne(() => Professor, { cascade: true })
  @JoinColumn()
  professor?: Professor;

  @ManyToOne(() => Partaker, { cascade: true })
  @JoinColumn()
  partaker?: Partaker;

  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
  created_at?: Date;

  @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
  updated_at?: Date;
}