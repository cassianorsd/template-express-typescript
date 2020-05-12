import { Router } from 'express';
import defaultRouter from './DefaultRouter';

const routes = Router();

routes.use('/', defaultRouter);

export default routes;
