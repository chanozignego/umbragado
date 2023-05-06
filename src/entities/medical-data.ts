import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'medical_data' })
export class MedicalData {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  blood_type?: string;

  @Column()
  rh_factor?: string;

  @Column({nullable: true})
  medical_insurance?: string;

  @Column({nullable: true})
  medical_insurance_affiliate_number?: string;

  @Column({nullable: true})
  medical_insurance_phone_number?: string;

  @Column()
  emergency_person?: string;

  @Column()
  emergency_person_relationship?: string;

  @Column()
  emergency_person_phone_number?: string;

  @Column()
  has_chronic_desease?: boolean = false;

  @Column({nullable: true})
  chronic_desease_detail?: string;

  @Column({default: false})
  take_medication?: boolean = false;

  @Column({nullable: true})
  medication_detail?: string;

  @Column({default: false})
  has_medical_background?: boolean = false;

  @Column({nullable: true})
  medical_background_detail?: string;

  @Column({default: false})
  has_allergy?: boolean = false;

  @Column({nullable: true})
  allergy_detail?: string;

  @Column({default: false})
  has_specific_diet?: boolean = false;

  @Column({nullable: true})
  specific_diet_detail?: string;

  @Column({default: false})
  is_vegetarian?: boolean = false;

  @Column()
  doctor_name?: string;

  @Column()
  doctor_phone_number?: string;

  @Column({nullable: true})
  urgency_clinic?: string;

  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
  created_at?: Date;

  @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
  updated_at?: Date;
}

