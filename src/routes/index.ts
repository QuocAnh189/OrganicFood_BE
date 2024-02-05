import { Router } from 'express';
import { PATHS } from '@/constants';

import AddressRoute from './address.route';
import AuthRoute from './auth.route';
import CartRoute from './cart.route';
import CategoryRoute from './category.route';
import OrderRoute from './order.route';
import OrderItemRoute from './orderItem.route';
import PaymentRoute from './payment.route';
import ProductRoute from './product.route';
import PromotionRoute from './promotion.route';
import RateRoute from './rate.route';
import ShipperRoute from './shipper.route';
import StoreRoute from './store.route';
import UserRoute from './user.route';
import VendorRoute from './vendor.route';
import VoucherRoute from './voucher.route';

const route = Router();

route.use(PATHS.ADDRESS, new AddressRoute().router);
route.use(PATHS.AUTH, new AuthRoute().router);
route.use(PATHS.CART, new CartRoute().router);
route.use(PATHS.CATEGORY, new CategoryRoute().router);
route.use(PATHS.ORDER, new OrderRoute().router);
route.use(PATHS.ORDERITEM, new OrderItemRoute().router);
route.use(PATHS.PAYMENT, new PaymentRoute().router);
route.use(PATHS.PRODUCT, new ProductRoute().router);
route.use(PATHS.PROMOTION, new PromotionRoute().router);
route.use(PATHS.RATE, new RateRoute().router);
route.use(PATHS.SHIPPER, new ShipperRoute().router);
route.use(PATHS.STORE, new StoreRoute().router);
route.use(PATHS.USER, new UserRoute().router);
route.use(PATHS.VENDOR, new VendorRoute().router);
route.use(PATHS.VOUCHER, new VoucherRoute().router);

export default route;
