import AbstractService from "./Abstract";
import { injectable } from "tsyringe";
import { Product, Variant } from "../models";
import _ from "lodash";
import { ProductDto } from "../dtos";
import { VariantDto } from "../dtos";

@injectable()
export default class VariantService extends AbstractService
{
  async list(productId: number) 
  {
    const product = await Product.findOne({ where: { id: productId }, relations: ["variants"] });
    if (_.isEmpty(product)) {
      throw "msg.error.product_not_found";
    }

    return product.variants
  }

  async create(productId: number, body: VariantDto) 
  {
    const product = await Product.findOne({ where: { id: productId }, relations: ["variants"] });
    if (_.isEmpty(product)) {
      throw "msg.error.product_not_found";
    }

    const newVariant = Variant.create();
    newVariant.name = body.name;
    newVariant.price = body.price;
    newVariant.product = product;


    return await newVariant.save();
  }

  async getOne(id: number) 
  {
    const variant = await Variant.findOneBy({ id });
    if (_.isEmpty(variant)) {
      throw "msg.error.product_variant_not_found";
    }

    return variant;
  }

  async update(id: number, body: VariantDto) 
  {
    const variant = await Variant.findOneBy({ id });
    if (_.isEmpty(variant)) {
      throw "msg.error.product_variant_not_found";
    }

    variant.name = body.name;
    variant.price = body.price;

    return await variant.save();
  }

  async delete(id: number) 
  {
    const variant = await Variant.findOneBy({ id });
    if (_.isEmpty(variant)) {
      throw "msg.error.product_variant_not_found";
    }

    return variant.softRemove();
  }

}
