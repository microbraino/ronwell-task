import SwaggerUi from 'swagger-ui-express';
import SwaggerSpecs from '../../config/swagger';
import { Router } from 'express';

const router = Router();
router.get('/health', (_request, _response) =>
{
  _response.status(200);
  _response.json("OK")
});

router.use('/doc', SwaggerUi.serve, SwaggerUi.setup(SwaggerSpecs));

export default router;
