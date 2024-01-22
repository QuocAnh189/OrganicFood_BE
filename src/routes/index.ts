import { Router } from 'express';
import { PATHS } from '@/constants';

import AuthRoute from './auth.route';
const route = Router();

route.use(PATHS.AUTH, new AuthRoute().router);

export default route;
