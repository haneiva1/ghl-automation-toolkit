import { tagContact, moveToP pipeline } from '../services/ghl';
export async function handleContact(payload: any) {
  const { contactId, source, tags } = payload;
  if (source === 'facebook_ad') {
    await tagContact(contactId, ['fb-lead', 'needs-qualification']);
    await moveToPipeline(contactId, 'new-leads');
  }
}