import ResponseInterface from './ResponseInterface';
import AbstractResponse from './AbstractResponse';
import _ from 'lodash';

export default class JsonResponse extends AbstractResponse implements ResponseInterface 
{
  private _response: any;

  /**
   * @param _request 
   * @param _response 
   */
  constructor (_request: any, _response: any)
  {
    super();

    this._response = _response;
  }

  /**
   * @returns 
   */
  public response()
  {
    let data = this.createResponseModel();

    return this._response.status(this.code).json(data);
  }

  /**
   * @param errors 
   * 
   * @returns 
   */
  public setErrors(errors: any)
  {
    this.errors = errors;

    return this;
  }

  /**
   * @param data 
   * 
   * @returns 
   */
  public setData(data: any)  
  {
    this.data = data;

    return this;
  }

  /**
   * @param code 
   * 
   * @returns 
   */
  public setCode(code: any) 
  {
    this.code = code;

    return this;
  }

  /**
   * @param message 
   * 
   * @returns 
   */
  public setMessage(message: any) 
  {
    this.message = message;

    return this;
  }

  /**
   * @returns 
   */
  public createResponseModel() 
  {
    const data = {};

    if ((this.message != null) && this.message !== '') {
      Object.assign(data, { message: this.message });
    }

    if ((this.errors != null) && this.errors !== '') {
      Object.assign(data, { errors: this.errors });
    }

    if (!_.isEmpty(this.data)) {
      Object.assign(data, { result: this.data });
    }

    return data;
  }
}