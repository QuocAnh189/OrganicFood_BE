import { OrderItemController } from '@/controllers';
import { IRoutes } from '@/interfaces';
import { wrapRequestHandler } from '@/utils/handles';
import { Router } from 'express';

class OrderItemRoute implements IRoutes {
  public router = Router();
  public orderItem = new OrderItemController();

  constructor() {
    this.initializeIRoutes();
  }
  private initializeIRoutes() {
    /**
     * @openapi
     * '/orderItem/:id':
     *  get:
     *     tags:
     *     - orderItem
     *     summary: Get orderItem by Id
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
    this.router.get('/:id', wrapRequestHandler(this.orderItem.getOrderItem));

    /**
     * @openapi
     * '/orderItem':
     *  get:
     *     tags:
     *     - orderItem
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
    this.router.get('/', wrapRequestHandler(this.orderItem.getOrderItems));

    /**
     * @openapi
     * '/orderItem/:id':
     *  post:
     *     tags:
     *     - orderItem
     *     summary: Create orderItem
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
    this.router.post('/', wrapRequestHandler(this.orderItem.createOrderItem));

    /**
     * @openapi
     * '/orderItem/:id':
     *  patch:
     *     tags:
     *     - orderItem
     *     summary: Update orderItem
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
    this.router.patch('/:id', wrapRequestHandler(this.orderItem.updateOrderItem));

    /**
     * @openapi
     * '/orderItem/:id':
     *  delete:
     *     tags:
     *     - orderItem
     *     summary: Delete orderItem
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
    this.router.delete('/:id', wrapRequestHandler(this.orderItem.deleteOrderItem));
  }
}

export default OrderItemRoute;
