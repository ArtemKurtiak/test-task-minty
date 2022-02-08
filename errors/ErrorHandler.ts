import { NextFunction, Request, Response } from 'express';

import { constants } from '../constants';
import { ICustomError } from '../interfaces';

export const _errorHandler = (err: ICustomError, req: Request, res: Response, _: NextFunction) => {
  const { message = 'Server error', status = constants.statusCodesEnum.SERVER_ERROR } = err;

  res
    .status(status)
    .json({ message });
};
