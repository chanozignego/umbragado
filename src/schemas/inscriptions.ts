import { InscriptionStatuses, InscriptionTypes } from "../entities/inscription";
import { NewPartaker } from "./partakers";
import { NewProfessor } from "./professors";
import { NewSchool } from "./schools";

export interface NewInscription {
    type: InscriptionTypes;
    status: InscriptionStatuses;
    school?: NewSchool;
    professor?: NewProfessor;
    partaker?: NewPartaker;
};

export interface CreateInscription {
    Body: NewInscription;
};

export interface UpdateInscription {
    Body: NewInscription;
    Params: {
        id: string;
    };
};

export interface DeleteInscription {
    Params: {
        id: string;
    };
};

export interface GetInscription {
    Params: {
        id: string;
    };
};