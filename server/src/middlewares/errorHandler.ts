import { NextFunction, Response , Request} from "express"


const notFoundHandler = (req: Request, res: Response, next: NextFunction) => {
    const error :any= new Error('Not Found');
    error.statusCode = 404
    res.status(404);
    next(error);
};

const errorHandler = (error: any, req: Request, res: Response, next: NextFunction)=>{
    console.log("Middleware Error Hadnling");
    const errStatus = error.statusCode || 500;
    const errMsg = error.message || 'Something went wrong';
    res.status(errStatus).json({
        success: false,
        status: errStatus,
        message: errMsg,
        stack: process.env.NODE_ENV === 'development' ? error.stack : {}
    })
}
export {errorHandler, notFoundHandler}