import { Statuses } from "../entities/school";
import { NewLocation } from "./common";

export interface NewSchool {
    status?: Statuses;
    name: string;
    phone: string;
    fax?: string;
    email: string;
    cue: string;
    director_name?: string;
    referent_name?: string;
    location: NewLocation;
};

export interface CreateSchool {
    Body: NewSchool;
};

export interface UpdateSchool {
    Body: NewSchool;
    Params: {
        id: string;
    };
};

export interface DeleteSchool {
    Params: {
        id: string;
    };
};

export interface GetSchool {
    Params: {
        id: string;
    };
};