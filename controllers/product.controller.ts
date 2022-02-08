import { NextFunction, Request, Response } from 'express';

import { Product } from '../database/models/product.model';
import { statusCodesEnum } from '../constants/statusCodesEnum';
import { IExtendedRequest } from '../interfaces';

export const productController = {
  getUniqueCategories: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const products = await Product.aggregate([
        {
          $match: {}
        },
        {
          $group: {
            _id: '$category',
            name: { $first: '$category' }
          }
        },
        {
          $unset: ['_id']
        }
      ]);

      res.status(statusCodesEnum.SUCCESS).json(products);
    } catch (e) {
      next(e);
    }
  },

  getProductsByCategory: async (req: IExtendedRequest, res: Response, next: NextFunction) => {
    try {
      const { category } = req.query;

      const products = await Product.find({
        category
      });

      res.status(statusCodesEnum.SUCCESS).json(products);
    } catch (e) {
      next(e);
    }
  },

  getCategoryProductsAmount: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const products = await Product.aggregate([
        {
          $match: {}
        },
        {
          $group: {
            _id: '$category',
            name: { $first: '$category' },
            count: { $sum: 1 }
          }
        },
        {
          $unset: ['_id']
        }
      ]);

      res.status(statusCodesEnum.SUCCESS).json(products);
    } catch (e) {
      next(e);
    }
  }
};
