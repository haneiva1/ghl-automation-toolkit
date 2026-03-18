import Fastify from 'fastify';
import { webhookRouter } from './routes/webhooks';
const app = Fastify({ logger: true });
app.register(webhookRouter, { prefix: '/webhooks' });
app.get('/health', async () => ({ status: 'ok' }));
app.listen({ port: parseInt(process.env.PORT || '3000'), host: '0.0.0.0' });