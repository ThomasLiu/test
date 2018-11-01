'use strict';

module.exports = () => {
  return async function(ctx, next) {
    const { logger } = ctx;
    const startTime = Date.now();
    await next();
    // 上报请求时间
    logger.info(Date.now() - startTime);
  };
};
