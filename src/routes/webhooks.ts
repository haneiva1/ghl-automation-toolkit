import { FastifyInstance } from 'fastify';
import { handleContact } from '../handlers/contact';
import { handleMessage } from '../handlers/message';
import { handleOpportunity } from '../handlers/opportunity';

export async function webhookRouter(app: FastifyInstance) {
  app.post('/contact', async (req: any, reply) => {
    reply.status(200).send('OK');
    await handleContact(req.body);
  });
  app.post('/message', async (req: any, reply) => {
    reply.status(200).send('OK');
    await handleMessage(req.body);
  });
  app.post('/opportunity', async (req: any, reply) => {
    reply.status(200).send('OK');
    await handleOpportunity(req.body);
  });
}