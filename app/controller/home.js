'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    await this.ctx.render('index.html');
  }

  async proxy() {

    const { ctx, config, logger } = this;
    // use roadhog mock api first
    const url = `${config.apiPath}${ctx.path}?${ctx.querystring}`;

    logger.info(`${ctx.method} ${url}`);
    const res = await this.ctx.curl(url, {
      method: ctx.method,
    });
    ctx.body = res.data;
    ctx.status = res.status;
    logger.info(`${ctx.method} ${url} ${res.status}`);
  }
}

module.exports = HomeController;
