import { Request, Response, NextFunction } from "express";
import {container} from "tsyringe";
import { Router } from "express";
import { ProductController } from "../controllers";

const router = Router();
const productController = container.resolve(ProductController);

/**
 * @openapi
 * "/products":
 *  get:
 *    description: Lists all products
 *    responses:
 *          200:
 *            description: product array
 */
router.get("/", (_request: Request, _response: Response, _next: NextFunction) => {
  productController.list(_request, _response, _next);
});

/**
 * @openapi
 * "/products":
 *  post:
 *    description: Creates a new product
 *    responses:
 *          200:
 *            description: product object
 *    requestBody:
 *      description: create product body
 *      required: true
 *      content:
 *       application/json:
 *         schema:
 *           $ref: '#/components/schemas/CreateProductModel
 */
router.post(
  "/",
  (_request: Request, _response: Response, _next: NextFunction) => {
    productController.create(_request, _response, _next);
  }
);

/**
 * @openapi
 * "/products/{id}":
 *  get:
 *    description: Fetches a specific product
 *    responses:
 *          200:
 *            description: product object
 */
router.get(
  "/:id",
  (_request: Request, _response: Response, _next: NextFunction) => {
    productController.getOne(_request, _response, _next);
  }
);

/**
 * @openapi
 * "/products/{id}":
 *  put:
 *    description: Updates a product
 *    responses:
 *          200:
 *            description: product object
 *    requestBody:
 *      description: create product body
 *      required: true
 *      content:
 *       application/json:
 *         schema:
 *           $ref: '#/components/schemas/CreateProductModel
 */
router.put(
  "/:id",
  (_request: Request, _response: Response, _next: NextFunction) => {
    productController.update(_request, _response, _next);
  }
);

/**
 * @openapi
 * "/products/{id}":
 *  delete:
 *    description: Deletes a product
 *    responses:
 *          200:
 *            description: product object
 */
router.delete(
  "/:id",
  (_request: Request, _response: Response, _next: NextFunction) => {
    productController.delete(_request, _response, _next);
  }
);

export default router;
