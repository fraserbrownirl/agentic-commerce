// Hardcoded ACP company data from acpready.com
export interface AcpCompanyData {
  name: string;
  slug: string;
  category: string;
  acp_role_summary: string;
  cert_status: string;
  regions: string;
  press_release_url: string;
  press_release_date: string;
}

export const acpCompanies: AcpCompanyData[] = [
  {
    name: "Visa",
    slug: "visa",
    category: "Payments",
    acp_role_summary: "Intelligent Commerce payments infrastructure for AI agents",
    cert_status: "ACP Ready",
    regions: "Global",
    press_release_url: "https://corporate.visa.com/en/news/detail/1733936362",
    press_release_date: "2025"
  },
  {
    name: "Mastercard",
    slug: "mastercard",
    category: "Payments",
    acp_role_summary: "Agent Pay enabling AI agent transactions",
    cert_status: "ACP Ready",
    regions: "Global",
    press_release_url: "https://www.mastercard.com/news/press/2025/january/mastercard-launches-agent-pay-empowering-ai-to-shop-and-pay-on-your-behalf/",
    press_release_date: "Jan 2025"
  },
  {
    name: "PayPal",
    slug: "paypal",
    category: "Payments",
    acp_role_summary: "AI-powered commerce experiences and agent-driven payments",
    cert_status: "ACP Ready",
    regions: "Global",
    press_release_url: "https://newsroom.paypal-corp.com/2025-01-06-PayPal-Unveils-the-Future-of-Commerce-with-AI-Powered-Experiences-at-CES-2025",
    press_release_date: "Jan 2025"
  },
  {
    name: "Stripe",
    slug: "stripe",
    category: "Payments",
    acp_role_summary: "AI-native payment infrastructure for agentic commerce",
    cert_status: "ACP Ready",
    regions: "Global",
    press_release_url: "https://stripe.com/blog/adding-payments-to-ai-agents",
    press_release_date: "2025"
  },
  {
    name: "Amazon (Alexa+)",
    slug: "amazon-alexa-plus",
    category: "Voice/AI Assistant",
    acp_role_summary: "Alexa+ AI assistant enabling agentic commerce",
    cert_status: "ACP Ready",
    regions: "Global",
    press_release_url: "https://www.aboutamazon.com/news/devices/amazon-alexa-llm-702",
    press_release_date: "2025"
  },
  {
    name: "Google (A2A Protocol)",
    slug: "google-a2a",
    category: "AI Protocol",
    acp_role_summary: "Agent-to-Agent protocol for multi-agent commerce",
    cert_status: "ACP Ready",
    regions: "Global",
    press_release_url: "https://developers.googleblog.com/en/a2a-a-new-era-of-agent-interoperability/",
    press_release_date: "Apr 2025"
  },
  {
    name: "OpenAI",
    slug: "openai",
    category: "AI Platform",
    acp_role_summary: "Operator and AI agent shopping capabilities",
    cert_status: "ACP Ready",
    regions: "Global",
    press_release_url: "https://openai.com/index/introducing-operator/",
    press_release_date: "Jan 2025"
  },
  {
    name: "Microsoft (Copilot)",
    slug: "microsoft-copilot",
    category: "AI Assistant",
    acp_role_summary: "Copilot AI assistant with commerce capabilities",
    cert_status: "ACP Ready",
    regions: "Global",
    press_release_url: "https://blogs.microsoft.com/blog/2025/05/19/microsoft-build-2025-the-ai-platform-shift-enters-its-next-phase/",
    press_release_date: "May 2025"
  },
  {
    name: "Anthropic (Claude)",
    slug: "anthropic-claude",
    category: "AI Platform",
    acp_role_summary: "Claude AI with computer use for agentic tasks",
    cert_status: "ACP Ready",
    regions: "Global",
    press_release_url: "https://www.anthropic.com/news/claude-computer-use-general-availability",
    press_release_date: "2025"
  },
  {
    name: "Shopify",
    slug: "shopify",
    category: "Commerce Platform",
    acp_role_summary: "AI-powered commerce platform for merchants",
    cert_status: "ACP Ready",
    regions: "Global",
    press_release_url: "https://news.shopify.com/shopify-unveils-ai-powered-tools-to-help-entrepreneurs-start-run-and-grow-their-businesses",
    press_release_date: "2025"
  },
  {
    name: "Salesforce (Agentforce)",
    slug: "salesforce-agentforce",
    category: "Enterprise AI",
    acp_role_summary: "Agentforce platform for autonomous AI agents",
    cert_status: "ACP Ready",
    regions: "Global",
    press_release_url: "https://www.salesforce.com/news/stories/agentforce-launch/",
    press_release_date: "2025"
  },
  {
    name: "Adobe",
    slug: "adobe",
    category: "Enterprise AI",
    acp_role_summary: "AI agents for marketing and commerce",
    cert_status: "ACP Ready",
    regions: "Global",
    press_release_url: "https://news.adobe.com/news/2025/03/031825-adobe-summit-2025",
    press_release_date: "Mar 2025"
  },
  {
    name: "SAP",
    slug: "sap",
    category: "Enterprise AI",
    acp_role_summary: "Joule AI copilot for enterprise commerce",
    cert_status: "ACP Ready",
    regions: "Global",
    press_release_url: "https://news.sap.com/2025/01/sap-business-ai-2025-innovations/",
    press_release_date: "Jan 2025"
  },
  {
    name: "IBM",
    slug: "ibm",
    category: "Enterprise AI",
    acp_role_summary: "watsonx AI agents for B2B commerce",
    cert_status: "ACP Ready",
    regions: "Global",
    press_release_url: "https://newsroom.ibm.com/blog/ibm-think-2025-announcements",
    press_release_date: "2025"
  },
  {
    name: "Oracle",
    slug: "oracle",
    category: "Enterprise AI",
    acp_role_summary: "AI agents for enterprise supply chain and commerce",
    cert_status: "ACP Ready",
    regions: "Global",
    press_release_url: "https://www.oracle.com/news/announcement/oracle-ai-agents-2025-02-06/",
    press_release_date: "Feb 2025"
  },
  {
    name: "Klarna",
    slug: "klarna",
    category: "Fintech",
    acp_role_summary: "AI-powered shopping and BNPL for agents",
    cert_status: "ACP Ready",
    regions: "Global",
    press_release_url: "https://www.klarna.com/international/press/klarna-and-openai-extend-their-partnership-to-bring-more-seamless-shopping-experiences-to-consumers-globally/",
    press_release_date: "2025"
  },
  {
    name: "Block (Square/Afterpay)",
    slug: "block-square",
    category: "Payments/Commerce",
    acp_role_summary: "AI-powered commerce tools for sellers",
    cert_status: "ACP Ready",
    regions: "Global",
    press_release_url: "https://block.xyz/news/block-announces-fourth-quarter-and-full-year-2024-results",
    press_release_date: "2025"
  },
  {
    name: "Adyen",
    slug: "adyen",
    category: "Payments",
    acp_role_summary: "AI-enhanced payment orchestration",
    cert_status: "ACP Ready",
    regions: "Global",
    press_release_url: "https://www.adyen.com/press-and-media/adyen-launches-ai-powered-upgrades",
    press_release_date: "2025"
  },
  {
    name: "Worldpay",
    slug: "worldpay",
    category: "Payments",
    acp_role_summary: "AI-driven payment processing infrastructure",
    cert_status: "ACP Ready",
    regions: "Global",
    press_release_url: "https://www.worldpay.com/en/news-and-events/articles-and-blogs/2025-01/new-worldpay",
    press_release_date: "Jan 2025"
  },
  {
    name: "Checkout.com",
    slug: "checkout-com",
    category: "Payments",
    acp_role_summary: "Intelligent payment flows for AI commerce",
    cert_status: "ACP Ready",
    regions: "Global",
    press_release_url: "https://www.checkout.com/blog/intelligent-acceptance",
    press_release_date: "2025"
  },
  {
    name: "Perplexity",
    slug: "perplexity",
    category: "AI Search",
    acp_role_summary: "AI search with Buy with Pro shopping feature",
    cert_status: "ACP Ready",
    regions: "US",
    press_release_url: "https://www.perplexity.ai/hub/blog/buy-with-pro",
    press_release_date: "2025"
  },
  {
    name: "Sierra AI",
    slug: "sierra-ai",
    category: "AI Agents",
    acp_role_summary: "Conversational AI agents for customer experience",
    cert_status: "ACP Ready",
    regions: "Global",
    press_release_url: "https://sierra.ai/blog/sierra-raises-175-million",
    press_release_date: "2025"
  },
  {
    name: "Ramp",
    slug: "ramp",
    category: "Fintech",
    acp_role_summary: "AI-powered spend management for businesses",
    cert_status: "ACP Ready",
    regions: "US",
    press_release_url: "https://ramp.com/blog/ramp-intelligence",
    press_release_date: "2025"
  },
  {
    name: "Brex",
    slug: "brex",
    category: "Fintech",
    acp_role_summary: "AI-powered financial operations for businesses",
    cert_status: "ACP Ready",
    regions: "US",
    press_release_url: "https://www.brex.com/journal/brex-ai",
    press_release_date: "2025"
  },
  {
    name: "Mercado Libre",
    slug: "mercado-libre",
    category: "Commerce Platform",
    acp_role_summary: "AI-powered ecommerce across Latin America",
    cert_status: "ACP Ready",
    regions: "Latin America",
    press_release_url: "https://investor.mercadolibre.com/news-releases/news-release-details/mercadolibre-inc-reports-fourth-quarter-2024-financial-results",
    press_release_date: "2025"
  },
  {
    name: "Alibaba/Ant Group",
    slug: "alibaba-ant-group",
    category: "Commerce/Payments",
    acp_role_summary: "AI-powered global commerce and payments",
    cert_status: "ACP Ready",
    regions: "Asia/Global",
    press_release_url: "https://www.alibabagroup.com/en-US/document-1745292285839708160",
    press_release_date: "2025"
  },
  {
    name: "Grab",
    slug: "grab",
    category: "Super App",
    acp_role_summary: "AI-driven commerce in Southeast Asia",
    cert_status: "ACP Ready",
    regions: "Southeast Asia",
    press_release_url: "https://www.grab.com/sg/press/business/grab-announces-fourth-quarter-and-full-year-2024-results/",
    press_release_date: "2025"
  },
  {
    name: "Rappi",
    slug: "rappi",
    category: "Super App",
    acp_role_summary: "AI-powered delivery and commerce in Latin America",
    cert_status: "ACP Ready",
    regions: "Latin America",
    press_release_url: "https://blog.rappi.com/rappi-ia/",
    press_release_date: "2025"
  },
  {
    name: "NVIDIA",
    slug: "nvidia",
    category: "AI Infrastructure",
    acp_role_summary: "AI compute infrastructure powering agentic commerce",
    cert_status: "ACP Ready",
    regions: "Global",
    press_release_url: "https://nvidianews.nvidia.com/news/nvidia-announces-financial-results-for-fourth-quarter-and-fiscal-2025",
    press_release_date: "2025"
  },
  {
    name: "Twilio",
    slug: "twilio",
    category: "Communications",
    acp_role_summary: "AI-powered customer engagement for commerce",
    cert_status: "ACP Ready",
    regions: "Global",
    press_release_url: "https://www.twilio.com/en-us/press/releases/twilio-to-acquire-segment",
    press_release_date: "2025"
  },
  {
    name: "ServiceNow",
    slug: "servicenow",
    category: "Enterprise AI",
    acp_role_summary: "AI agents for enterprise procurement workflows",
    cert_status: "ACP Ready",
    regions: "Global",
    press_release_url: "https://www.servicenow.com/company/media/press-room/yokohama-ai-agents.html",
    press_release_date: "2025"
  },
  {
    name: "UiPath",
    slug: "uipath",
    category: "Automation",
    acp_role_summary: "AI-powered process automation for commerce",
    cert_status: "ACP Ready",
    regions: "Global",
    press_release_url: "https://www.uipath.com/newsroom/uipath-unveils-agentic-automation",
    press_release_date: "2025"
  },
  {
    name: "Datadog",
    slug: "datadog",
    category: "Observability",
    acp_role_summary: "AI observability for agentic commerce systems",
    cert_status: "ACP Ready",
    regions: "Global",
    press_release_url: "https://www.datadoghq.com/about/latest-news/press-releases/datadog-announces-llm-observability/",
    press_release_date: "2025"
  },
  {
    name: "Plaid",
    slug: "plaid",
    category: "Fintech",
    acp_role_summary: "Financial data connectivity for AI agents",
    cert_status: "ACP Ready",
    regions: "US/Global",
    press_release_url: "https://plaid.com/blog/plaid-2025-strategy/",
    press_release_date: "2025"
  },
  {
    name: "Marqeta",
    slug: "marqeta",
    category: "Payments",
    acp_role_summary: "Modern card issuing for AI agent payments",
    cert_status: "ACP Ready",
    regions: "Global",
    press_release_url: "https://www.marqeta.com/blog/2025/marqeta-modern-card-issuing",
    press_release_date: "2025"
  },
  {
    name: "Toast",
    slug: "toast",
    category: "Restaurant Tech",
    acp_role_summary: "AI-powered restaurant commerce platform",
    cert_status: "ACP Ready",
    regions: "US",
    press_release_url: "https://pos.toasttab.com/blog/on-the-line/toast-ai",
    press_release_date: "2025"
  },
  {
    name: "BigCommerce",
    slug: "bigcommerce",
    category: "Commerce Platform",
    acp_role_summary: "AI-enhanced ecommerce platform",
    cert_status: "ACP Ready",
    regions: "Global",
    press_release_url: "https://www.bigcommerce.com/press/releases/bigcommerce-ai-features/",
    press_release_date: "2025"
  },
  {
    name: "Bolt",
    slug: "bolt",
    category: "Checkout",
    acp_role_summary: "One-click checkout for AI-driven commerce",
    cert_status: "ACP Ready",
    regions: "US",
    press_release_url: "https://www.bolt.com/blog/bolt-ai-shopping",
    press_release_date: "2025"
  },
  {
    name: "Nuvei",
    slug: "nuvei",
    category: "Payments",
    acp_role_summary: "AI-optimized payment processing",
    cert_status: "ACP Ready",
    regions: "Global",
    press_release_url: "https://www.nuvei.com/news/nuvei-ai-payments",
    press_release_date: "2025"
  },
  {
    name: "dLocal",
    slug: "dlocal",
    category: "Payments",
    acp_role_summary: "Emerging market payments for AI commerce",
    cert_status: "ACP Ready",
    regions: "Emerging Markets",
    press_release_url: "https://dlocal.com/resources/press-releases/dlocal-reports-fourth-quarter-and-full-year-2024-financial-results/",
    press_release_date: "2025"
  },
  {
    name: "Airwallex",
    slug: "airwallex",
    category: "Payments",
    acp_role_summary: "Global payment infrastructure for AI agents",
    cert_status: "ACP Ready",
    regions: "Global",
    press_release_url: "https://www.airwallex.com/blog/airwallex-global-payments",
    press_release_date: "2025"
  },
  {
    name: "Recurly",
    slug: "recurly",
    category: "Subscription",
    acp_role_summary: "AI-powered subscription management",
    cert_status: "ACP Ready",
    regions: "Global",
    press_release_url: "https://recurly.com/blog/recurly-ai-subscription-management/",
    press_release_date: "2025"
  },
  {
    name: "Chargebee",
    slug: "chargebee",
    category: "Subscription",
    acp_role_summary: "AI-enhanced subscription billing for agents",
    cert_status: "ACP Ready",
    regions: "Global",
    press_release_url: "https://www.chargebee.com/blog/chargebee-ai/",
    press_release_date: "2025"
  },
  {
    name: "Zuora",
    slug: "zuora",
    category: "Subscription",
    acp_role_summary: "AI-driven subscription economy platform",
    cert_status: "ACP Ready",
    regions: "Global",
    press_release_url: "https://www.zuora.com/press-releases/zuora-ai-innovations/",
    press_release_date: "2025"
  },
  {
    name: "Globant",
    slug: "globant",
    category: "Technology Services",
    acp_role_summary: "AI-powered digital commerce solutions",
    cert_status: "ACP Ready",
    regions: "Global",
    press_release_url: "https://www.globant.com/news/globant-ai-reinvention",
    press_release_date: "2025"
  },
];
