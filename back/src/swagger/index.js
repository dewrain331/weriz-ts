import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import "dotenv/config";

const PORT = +process.env.SERVER_PORT;

const options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "none",
      version: "1.0.0",
      description: "none",
    },
    components: {
      securitySchemes: {
        Authorization: {
          type: "http",
          scheme: "Bearer",
          name: "Authorization",
          bearerFormat: "JWT",
          in: "header",
        },
      },
    },
    servers: [
      {
        url: `http://localhost:${PORT}`,
      },
    ],
  },
  apis: ["./src/swagger/*.yaml"],
};

const specs = swaggerJsdoc(options);

export { swaggerUi, specs };
