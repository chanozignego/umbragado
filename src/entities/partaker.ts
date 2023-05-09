import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn, Column, ManyToOne } from 'typeorm';
import { MedicalData } from './medical-data';
import { PersonalData } from './personal-data';
import { Professor } from './professor';
import { School } from './school';

@Entity({ name: 'partakers' })
export class Partaker {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({default: 'delegate', nullable: false})
  type?: string;

  @Column({nullable: true})
  rol?: string;

  @Column({default: false})
  participated?: boolean;

  @Column({default: false})
  graduated?: boolean;

  @Column({nullable: true})
  school_year?: number;

  @ManyToOne(() => School, { cascade: true })
  @JoinColumn()
  school?: School;

  @ManyToOne(() => Professor, { cascade: true })
  @JoinColumn()
  professor?: Professor;

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