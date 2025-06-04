
export const errrorHandler = (err, req, res, next) => {
    if (err instanceof AppError) {
        return res.status(err.statusCode).json({
            status: err.status,
            message: err.message
        });
    }
    
    //fallback for unhandled errors
    console.log(err);
    return res.status(500).json({
        status: 'error',
        message: err.message ||'Internal Server Error!'
    });
}

export class AppError extends Error {
    statusCode;
    isOperational;

    constructor(statusCode = 500, message, isOperational = true) {
        super(message);
        this.statusCode = statusCode;
        this.isOperational = isOperational;

        // Capture the stack trace
        Error.captureStackTrace(this, this.constructor);
    }
}

export class  NotFoundError extends AppError {
    constructor(message = 'Not Found') {
        super(404, message);
    }
}
export class ConflictError extends AppError {
    constructor(message = 'Conflict Occurred') {
        super(409, message);
    }
}


export class BadRequestError extends AppError {
    constructor(message = 'Bad Request') {
        super(400, message);
    }
}

export class UnauthorizedError extends AppError {
    constructor(message = 'Unauthorized') {
        super(401, message);
    }
}