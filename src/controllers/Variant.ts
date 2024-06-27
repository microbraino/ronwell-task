import { VariantService } from "../services";
import { NextFunction, Request, Response } from "express";
import JsonResponse from "../utils/response/JsonResponse";
import { injectable, inject } from "tsyringe";

@injectable()
export default class VariantController
{
  constructor (
    @inject(VariantService) private readonly variantService: VariantService,
  )
  { }

  public async list(_request: Request, _response: Response, _next: NextFunction)
  {
    const jsonResponse = new JsonResponse(_request, _response);

    try {
      const productId = parseInt(_request.params.productId, 10);
      if (isNaN(productId)) {
        throw "msg.error.invalid_product_id";
      }

      jsonResponse.setData(await this.variantService.list(productId));

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
      const productId = parseInt(_request.params.productId, 10);
      if (isNaN(productId)) {
        throw "msg.error.invalid_product_id";
      }

      jsonResponse.setData(await this.variantService.create(productId, body));

      return jsonResponse.response();
    } catch (error) {
      _next(error);
    }
  }

  public async getOne(_request: Request, _response: Response, _next: NextFunction)
  {
    const jsonResponse = new JsonResponse(_request, _response);

    try {
      const variantId = parseInt(_request.params.variantId, 10);
      if (isNaN(variantId)) {
        throw "msg.error.invalid_variant_id";
      }

      jsonResponse.setData(await this.variantService.getOne(variantId));

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
      const variantId = parseInt(_request.params.variantId, 10);
      if (isNaN(variantId)) {
        throw "msg.error.invalid_variant_id";
      }

      jsonResponse.setData(await this.variantService.update(variantId, body));

      return jsonResponse.response();
    } catch (error) {
      _next(error);
    }
  }

  public async delete(_request: Request, _response: Response, _next: NextFunction)
  {
    const jsonResponse = new JsonResponse(_request, _response);

    try {
      const variantId = parseInt(_request.params.variantId, 10);
      if (isNaN(variantId)) {
        throw "msg.error.invalid_variant_id";
      }

      jsonResponse.setData(await this.variantService.delete(variantId));

      return jsonResponse.response();
    } catch (error) {
      _next(error);
    }
  }
}
