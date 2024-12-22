import "dotenv/config";
import { dataSource } from "./data-source";
import app from "./app";

const PORT = process.env.PORT || 5000;

async function init() {
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });

  await dataSource.initialize()
    .catch((err) => {
      console.error(err);
      return;
    });
  console.log("Successfully connected to the database");
}

init();