import { Response } from 'express';

export class BaseController {
    // Shared method to send success
    protected sendSuccess(res: Response, data: any, message: string = "Success") {
        return res.status(200).json({
            success: true,
            message,
            data
        });
    }

    // Shared method to send errors
    protected sendError(res: Response, error: string, code: number = 400) {
        return res.status(code).json({
            success: false,
            error
        });
    }
}
