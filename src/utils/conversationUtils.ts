export const getChannelType = (conversationId: string): string => {
  if (!conversationId) return 'unknown';
  
  const id = conversationId.toLowerCase();
  
  if (id.includes('whatsapp') || id.includes('wa_')) return 'whatsapp';
  if (id.includes('smartupweb') || id.includes('web_')) return 'smartupweb';
  if (id.includes('email') || id.includes('mail_')) return 'email';
  if (id.includes('facebook') || id.includes('fb_')) return 'facebook';
  if (id.includes('instagram') || id.includes('ig_')) return 'instagram';
  
  return 'unknown';
}; 