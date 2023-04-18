export class HandlerError extends Error {
    status: number;
  
    constructor(message: string, status: number) {
      super(message);
      this.status = status;
    }
  }
  
  export class InvalidRequestError extends HandlerError {
    constructor(message: string) {
      super(message, 400);
    }
  }
  
  export class NotFoundError extends HandlerError {
    constructor(message: string) {
      super(message, 404);
    }
  }
  