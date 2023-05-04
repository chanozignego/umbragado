import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'personal_data' })
export class PersonalData {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  first_name?: string;

  @Column()
  last_name?: string;

  @Column()
  dni?: string;

  @Column()
  birthdate?: Date;

  @Column()
  age?: number;

  @Column()
  phone?: string;

  @Column()
  email?: string;

  @OneToOne(() => Location, { onDelete: 'CASCADE' })
  @JoinColumn()
  location?: Location;

  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
  created_at?: Date;

  @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
  updated_at?: Date;
}

