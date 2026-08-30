import { Experience } from "@/types/portfolio";

export const experience: Experience[] = [
  {
    company: "PT Bank Hibank Indonesia",
    role: "IT Developer Intern",
    team: "Tech Modernization — Middleware Development",
    employmentType: "Internship",
    location: "Jakarta, Indonesia",
    startDate: "Feb 2026",
    current: true,
    description: "Contributing to digital banking systems across middleware, full-stack applications, API integration, relational databases, testing, and internal automation.",
    highlights: [
      "Developed full-stack modules for a digital banking Biller Management platform, working across frontend interfaces, backend services, and relational database structures.",
      "Built and maintained RESTful middleware services and third-party integrations, managing request/response mapping, API testing, and database validation.",
      "Implemented relational backend joins and service-layer logic to consolidate interconnected supplier, product, and customer data.",
      "Developed internal Human Capital applications including CV screening, Recruitment Tracker, and automated letter generation covering ERD design, frontend, and backend.",
      "Supported modernization of banking systems including legacy middleware services, response-code mapping, deployment support, and SOA/Solace messaging training."
    ],
    technologies: [
      "C#", ".NET", "PHP", "REST APIs", "SQL Server", "DBeaver", "HTML", "CSS", "JavaScript", "Git", "GitHub", "Postman", "Swagger / OpenAPI", "SOA", "Solace"
    ]
  },
  {
    company: "DataAnnotation.tech",
    role: "Freelance AI Evaluator & Prompt Engineer",
    employmentType: "Freelance / Contract",
    location: "Remote",
    startDate: "Mar 2026",
    current: true,
    highlights: [
      "Evaluated Large Language Model outputs across coding, logical reasoning, and factual accuracy tasks using structured human-feedback workflows.",
      "Designed and tested complex multi-turn prompts to identify reasoning failures, edge cases, and alignment issues in AI-generated responses.",
      "Produced high-quality annotated evaluation data while maintaining consistency, factual rigor, and detailed reasoning standards across technical tasks."
    ],
    technologies: [
      "LLM Evaluation", "Prompt Engineering", "RLHF", "AI Evaluation"
    ]
  },
  {
    company: "Aula Simfonia Jakarta",
    role: "Independent Security Researcher",
    employmentType: "Independent / Bug Bounty",
    location: "Jakarta, Indonesia",
    startDate: "Mar 2026",
    endDate: "Apr 2026",
    highlights: [
      "Discovered and responsibly disclosed two critical API vulnerabilities in an e-ticketing system: a payment-bypass business logic flaw and an Insecure Direct Object Reference (IDOR).",
      "Produced a technical Proof of Concept and remediation guidance, collaborated with management through successful patching, and received official acknowledgment and a security reward."
    ],
    technologies: [
      "API Security", "Postman", "REST APIs"
    ]
  }
];
