import { Router } from 'express';

//controller
import { CategoryController } from '@/controllers';

//interface
import { IRoutes } from '@/interfaces';

//util
import { wrapRequestHandler } from '@/utils';

class CategoryRoute implements IRoutes {
  public router = Router();
  public category = new CategoryController();

  constructor() {
    this.initializeIRoutes();
  }
  private initializeIRoutes() {
    /**
     * @openapi
     * '/category/:id':
     *  get:
     *     tags:
     *     - Category
     *     summary: Get category by Id
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
    this.router.get('/:id', wrapRequestHandler(this.category.deleteCategory));

    /**
     * @openapi
     * '/category':
     *  get:
     *     tags:
     *     - Category
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
    this.router.get('/', wrapRequestHandler(this.category.getCategories));

    /**
     * @openapi
     * '/category/:id':
     *  post:
     *     tags:
     *     - Category
     *     summary: Create Category
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
    this.router.post('/', wrapRequestHandler(this.category.createCategory));

    /**
     * @openapi
     * '/category/:id':
     *  patch:
     *     tags:
     *     - Category
     *     summary: Update category
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
    this.router.patch('/:id', wrapRequestHandler(this.category.updateCategory));

    /**
     * @openapi
     * '/category/:id':
     *  delete:
     *     tags:
     *     - Category
     *     summary: Delete Category
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
    this.router.delete('/:id', wrapRequestHandler(this.category.deleteCategory));
  }
}

export default CategoryRoute;
