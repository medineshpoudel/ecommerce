import { NextFunction, Response , Request} from "express"
import {SOMETHING_WENT_WRONG, NOT_FOUND} from "../controllers/staticLists";


const notFoundHandler = (req: Request, res: Response, next: NextFunction) => {
    const error :any= new Error(NOT_FOUND);
    error.statusCode = 404
    res.status(404);
    next(error);
};

const errorHandler = (error: any, req: Request, res: Response, next: NextFunction)=>{
    const errStatus = error.statusCode || 500;
    const errMsg = error.message || SOMETHING_WENT_WRONG;
    res.status(errStatus).json({
        success: false,
        status: errStatus,
        message: errMsg,
        stack: process.env.NODE_ENV === 'development' ? error.stack : {}
    })
}
export {errorHandler, notFoundHandler}