import express from "express";
import swageerUi from "swagger-ui-express";

import { usersRoutes } from "./routes/users.routes";
import swageerFile from "./swageer.json";

const app = express();

app.use(express.json());
app.use("/api-docs", swageerUi.serve, swageerUi.setup(swageerFile));

app.use("/users", usersRoutes);

export { app };
