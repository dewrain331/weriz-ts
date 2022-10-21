import dotenv from "dotenv";
import path from "path";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";

if (process.env.NODE_ENV === "development") {
  dotenv.config({ path: path.join(__dirname, "../../config/.env") });
}

const PORT = process.env.PORT || 5002;

const options: any = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Weriz",
      version: "1.0.0",
      description: "Swagger Api Document for Weriz",
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
  apis: ["./*.yaml"],
};

const specs: any = swaggerJsdoc(options);

export { swaggerUi, specs };
