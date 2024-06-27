import { ProductService } from "../services";
import { NextFunction, Request, Response } from "express";
import JsonResponse from "../utils/response/JsonResponse";
import { injectable, inject } from "tsyringe";

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

      console.log(jsonResponse);

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
      const id = parseInt(_request.params.id);
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
      const id = parseInt(_request.params.id);
      const body = _request.body;
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
      const id = parseInt(_request.params.id);
      jsonResponse.setData(await this.productService.delete(id));

      return jsonResponse.response();
    } catch (error) {
      _next(error);
    }
  }
}
