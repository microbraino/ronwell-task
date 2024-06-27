import { NextFunction, Request, Response } from "express";
import JsonResponse from "../utils/response/JsonResponse";
import { injectable, inject } from "tsyringe";
import { ProductService } from "../services";

@injectable()
export default class ProductController
{
  constructor (
    @inject(ProductService) private readonly productService: ProductService,
  )
  { }

  public async list(_request: Request, _response: Response, _next: NextFunction)
  {
    const jsonResponse = new JsonResponse(_request, _response);

    try {
      jsonResponse.setData(await this.productService.list());

      return jsonResponse.response();
    } catch (error) {
      _next(error);
    }
  }

  public async create(_request: Request, _response: Response, _next: NextFunction)
  {
    const jsonResponse = new JsonResponse(_request, _response);

    try {
      const body = _request.body;
      jsonResponse.setData(await this.productService.create(body));

      return jsonResponse.response();
    } catch (error) {
      _next(error);
    }
  }

  public async getOne(_request: Request, _response: Response, _next: NextFunction)
  {
    const jsonResponse = new JsonResponse(_request, _response);

    try {
      const id = parseInt(_request.params.id, 10);
      if (isNaN(id)) {
        throw "msg.error.invalid_product_id";
      }

      jsonResponse.setData(await this.productService.getOne(id));

      return jsonResponse.response();
    } catch (error) {
      _next(error);
    }
  }

  public async update(_request: Request, _response: Response, _next: NextFunction)
  {
    const jsonResponse = new JsonResponse(_request, _response);

    try {
      const body = _request.body;
      const id = parseInt(_request.params.id, 10);
      if (isNaN(id)) {
        throw "msg.error.invalid_product_id";
      }

      jsonResponse.setData(await this.productService.update(id, body));

      return jsonResponse.response();
    } catch (error) {
      _next(error);
    }
  }

  public async delete(_request: Request, _response: Response, _next: NextFunction)
  {
    const jsonResponse = new JsonResponse(_request, _response);

    try {
      const id = parseInt(_request.params.id, 10);
      if (isNaN(id)) {
        throw "msg.error.invalid_product_id";
      }
      
      jsonResponse.setData(await this.productService.delete(id));

      return jsonResponse.response();
    } catch (error) {
      _next(error);
    }
  }
}
