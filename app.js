import { getAllFiles } from "./db/queries/files.js";
import express from "express";
const app = express();
export default app;

app.use(express.json());

app.get("/files", async (req, res) => {
  const allFiles = await getAllFiles();
  res.send(allFiles);
});
