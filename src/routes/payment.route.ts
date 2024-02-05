import { PaymentController } from '@/controllers';
import { IRoutes } from '@/interfaces';
import { wrapRequestHandler } from '@/utils/handles';
import { Router } from 'express';

class PaymentRoute implements IRoutes {
  public router = Router();
  public payment = new PaymentController();

  constructor() {
    this.initializeIRoutes();
  }
  private initializeIRoutes() {
    /**
     * @openapi
     * '/payment/:id':
     *  get:
     *     tags:
     *     - payment
     *     summary: Get payment by Id
     *     requestBody:
     *      required: true
     *      content:
     *        application/json:
     *           schema:
     *              $ref: '#/components/schemas/SignUpUserDto'
     *     responses:
     *      201:
     *        description: Created
     *      409:
     *        description: Conflict
     *      400:
     *        description: Bad request
     *      500:
     *        description: Internal server error
     *
     */
    this.router.get('/:id', wrapRequestHandler(this.payment.getPayment));

    /**
     * @openapi
     * '/payment':
     *  get:
     *     tags:
     *     - payment
     *     summary: Get categories
     *     requestBody:
     *      required: true
     *      content:
     *        application/json:
     *           schema:
     *              $ref: '#/components/schemas/SignUpUserDto'
     *     responses:
     *      201:
     *        description: Created
     *      409:
     *        description: Conflict
     *      400:
     *        description: Bad request
     *      500:
     *        description: Internal server error
     *
     */
    this.router.get('/', wrapRequestHandler(this.payment.getPayments));

    /**
     * @openapi
     * '/payment/:id':
     *  post:
     *     tags:
     *     - payment
     *     summary: Create payment
     *     requestBody:
     *      required: true
     *      content:
     *        application/json:
     *           schema:
     *              $ref: '#/components/schemas/SignUpUserDto'
     *     responses:
     *      201:
     *        description: Created
     *      409:
     *        description: Conflict
     *      400:
     *        description: Bad request
     *      500:
     *        description: Internal server error
     *
     */
    this.router.post('/', wrapRequestHandler(this.payment.createPayment));

    /**
     * @openapi
     * '/payment/:id':
     *  patch:
     *     tags:
     *     - payment
     *     summary: Update payment
     *     requestBody:
     *      required: true
     *      content:
     *        application/json:
     *           schema:
     *              $ref: '#/components/schemas/SignUpUserDto'
     *     responses:
     *      201:
     *        description: Created
     *      409:
     *        description: Conflict
     *      400:
     *        description: Bad request
     *      500:
     *        description: Internal server error
     *
     */
    this.router.patch('/:id', wrapRequestHandler(this.payment.updatePayment));

    /**
     * @openapi
     * '/payment/:id':
     *  delete:
     *     tags:
     *     - payment
     *     summary: Delete payment
     *     requestBody:
     *      required: true
     *      content:
     *        application/json:
     *           schema:
     *              $ref: '#/components/schemas/SignUpUserDto'
     *     responses:
     *      201:
     *        description: Created
     *      409:
     *        description: Conflict
     *      400:
     *        description: Bad request
     *      500:
     *        description: Internal server error
     *
     */
    this.router.delete('/:id', wrapRequestHandler(this.payment.deletePayment));
  }
}

export default PaymentRoute;
