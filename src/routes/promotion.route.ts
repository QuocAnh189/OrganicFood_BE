import { Router } from 'express';

//controller
import { ProductController } from '@/controllers';

//interface
import { IRoutes } from '@/interfaces';

//util
import { wrapRequestHandler } from '@/utils/handles';

class PromotionRoute implements IRoutes {
  public router = Router();
  public promotion = new ProductController();

  constructor() {
    this.initializeIRoutes();
  }
  private initializeIRoutes() {
    /**
     * @openapi
     * '/promotion/:id':
     *  get:
     *     tags:
     *     - promotion
     *     summary: Get promotion by Id
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
    this.router.get('/:id', wrapRequestHandler(this.promotion.getProduct));

    /**
     * @openapi
     * '/promotion':
     *  get:
     *     tags:
     *     - promotion
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
    this.router.get('/', wrapRequestHandler(this.promotion.getProducts));

    /**
     * @openapi
     * '/promotion/:id':
     *  post:
     *     tags:
     *     - promotion
     *     summary: Create promotion
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
    this.router.post('/', wrapRequestHandler(this.promotion.createProduct));

    /**
     * @openapi
     * '/promotion/:id':
     *  patch:
     *     tags:
     *     - promotion
     *     summary: Update promotion
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
    this.router.patch('/:id', wrapRequestHandler(this.promotion.updateProduct));

    /**
     * @openapi
     * '/promotion/:id':
     *  delete:
     *     tags:
     *     - promotion
     *     summary: Delete promotion
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
    this.router.delete('/:id', wrapRequestHandler(this.promotion.deleteProduct));
  }
}

export default PromotionRoute;
