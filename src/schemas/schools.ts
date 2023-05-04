export interface NewSchool {
    name: string;
    phone: string;
    fax?: string;
    email: string;
    cue: string;
    director_name?: string;
    referent_name?: string;
    location: NewLocation;
};

export interface NewLocation {
    id?: number;
    province?: string;
    city?: string;
    address?: string;
    zip_code?: string;
    details?: string;
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