import { Request } from 'express';

export interface IExtendedRequest extends Request {
    query: {
        category: string
    }
}
