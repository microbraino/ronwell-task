import AbstractService from "./Abstract";
import { injectable } from "tsyringe";
import { Product } from "../models";
import _ from "lodash";

@injectable()
export default class ProductService extends AbstractService
{
  async list() 
  {
    const products = await Product.find();
    
    return products
  }

  async create(body: { name: string, description: string, price: number, inventory: number}) 
  {
    const newProduct = Product.create()
    newProduct.name = body.name;
    newProduct.description = body.description;
    newProduct.price = body.price;
    newProduct.inventory = body.inventory;

    console.log(newProduct);

    return await newProduct.save();
  }

  async getOne(id: number) 
  {
    const product = await Product.findOneBy({id});

    return product
  }

  async update(id: number, body:{ name: string, description: string, price: number, inventory: number}) 
  {
    const product = await Product.findOneBy({id});
    if(_.isEmpty(product)){
      throw "msg.error.product_not_found"
    }

    product.name = body.name;
    product.description = body.description;
    product.price = body.price;
    product.inventory = body.inventory;

    return await product.save();
  }

  async delete(id: number) 
  {
    const product = await Product.findOneBy({id});
    if(_.isEmpty(product)){
      throw "msg.error.product_not_found"
    }

    return product.softRemove();
  }
  
}
