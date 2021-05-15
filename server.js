const Koa = require('koa');
const Router = require('@koa/router');
const next = require('next');
const https = require('https');
const http = require('http');
const fs = require('fs');
const forceHTTPS = require('koa-force-ssl');
const serve = require('koa-static');

const dev = process.env.NODE_ENV !== 'production';
const devApp = next({ dev });
const handle = devApp.getRequestHandler();

devApp.prepare().then(() => {
  const app = new Koa();
  const router = new Router();
  
  const configurations = {
    production: { ssl: true, port: 443, hostname: 'thewhy.kr' },
    development: { ssl: false, port: 3000, hostname: 'localhost' },
  };
  const environment = process.env.NODE_ENV || 'production';
  const config = configurations[environment];

  router.all('(.*)', async (ctx) => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
  });

  router.use(async (ctx, next) => {
    ctx.res.statusCode = 200;
    await next();
  });

  app.use(serve('./public'));  
  app.use(router.routes());
  app.use(forceHTTPS());

  let server;
  let server2;

  if (config.ssl) {
    server2 = http.createServer(app.callback());
    server = https.createServer(
      {
        key: fs.readFileSync(`${process.env.SSL_KEY}`),
        cert: fs.readFileSync(`${process.env.SSL_CERT}`),
      },
      app.callback()
    );

    server2.listen(80);
    server.listen(config.port, () => {
      console.log(`> Ready on http(s)://${config.hostname}:${config.port}`);
    });
  } else {
    server2 = http.createServer(app.callback());

    server2.listen(config.port, () => {
      console.log(`> Dev server 4000`);
    });
  }
});
