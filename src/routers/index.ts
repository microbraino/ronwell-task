import SwaggerUi from 'swagger-ui-express';
import SwaggerSpecs from '../../config/swagger';
import { JsonResponse } from "../utils";
import productRouter from './product';
import { Router } from 'express';

const router = Router();
router.get('/health', (_request, _response) =>
{
  const jsonResponse = new JsonResponse(_request, _response);
  jsonResponse.setMessage('OK');
  jsonResponse.setCode(200);

  return jsonResponse.response();
});

router.use('/doc', SwaggerUi.serve, SwaggerUi.setup(SwaggerSpecs));

router.use('/products', productRouter);

router.get('*', (_request, _response) =>
{
  const jsonResponse = new JsonResponse(_request, _response);
  jsonResponse.setMessage('Resource Not Found!');
  jsonResponse.setErrors(['Resource Not Found!']);
  jsonResponse.setCode(404);

  return jsonResponse.response();
});

export default router;
