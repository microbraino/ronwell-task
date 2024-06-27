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
  },
  apis: ["**/*.ts"],
};

const spec = swaggerJsdoc(doc);

export default spec;
