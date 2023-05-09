import { NewMedicalData, NewPersonalData } from "./common";

export interface NewPartaker {
    type?: string;
    rol?: string;
    participated?: boolean;
    graduated?: boolean;
    school_year?: number;
    schoolId?: number;
    professorId?: number;
    personal_data: NewPersonalData;
    medical_data: NewMedicalData;
};

export interface CreatePartaker {
    Body: NewPartaker;
};

export interface UpdatePartaker {
    Body: NewPartaker;
    Params: {
        id: string;
    };
};

export interface DeletePartaker {
    Params: {
        id: string;
    };
};

export interface GetPartaker {
    Params: {
        id: string;
    };
};