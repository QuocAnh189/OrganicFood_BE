import { VendorController } from '@/controllers';
import { IRoutes } from '@/interfaces';
import { wrapRequestHandler } from '@/utils/handles';
import { Router } from 'express';

class VendorRoute implements IRoutes {
  public router = Router();
  public vendor = new VendorController();

  constructor() {
    this.initializeIRoutes();
  }
  private initializeIRoutes() {
    /**
     * @openapi
     * '/vendor/:id':
     *  get:
     *     tags:
     *     - vendor
     *     summary: Get vendor by Id
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
    this.router.get('/:id', wrapRequestHandler(this.vendor.getVendor));

    /**
     * @openapi
     * '/vendor':
     *  get:
     *     tags:
     *     - vendor
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
    this.router.get('/', wrapRequestHandler(this.vendor.getVendors));

    /**
     * @openapi
     * '/vendor/:id':
     *  post:
     *     tags:
     *     - vendor
     *     summary: Create vendor
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
    this.router.post('/', wrapRequestHandler(this.vendor.createVendor));

    /**
     * @openapi
     * '/vendor/:id':
     *  patch:
     *     tags:
     *     - vendor
     *     summary: Update vendor
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
    this.router.patch('/:id', wrapRequestHandler(this.vendor.updateVendor));

    /**
     * @openapi
     * '/vendor/:id':
     *  delete:
     *     tags:
     *     - vendor
     *     summary: Delete vendor
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
    this.router.delete('/:id', wrapRequestHandler(this.vendor.deleteVendor));
  }
}

export default VendorRoute;
