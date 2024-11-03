import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import hpp from "hpp";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import fileUpload from "express-fileupload";
import {
  MAX_FILE_SIZE,
  MAX_JSON_SIZE,
  PORT,
  RATE_LIMIT_NUMBER,
  RATE_LIMIT_TIME,
  URL_ENCODED,
  WEB_CACHE,
} from "./src/config/config";
import router from "./src/routes/api";
fileUpload;
const app = express();

app.use(cors());
app.use(express.json({ limit: MAX_JSON_SIZE }));
app.use(express.urlencoded({ extended: URL_ENCODED }));
app.use(hpp());
app.use(helmet());
app.use(cookieParser());
const limit = rateLimit({
  windowMs: RATE_LIMIT_TIME,
  limit: RATE_LIMIT_NUMBER,
});
app.use(limit);
app.set("etag", WEB_CACHE);
app.use(
  fileUpload({
    limits: { fileSize: MAX_FILE_SIZE },
  })
);

app.use("/static", express.static("storage"));

app.use("/api", router);
app.listen(PORT, () => {
  console.log("app is listening on port: ", PORT);
});
