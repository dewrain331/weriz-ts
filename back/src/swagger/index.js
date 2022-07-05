import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import "dotenv/config";

const PORT = +process.env.SERVER_PORT;

const options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "elice_ai_8",
      version: "1.0.0",
      description: "엘리스 AI 트랙 4기 AI 프로젝트 8팀의 API 명세서입니다.",
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
