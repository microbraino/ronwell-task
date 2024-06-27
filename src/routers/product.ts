import { Request, Response, NextFunction } from "express";
import {container} from "tsyringe";
import { Router } from "express";
import { ProductController } from "../controllers";

const router = Router();
const productController = container.resolve(ProductController);

router.get("/", (_request: Request, _response: Response, _next: NextFunction) => {
  productController.list(_request, _response, _next);
});

router.post(
  "/",
  (_request: Request, _response: Response, _next: NextFunction) => {
    productController.create(_request, _response, _next);
  }
);

router.get(
  "/:id",
  (_request: Request, _response: Response, _next: NextFunction) => {
    productController.getOne(_request, _response, _next);
  }
);

router.put(
  "/:id",
  (_request: Request, _response: Response, _next: NextFunction) => {
    productController.update(_request, _response, _next);
  }
);

router.delete(
  "/:id",
  (_request: Request, _response: Response, _next: NextFunction) => {
    productController.delete(_request, _response, _next);
  }
);

export default router;
