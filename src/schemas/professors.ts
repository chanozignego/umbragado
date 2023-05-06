import { NewMedicalData, NewPersonalData } from "./common";

export interface NewProfessor {
    personal_data: NewPersonalData;
    medical_data: NewMedicalData;
};

export interface CreateProfessor {
    Body: NewProfessor;
};

export interface UpdateProfessor {
    Body: NewProfessor;
    Params: {
        id: string;
    };
};

export interface DeleteProfessor {
    Params: {
        id: string;
    };
};

export interface GetProfessor {
    Params: {
        id: string;
    };
};