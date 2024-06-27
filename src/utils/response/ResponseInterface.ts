export default interface ResponseInterface
{
  response(): void,
  setData(data: any): void,
  setErrors(errors: any): void,
  setMessage(message: any): void,
}
