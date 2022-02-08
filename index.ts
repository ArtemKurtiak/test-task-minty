import express from 'express';
import mongoose from 'mongoose';

require('dotenv').config();

import { constants } from './constants';
import { productRouter } from './routers';
import { _errorHandler } from './errors';

mongoose.connect(constants.MONGO_URL);

const app = express();

app.use('/api', productRouter);

app.use(_errorHandler);

app.listen(constants.PORT, () => {
  console.log(`Server started on port ${constants.PORT}`);
});

