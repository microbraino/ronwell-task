var swaggerJsdoc = require("swagger-jsdoc");
const doc = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Typescript Ronwell Task",
      version: "0.0.1",
      description: "An E-commerce Backend with TypeScript",
      license: {
        name: "MIT License",
        url: "https://ronwelldigital.com/",
      },
      contact: {
        name: "Ronwell Digital",
        url: "https://ronwelldigital.com/",
        email: "test@email.com",
      },
    },
    servers: [
      {
        url: "http://localhost:8000",
      },
    ],
    components: {
      schemas: {
        CreateProductModel: {
          type: "object",
          properties: {
            name: {
              type: "string",
              example: "Winter Jacket",
            },
            description: {
              type: "string",
              example: "A warm and stylish jacket for winter",
            },
            price: {
              type: "number",
              example: 34.53,
            },
            inventory: {
              type: "number",
              example: 45,
            }
          },
          required: ["name", "description", "price", "inventory"],
        },
      },
      securitySchemes: {
        apiKey: {
          type: "apiKey",
          name: "apiKey",
          in: "header",
        },
        bearerAuth: {
          type: "apiKey",
          name: "Authorization",
          in: "header",
        },
      },
    },
  },
  apis: ["**/*.ts"],
};

const spec = swaggerJsdoc(doc);

export default spec;
