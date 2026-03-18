export async function handleOpportunity(payload: any) {
  const { opportunityId, stage, contactId } = payload;
  console.log('Opportunity moved:', opportunityId, '->', stage);
  // Add your pipeline automation logic here
}