import { NextFunction, Request, Response } from 'express';

import { IExtendedRequest } from '../interfaces';
import { CustomError } from '../errors';
import { constants } from '../constants';
import { useJoiValidator } from '../hooks';

export const validationMiddlewares = {
  validateBySchema: (requestObject: string, schema: any) => (req: Request | IExtendedRequest, res: Response, next: NextFunction) => {
    try {
      const objectToValidate = req[requestObject];

      const [
        error,
        value
      ] = useJoiValidator(objectToValidate, schema);

      if (error) {
        throw new CustomError(error, constants.statusCodesEnum.BAD_REQUEST);
      }

      req[requestObject] = value;

      next();
    } catch (e) {
      next(e);
    }
  }
};
