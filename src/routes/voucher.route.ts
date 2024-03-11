import { Router } from 'express';

//controller
import { VoucherController } from '@/controllers';

//interface
import { IRoutes } from '@/interfaces';

//util
import { wrapRequestHandler } from '@/utils';

class VoucherRoute implements IRoutes {
  public router = Router();
  public voucher = new VoucherController();

  constructor() {
    this.initializeIRoutes();
  }
  private initializeIRoutes() {
    /**
     * @openapi
     * '/voucher/:id':
     *  get:
     *     tags:
     *     - voucher
     *     summary: Get voucher by Id
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
    this.router.get('/:id', wrapRequestHandler(this.voucher.getVoucher));

    /**
     * @openapi
     * '/voucher':
     *  get:
     *     tags:
     *     - voucher
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
    this.router.get('/', wrapRequestHandler(this.voucher.getVouchers));

    /**
     * @openapi
     * '/voucher/:id':
     *  post:
     *     tags:
     *     - voucher
     *     summary: Create voucher
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
    this.router.post('/', wrapRequestHandler(this.voucher.createVoucher));

    /**
     * @openapi
     * '/voucher/:id':
     *  patch:
     *     tags:
     *     - voucher
     *     summary: Update voucher
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
    this.router.patch('/:id', wrapRequestHandler(this.voucher.updateVoucher));

    /**
     * @openapi
     * '/voucher/:id':
     *  delete:
     *     tags:
     *     - voucher
     *     summary: Delete voucher
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
    this.router.delete('/:id', wrapRequestHandler(this.voucher.deleteVoucher));
  }
}

export default VoucherRoute;
