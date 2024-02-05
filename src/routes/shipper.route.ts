import { ShipperController } from '@/controllers';
import { IRoutes } from '@/interfaces';
import { wrapRequestHandler } from '@/utils/handles';
import { Router } from 'express';

class ShipperRoute implements IRoutes {
  public router = Router();
  public shipper = new ShipperController();

  constructor() {
    this.initializeIRoutes();
  }
  private initializeIRoutes() {
    /**
     * @openapi
     * '/shipper/:id':
     *  get:
     *     tags:
     *     - shipper
     *     summary: Get shipper by Id
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
    this.router.get('/:id', wrapRequestHandler(this.shipper.getShipper));

    /**
     * @openapi
     * '/shipper':
     *  get:
     *     tags:
     *     - shipper
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
    this.router.get('/', wrapRequestHandler(this.shipper.getShippers));

    /**
     * @openapi
     * '/shipper/:id':
     *  post:
     *     tags:
     *     - shipper
     *     summary: Create shipper
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
    this.router.post('/', wrapRequestHandler(this.shipper.createShipper));

    /**
     * @openapi
     * '/shipper/:id':
     *  patch:
     *     tags:
     *     - shipper
     *     summary: Update shipper
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
    this.router.patch('/:id', wrapRequestHandler(this.shipper.updateShipper));

    /**
     * @openapi
     * '/shipper/:id':
     *  delete:
     *     tags:
     *     - shipper
     *     summary: Delete shipper
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
    this.router.delete('/:id', wrapRequestHandler(this.shipper.deleteShipper));
  }
}

export default ShipperRoute;
