import { BloodTypes, RHFactors } from "../entities/medical-data";

export interface NewPersonalData {
    id?: number;
    first_name?: string;
    last_name?: string;
    dni?: string;
    birthdate?: Date;
    age?: number;
    phone?: string;
    email?: string;
    location?: NewLocation;
};

export interface NewMedicalData {
    id?: number;
    blood_type?: BloodTypes;
    rh_factor?: RHFactors;
    medical_insurance?: string;
    medical_insurance_affiliate_number?: string;
    medical_insurance_phone_number?: string;
    emergency_person?: string;
    emergency_person_relationship?: string;
    emergency_person_phone_number?: string;
    has_chronic_desease?: boolean;
    chronic_desease_detail?: string;
    take_medication?: boolean;
    medication_detail?: string;
    has_medical_background?: boolean;
    medical_background_detail?: string;
    has_allergy?: boolean;
    allergy_detail?: string;
    has_specific_diet?: boolean;
    specific_diet_detail?: string;
    is_vegetarian?: boolean;
    doctor_name?: string;
    doctor_phone_number?: string;
    urgency_clinic?: string;
};

export interface NewLocation {
    id?: number;
    province?: string;
    city?: string;
    address?: string;
    zip_code?: string;
    details?: string;
};
