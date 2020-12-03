import logger from "./src/logger.js";
import main from "./src/main.js";


(async () => {
  try {
    logger.info(await main());
  } catch (e) {
    logger.error(`Exception: unexpected error.\n${e}`);
  }
})();
