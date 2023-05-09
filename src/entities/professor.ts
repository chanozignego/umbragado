import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn, Column } from 'typeorm';
import { MedicalData } from './medical-data';
import { PersonalData } from './personal-data';

export type Statuses = "pending" | "active";

@Entity({ name: 'professors' })
export class Professor {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({
    type: 'enum',
    enum: ["pending", "active"],
    default: "pending",
    nullable: false
  })
  status?: Statuses;

  @OneToOne(() => PersonalData, { cascade: true, onDelete: 'CASCADE' })
  @JoinColumn()
  personal_data?: PersonalData;

  @OneToOne(() => MedicalData, { cascade: true, onDelete: 'CASCADE' })
  @JoinColumn()
  medical_data?: MedicalData;

  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
  created_at?: Date;

  @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
  updated_at?: Date;
}