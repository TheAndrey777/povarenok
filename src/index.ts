import "dotenv/config";
import app from "./app";

const PORT = process.env.PORT || 5000;

async function init() {
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
}

init();