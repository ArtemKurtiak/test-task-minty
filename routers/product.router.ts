import { Router } from 'express';

import { productController } from '../controllers';
import { validationMiddlewares } from '../middlewares';
import { getProductsByCategoriesValidator } from '../validators';

const router = Router();

router.get('/unique-categories', productController.getUniqueCategories);

router.get('/products',
  validationMiddlewares.validateBySchema('query', getProductsByCategoriesValidator),
  productController.getProductsByCategory);

router.get('/products-category-amount', productController.getCategoryProductsAmount);

export const productRouter = router;
