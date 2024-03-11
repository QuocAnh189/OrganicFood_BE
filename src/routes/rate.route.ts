import { Router } from 'express';

//controller
import { RateController } from '@/controllers';

//interface
import { IRoutes } from '@/interfaces';

//util
import { wrapRequestHandler } from '@/utils';

class RateRoute implements IRoutes {
  public router = Router();
  public rate = new RateController();

  constructor() {
    this.initializeIRoutes();
  }
  private initializeIRoutes() {
    /**
     * @openapi
     * '/rate/:id':
     *  get:
     *     tags:
     *     - rate
     *     summary: Get rate by Id
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
    this.router.get('/:id', wrapRequestHandler(this.rate.getRate));

    /**
     * @openapi
     * '/rate':
     *  get:
     *     tags:
     *     - rate
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
    this.router.get('/', wrapRequestHandler(this.rate.getRates));

    /**
     * @openapi
     * '/rate/:id':
     *  post:
     *     tags:
     *     - rate
     *     summary: Create rate
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
    this.router.post('/', wrapRequestHandler(this.rate.createRate));

    /**
     * @openapi
     * '/rate/:id':
     *  patch:
     *     tags:
     *     - rate
     *     summary: Update rate
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
    this.router.patch('/:id', wrapRequestHandler(this.rate.updateRate));

    /**
     * @openapi
     * '/rate/:id':
     *  delete:
     *     tags:
     *     - rate
     *     summary: Delete rate
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
    this.router.delete('/:id', wrapRequestHandler(this.rate.deleteRate));
  }
}

export default RateRoute;
