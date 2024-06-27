import { Request, Response, NextFunction } from "express";
import { VariantController } from "../controllers";
import { container } from "tsyringe";
import { Router } from "express";

const router = Router({ mergeParams: true });
const variantController = container.resolve(VariantController);

/**
 * @openapi
 * "/products/{id}/variants":
 *  get:
 *    description: Lists all variants of a product
 *    responses:
 *          200:
 *            description: variant array
 */
router.get("/", (_request: Request, _response: Response, _next: NextFunction) =>
{
  variantController.list(_request, _response, _next);
});

/**
 * @openapi
 * "/products/{id}/variants":
 *  post:
 *    description: Creates a new variant of a product
 *    responses:
 *          200:
 *            description: variant object
 *    requestBody:
 *      description: create product body
 *      required: true
 *      content:
 *       application/json:
 *         schema:
 *           $ref: '#/components/schemas/CreateProductModel'
 */
router.post(
  "/",
  (_request: Request, _response: Response, _next: NextFunction) =>
  {
    variantController.create(_request, _response, _next);
  }
);

/**
 * @openapi
 * "/products/{id}/variants":
 *  get:
 *    description: Fetches a specific variant
 *    responses:
 *          200:
 *            description: variant object
 */
router.get(
  "/:variantId",
  (_request: Request, _response: Response, _next: NextFunction) =>
  {
    variantController.getOne(_request, _response, _next);
  }
);

/**
 * @openapi
 * "/products/{id}/variants/{id}":
 *  put:
 *    description: Updates a variant
 *    responses:
 *          200:
 *            description: variant object
 *    requestBody:
 *      description: create variant body
 *      required: true
 *      content:
 *       application/json:
 *         schema:
 *           $ref: '#/components/schemas/CreateVariantModel'
 */
router.put(
  "/:variantId",
  (_request: Request, _response: Response, _next: NextFunction) =>
  {
    variantController.update(_request, _response, _next);
  }
);

/**
 * @openapi
 * "/products/{id}/variants/{id}":
 *  delete:
 *    description: Deletes a variant
 *    responses:
 *          200:
 *            description: variant object
 */
router.delete(
  "/:variantId",
  (_request: Request, _response: Response, _next: NextFunction) =>
  {
    variantController.delete(_request, _response, _next);
  }
);

export default router;
