import { Router } from 'express';

//controller
import { CartController } from '@/controllers';

//interface
import { IRoutes } from '@/interfaces';

//util
import { wrapRequestHandler } from '@/utils';

class CartRoute implements IRoutes {
  public router = Router();
  public cart = new CartController();

  constructor() {
    this.initializeIRoutes();
  }
  private initializeIRoutes() {
    /**
     * @openapi
     * '/cart/:id':
     *  get:
     *     tags:
     *     - cart
     *     summary: Get cart by Id
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
    this.router.get('/:id', wrapRequestHandler(this.cart.getCart));

    /**
     * @openapi
     * '/cart':
     *  get:
     *     tags:
     *     - cart
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
    this.router.get('/', wrapRequestHandler(this.cart.getCarts));

    /**
     * @openapi
     * '/cart/:id':
     *  post:
     *     tags:
     *     - cart
     *     summary: Create cart
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
    this.router.post('/', wrapRequestHandler(this.cart.createCart));

    /**
     * @openapi
     * '/cart/:id':
     *  patch:
     *     tags:
     *     - cart
     *     summary: Update cart
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
    this.router.patch('/:id', wrapRequestHandler(this.cart.updateCart));

    /**
     * @openapi
     * '/cart/:id':
     *  delete:
     *     tags:
     *     - cart
     *     summary: Delete cart
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
    this.router.delete('/:id', wrapRequestHandler(this.cart.deleteCart));
  }
}

export default CartRoute;
