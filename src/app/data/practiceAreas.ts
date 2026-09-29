export interface PracticeArea {
  id: number;
  number: string;
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  intro: string;
  services: string[];
}

export const practiceAreas: PracticeArea[] = [
  {
    id: 1,
    number: "01",
    slug: "corporate-commercial-law",
    title: "Corporate & Commercial Law",
    shortTitle: "Corporate & Commercial",
    description:
      "Strategic legal support for businesses navigating transactions, corporate structures, agreements and regulatory obligations.",
    intro:
      "We advise businesses and institutions on legal matters arising throughout the corporate lifecycle, with an emphasis on practical solutions that support commercial objectives.",
    services: [
      "Corporate Advisory",
      "Commercial Agreements",
      "Business Structuring",
      "Corporate Governance",
      "Regulatory Compliance",
      "Transaction Support",
    ],
  },

  {
    id: 2,
    number: "02",
    slug: "dispute-resolution",
    title: "Dispute Resolution",
    shortTitle: "Dispute Resolution",
    description:
      "Strategic representation and advice for clients navigating commercial, civil and other legal disputes.",
    intro:
      "We help clients assess disputes carefully, understand available options and pursue strategies designed to protect their interests and achieve practical outcomes.",
    services: [
      "Commercial Litigation",
      "Civil Litigation",
      "Negotiation",
      "Mediation",
      "Arbitration",
      "Pre-Dispute Advisory",
    ],
  },

  {
    id: 3,
    number: "03",
    slug: "real-estate-property",
    title: "Real Estate & Property",
    shortTitle: "Real Estate & Property",
    description:
      "Legal guidance across property transactions, documentation, ownership, development and related real estate matters.",
    intro:
      "We support individuals, businesses and institutions with the legal considerations involved in acquiring, developing, managing and transferring property.",
    services: [
      "Property Transactions",
      "Title Review",
      "Leases",
      "Property Documentation",
      "Real Estate Advisory",
      "Property Disputes",
    ],
  },

  {
    id: 4,
    number: "04",
    slug: "banking-finance",
    title: "Banking & Finance",
    shortTitle: "Banking & Finance",
    description:
      "Legal advice relating to financing arrangements, financial transactions and the commercial relationships surrounding them.",
    intro:
      "We provide legal support on financing matters with careful attention to transaction structure, documentation, obligations and risk.",
    services: [
      "Financing Transactions",
      "Loan Documentation",
      "Security Documentation",
      "Financial Agreements",
      "Transaction Review",
      "Regulatory Advisory",
    ],
  },

  {
    id: 5,
    number: "05",
    slug: "intellectual-property",
    title: "Intellectual Property",
    shortTitle: "Intellectual Property",
    description:
      "Helping businesses and creators understand, protect and manage intellectual property and commercially valuable assets.",
    intro:
      "We advise clients on protecting and managing intellectual property as part of their broader commercial and business strategy.",
    services: [
      "Trademark Advisory",
      "Copyright Advisory",
      "IP Agreements",
      "Licensing",
      "Brand Protection",
      "IP Commercialisation",
    ],
  },
];

export function getPracticeArea(slug: string) {
  return practiceAreas.find((area) => area.slug === slug);
}