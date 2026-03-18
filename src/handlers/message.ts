import OpenAI from 'openai';
import { sendGHLMessage } from '../services/ghl';
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function handleMessage(payload: any) {
  const { contactId, message, direction } = payload;
  if (direction !== 'inbound') return;

  const completion = await openai.chat.completions.create({
    model: 'gpt-4o',
    messages: [
      { role: 'system', content: 'You are a helpful sales assistant. Respond concisely and professionally. Qualify the lead if possible.' },
      { role: 'user', content: message }
    ],
    max_tokens: 200,
  });

  const reply = completion.choices[0].message.content;
  if (reply) await sendGHLMessage(contactId, reply);
}