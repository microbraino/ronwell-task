import { NextFunction, Request, Response } from "express";
import { injectable } from "tsyringe";

@injectable()
export default class ProductController
{
  constructor ()
  { }

  public async list(_request: Request, _response: Response, _next: NextFunction)
  {
    return;
  }

  public async create(_request: Request, _response: Response, _next: NextFunction)
  {
    return;
  }

  public async getOne(_request: Request, _response: Response, _next: NextFunction)
  {
    return;
  }

  public async update(_request: Request, _response: Response, _next: NextFunction)
  {
    return;
  }

  public async delete(_request: Request, _response: Response, _next: NextFunction)
  {
    return;
  }
}
