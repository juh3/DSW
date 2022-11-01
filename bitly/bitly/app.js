import { Application } from './deps.js';
import { router } from './routes/routes.js';
import { renderMiddleware } from './middlewares/renderMiddleware.js';

const app = new Application();

app.use(renderMiddleware);

app.use(router.routes());

export { app };
