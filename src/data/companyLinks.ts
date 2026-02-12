/**
 * Maps acpCompanies slugs to their hand-crafted SEO page slugs (if one exists).
 * These are the 11 standalone .astro files in /pages/.
 */
export const seoPageMap: Record<string, string> = {
  'visa': 'visa-agentic-commerce',
  'mastercard': 'mastercard-agentic-commerce',
  'paypal': 'paypal-agentic-commerce',
  'stripe': 'stripe-agentic-commerce',
  'openai': 'openai-agentic-commerce-protocol',
  'google-a2a': 'google-agentic-commerce',
  'shopify': 'shopify-agentic-commerce',
  'klarna': 'klarna-agentic-commerce',
};

// Cloudflare and Wix aren't in acpCompanies, so no mapping needed.
// The ACP Protocol page slug is 'agentic-commerce-protocol' (standalone, no acpCompanies entry).

/**
 * Maps acpCompanies slugs to their article page slugs (if one exists).
 * These live at /company/[slug].
 */
export const articleMap: Record<string, string> = {
  'chargebee': 'chargebee',
  'brex': 'brex',
  'bolt': 'bolt',
  'block-square': 'block-square',
  'bigcommerce': 'bigcommerce',
  'anthropic-claude': 'anthropic-claude',
  'amazon-alexa-plus': 'amazon-alexa-plus',
  'alibaba-ant-group': 'alibaba-ant-group',
  'airwallex': 'airwallex',
  'adyen': 'adyen',
  'adobe': 'adobe',
};

/** Get the best "deep dive" link for a company, if one exists beyond the directory page. */
export function getDeepLink(slug: string): { url: string; label: string } | null {
  if (seoPageMap[slug]) {
    return { url: `/${seoPageMap[slug]}`, label: 'Read full strategy analysis' };
  }
  if (articleMap[slug]) {
    return { url: `/company/${articleMap[slug]}`, label: 'Read full article' };
  }
  return null;
}

/** Category groupings for navigation and hub pages */
export const categoryOrder = [
  'Payments',
  'Commerce Platform',
  'AI Platform',
  'AI Protocol',
  'Voice/AI Assistant',
  'AI Assistant',
  'Enterprise AI',
  'Fintech',
  'Payments/Commerce',
  'Commerce/Payments',
  'AI Search',
  'AI Agents',
  'AI Infrastructure',
  'Communications',
  'Automation',
  'Observability',
  'Checkout',
  'Super App',
  'Restaurant Tech',
  'Subscription',
  'Technology Services',
];
