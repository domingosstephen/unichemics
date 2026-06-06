import type { BlogCategory, BlogAuthor } from "../../types/blog";

export interface TopicConfig {
  title: string;
  category: BlogCategory;
  keywords: string[];
  priority: "high" | "medium" | "low";
}

export interface TopicCluster {
  category: BlogCategory;
  topics: TopicConfig[];
}

export const AUTHORS: BlogAuthor[] = [
  {
    name: "Dr. Marcus Okonkwo",
    title: "Industrial Chemistry Specialist",
    bio: "Dr. Marcus Okonkwo holds a PhD in Industrial Chemistry and has over 15 years of experience in chemical procurement and quality assurance across manufacturing sectors.",
  },
  {
    name: "Sarah Chen",
    title: "Chemical Supply Chain Analyst",
    bio: "Sarah Chen is a chemical supply chain expert with a decade of experience in international chemical trade.",
  },
  {
    name: "Dr. Elena Vasquez",
    title: "Chemical Safety and Compliance Advisor",
    bio: "Dr. Elena Vasquez is a certified hazmat specialist and chemical safety consultant with 12 years in regulatory compliance.",
  },
];

export const TOPIC_CLUSTERS: TopicCluster[] = [
  {
    category: "chemical-guide",
    topics: [
      { title: "Complete Guide to Citric Acid: Uses, Grades, and Specifications", keywords: ["citric acid", "citric acid uses", "citric acid grades", "food grade citric acid"], priority: "high" },
      { title: "Hydrochloric Acid: Industrial Applications and Safety", keywords: ["hydrochloric acid", "HCl industrial uses", "muriatic acid"], priority: "high" },
      { title: "Sodium Hydroxide (Caustic Soda): Properties, Uses, and Handling Guide", keywords: ["sodium hydroxide", "caustic soda", "NaOH uses", "caustic soda handling"], priority: "high" },
      { title: "Activated Carbon: Types, Applications, and Selection Guide", keywords: ["activated carbon", "activated charcoal industrial", "carbon filtration"], priority: "medium" },
      { title: "Calcium Hypochlorite: Water Treatment Applications and Dosing", keywords: ["calcium hypochlorite", "water treatment chemicals", "pool chlorine"], priority: "high" },
      { title: "Sulfuric Acid: The Backbone of Industrial Chemistry", keywords: ["sulfuric acid", "H2SO4", "sulfuric acid uses", "battery acid"], priority: "medium" },
      { title: "Hydrogen Peroxide: Industrial Grades and Applications", keywords: ["hydrogen peroxide industrial", "H2O2 grades", "hydrogen peroxide uses"], priority: "medium" },
      { title: "Sodium Hypochlorite: Production, Uses, and Storage", keywords: ["sodium hypochlorite", "bleach industrial", "NaOCl"], priority: "medium" },
    ],
  },
  {
    category: "industry-application",
    topics: [
      { title: "Essential Chemicals for Water Treatment Plants", keywords: ["water treatment chemicals", "potable water chemicals", "wastewater treatment"], priority: "high" },
      { title: "Agricultural Chemicals: A Guide for Modern Farming", keywords: ["agricultural chemicals", "fertilizer chemicals", "crop protection"], priority: "high" },
      { title: "Food-Grade Chemicals: Additives, Preservatives, and Quality Standards", keywords: ["food grade chemicals", "food additives", "food preservatives"], priority: "high" },
      { title: "Mining Chemicals: Flotation Reagents and Processing Aids", keywords: ["mining chemicals", "flotation reagents", "mineral processing"], priority: "medium" },
      { title: "Pharmaceutical Excipients: Grades and Compliance Requirements", keywords: ["pharmaceutical excipients", "pharma grade chemicals", "USP NF grade"], priority: "medium" },
      { title: "Chemicals in Textile Manufacturing: Dyeing, Finishing, and Treatment", keywords: ["textile chemicals", "dyeing chemicals", "fabric finishing"], priority: "low" },
    ],
  },
  {
    category: "safety-handling",
    topics: [
      { title: "How to Read and Understand a Safety Data Sheet (SDS)", keywords: ["safety data sheet", "SDS guide", "MSDS", "chemical safety information"], priority: "high" },
      { title: "Chemical Storage Best Practices for Industrial Facilities", keywords: ["chemical storage", "chemical warehouse", "incompatible chemicals"], priority: "high" },
      { title: "GHS Hazard Classification: What Buyers Need to Know", keywords: ["GHS classification", "hazard symbols", "chemical labeling", "GHS pictograms"], priority: "medium" },
      { title: "Personal Protective Equipment for Chemical Handling", keywords: ["PPE chemicals", "chemical gloves", "safety equipment"], priority: "medium" },
      { title: "Chemical Spill Response: Prevention and Cleanup Procedures", keywords: ["chemical spill response", "spill kit", "chemical cleanup"], priority: "medium" },
      { title: "Chemical Transportation Regulations: Shipper Guide", keywords: ["chemical transport", "dangerous goods shipping", "IMDG code"], priority: "low" },
    ],
  },
  {
    category: "market-insight",
    topics: [
      { title: "Global Citric Acid Market: Supply, Demand, and Pricing Trends", keywords: ["citric acid market", "citric acid price", "citric acid supply"], priority: "high" },
      { title: "Caustic Soda Supply Chain: From Manufacturer to End User", keywords: ["caustic soda supply chain", "NaOH market", "caustic soda pricing"], priority: "high" },
      { title: "How Chemical Prices Are Determined in International Trade", keywords: ["chemical pricing", "chemical market pricing", "commodity chemicals price"], priority: "medium" },
      { title: "African Chemical Market: Growth Opportunities and Import Trends", keywords: ["Africa chemical market", "chemical imports Africa", "African chemical industry"], priority: "high" },
      { title: "South American Chemical Industry: Regional Trends and Opportunities", keywords: ["South America chemicals", "Brazil chemical market", "Latin America chemical industry"], priority: "medium" },
    ],
  },
  {
    category: "comparison",
    topics: [
      { title: "Citric Acid vs Phosphoric Acid: Which Acidulant Is Right for Your Application?", keywords: ["citric acid vs phosphoric acid", "acidulant comparison"], priority: "high" },
      { title: "Calcium Hypochlorite vs Sodium Hypochlorite for Water Disinfection", keywords: ["calcium hypochlorite vs sodium hypochlorite", "water disinfection comparison"], priority: "high" },
      { title: "Food-Grade vs Technical-Grade Chemicals: When Does Purity Matter?", keywords: ["food grade vs technical grade", "chemical purity grades"], priority: "high" },
      { title: "Granular vs Powdered Activated Carbon: Choosing the Right Form", keywords: ["GAC vs PAC", "activated carbon comparison"], priority: "medium" },
      { title: "Liquid vs Dry Chemical Feedstock: Cost, Handling, and Efficiency", keywords: ["liquid vs dry chemicals", "chemical form comparison"], priority: "medium" },
    ],
  },
  {
    category: "how-to",
    topics: [
      { title: "How to Calculate Chemical Import Duties and Total Landed Cost", keywords: ["chemical import duties", "landed cost calculation", "chemical import cost"], priority: "high" },
      { title: "How to Request and Evaluate a Chemical Supplier Quote", keywords: ["chemical supplier quote", "RFQ chemicals", "chemical procurement"], priority: "high" },
      { title: "Understanding Incoterms for Chemical Shipments: FOB, CIF, DDP Explained", keywords: ["incoterms chemicals", "FOB CIF DDP", "chemical shipping terms"], priority: "high" },
      { title: "How to Verify Chemical Purity: Reading a Certificate of Analysis", keywords: ["certificate of analysis", "COA chemicals", "chemical purity testing"], priority: "medium" },
      { title: "How to Set Up a Chemical Inventory Management System", keywords: ["chemical inventory", "chemical management system", "chemical tracking"], priority: "medium" },
      { title: "How to Choose the Right Chemical Supplier: Buyer Checklist", keywords: ["choose chemical supplier", "chemical vendor evaluation", "supplier qualification"], priority: "medium" },
    ],
  },
];

export const GENERATION_CONFIG = {
  articlesPerRun: 1,
  maxArticlesPerDay: 3,
  minWordCount: 1500,
  maxWordCount: 3000,
  targetReadingTime: 8,
  imageBasePath: "/images",
  defaultImages: [
    "/images/blog/chemicals-industrial.jpg",
    "/images/blog/laboratory-analysis.jpg",
    "/images/blog/warehouse-storage.jpg",
    "/images/blog/water-treatment.jpg",
    "/images/blog/safety-equipment.jpg",
  ],
};

export function getAllTopics(): TopicConfig[] {
  return TOPIC_CLUSTERS.flatMap((cluster) => cluster.topics);
}

export function getRandomAuthor(): (typeof AUTHORS)[number] {
  return AUTHORS[Math.floor(Math.random() * AUTHORS.length)];
}
