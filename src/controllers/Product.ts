import { NextFunction, Request, Response } from "express";
import { injectable } from "tsyringe";
import { JsonResponse } from "../utils";

@injectable()
export default class ProductController
{
  constructor ()
  { }

  public async list(_request: Request, _response: Response, _next: NextFunction)
  {
    const jsonResponse = new JsonResponse(_request, _response);

    try {
      jsonResponse.setData("list");

      return jsonResponse.response();
    } catch (error) {
      _next(error);
    }
  }

  public async create(_request: Request, _response: Response, _next: NextFunction)
  {
    const jsonResponse = new JsonResponse(_request, _response);

    try {
      jsonResponse.setData("create");

      return jsonResponse.response();
    } catch (error) {
      _next(error);
    }
  }

  public async getOne(_request: Request, _response: Response, _next: NextFunction)
  {
    const jsonResponse = new JsonResponse(_request, _response);

    try {
      jsonResponse.setData("getOne");

      return jsonResponse.response();
    } catch (error) {
      _next(error);
    }
  }

  public async update(_request: Request, _response: Response, _next: NextFunction)
  {
    const jsonResponse = new JsonResponse(_request, _response);

    try {
      jsonResponse.setData("update");

      return jsonResponse.response();
    } catch (error) {
      _next(error);
    }
  }

  public async delete(_request: Request, _response: Response, _next: NextFunction)
  {
    const jsonResponse = new JsonResponse(_request, _response);

    try {
      jsonResponse.setData("delete");

      return jsonResponse.response();
    } catch (error) {
      _next(error);
    }
  }
}
