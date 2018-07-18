const bodyParser = require('koa-bodyparser');
const Koa = require('koa');
const next = require('next');
const Router = require('koa-router');
const GenericRouter  = require('@digituz/rest-flex');
const cors = require('kcors');
const sgMail = require('@sendgrid/mail');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.prepare().then(() => {
  const server = new Koa();
  const router = new Router();

  router.use(cors());

  const domain = 'buildings';
  const auth0Domain = 'krebseng.auth0.com';
  const auth0Audience = 'https://buildings.krebseng.com.br';
  const publicRead = true;
  const publicWrite = false;
  const mongoDBUrl = process.env.MONGO_URL;

  const buildings = GenericRouter({ domain, auth0Domain, auth0Audience, mongoDBUrl, publicRead, publicWrite });

  router.use('/buildings', buildings.routes());

  router.get('/empreendimentos/:path', async ctx => {
    const actualPage = '/building';
    const queryParams = { path: ctx.params.path };
    await app.render(ctx.req, ctx.res, actualPage, queryParams);
    ctx.respond = false;
  });

  router.get('/panel/buildings/:id', async ctx => {
    const actualPage = '/panel/buildings';
    const queryParams = { id: ctx.params.id };
    await app.render(ctx.req, ctx.res, actualPage, queryParams);
    ctx.res.statusCode = 200;
    ctx.respond = false;
  });

  router.use('/send-email', bodyParser());

  router.post('/send-email', async ctx => {
    const {name, phone, email, mensagem} = ctx.request.body;

    const msg = {
      to: ['bruno.krebs@digituz.com.br', 'kira@krebseng.com.br'],
      from: 'bruno.krebs@digituz.com.br',
      replyTo: email,
      subject: 'Contato através do site',
      text: `Nome informado: ${name}\n\nTelefone informado: ${phone}\n\nEmail informado: ${email}\n\nMensagem:\n${mensagem}`,
    };
    sgMail.send(msg);
  });

  router.get('*', async ctx => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
  });

  server.use(async (ctx, next) => {
    ctx.res.statusCode = 200;
    await next();
  });

  server.use(router.routes());

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
}).catch((ex) => {
  console.error(ex.stack);
  process.exit(1);
});
