const BASE = 'https://rest.gohighlevel.com/v1';
const headers = () => ({ Authorization: 'Bearer ' + process.env.GHL_API_KEY, 'Content-Type': 'application/json' });

export async function sendGHLMessage(contactId: string, message: string) {
  const res = await fetch(BASE + '/conversations/messages', {
    method: 'POST', headers: headers(),
    body: JSON.stringify({ contactId, message, type: 'SMS' }),
  });
  return res.json();
}

export async function tagContact(contactId: string, tags: string[]) {
  const res = await fetch(BASE + '/contacts/' + contactId + '/tags', {
    method: 'POST', headers: headers(),
    body: JSON.stringify({ tags }),
  });
  return res.json();
}

export async function moveToPipeline(contactId: string, pipelineId: string) {
  const res = await fetch(BASE + '/opportunities', {
    method: 'POST', headers: headers(),
    body: JSON.stringify({ contactId, pipelineId, status: 'open' }),
  });
  return res.json();
}