import { Router } from 'express';

const defaultRouter = Router();

defaultRouter.get('/', (req, res) => {
  return res.json({ api: 'GeoAPIv3' });
});

export default defaultRouter;
