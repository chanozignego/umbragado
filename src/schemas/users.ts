export interface NewUser {
    name: string;
    email: string;
    password: string;
    role: string;
};

export interface Session {
    email: string;
    password: string;
};

export interface CreateUser {
    Body: NewUser;
};

export interface UpdateUser {
    Body: NewUser;
    Params: {
        id: string;
    };
};

export interface DeleteUser {
    Params: {
        id: string;
    };
};

export interface AuthUser {
    Body: Session;
};
