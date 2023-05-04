import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'medical_data' })
export class MedicalData {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  blood_type?: string;

  @Column()
  rh_factor?: string;

  @Column()
  medical_insurance?: string;

  @Column()
  medical_insurance_affiliate_number?: string;

  @Column()
  medical_insurance_phone_number?: string;

  @Column()
  emergency_person?: string;

  @Column()
  emergency_person_relationship?: string;

  @Column()
  emergency_person_phone_number?: string;

  @Column()
  has_chronic_desease?: boolean = false;

  @Column()
  chronic_desease_detail?: string;

  @Column()
  take_medication?: boolean = false;

  @Column()
  medication_detail?: string;

  @Column()
  has_medical_background?: boolean = false;

  @Column()
  medical_background_detail?: string;

  @Column()
  has_allergy?: boolean = false;

  @Column()
  allergy_detail?: string;

  @Column()
  has_specific_diet?: boolean = false;

  @Column()
  specific_diet_detail?: string;

  @Column()
  is_vegetarian?: boolean = false;

  @Column()
  doctor_name?: string;

  @Column()
  doctor_phone_number?: string;

  @Column()
  urgency_clinic?: string;

  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
  created_at?: Date;

  @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
  updated_at?: Date;
}

