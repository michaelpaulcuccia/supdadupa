const cities: { city: string; state: string }[] = [
  { city: "New York", state: "NY" },
  { city: "Los Angeles", state: "CA" },
  { city: "Chicago", state: "IL" },
  { city: "Houston", state: "TX" },
  { city: "Dallas", state: "TX" },
  { city: "San Francisco", state: "CA" },
  { city: "Seattle", state: "WA" },
  { city: "Boston", state: "MA" },
  { city: "Washington", state: "D.C." },
  { city: "Atlanta", state: "GA" },
  { city: "Miami", state: "FL" },
  { city: "Austin", state: "TX" },
  { city: "Denver", state: "CO" },
  { city: "Phoenix", state: "AZ" },
  { city: "Minneapolis", state: "MN" },
  { city: "Charlotte", state: "NC" },
  { city: "Nashville", state: "TN" },
  { city: "Philadelphia", state: "PA" },
  { city: "San Diego", state: "CA" },
  { city: "Raleigh", state: "NC" },
];

export const jobList: {
  department: string;
  jobs: { title: string; location: { city: string; state: string }[] }[];
}[] = [
  {
    department: "Marketing",
    jobs: [
      { title: "Social Media Manager", location: [cities[0], cities[5]] }, // New York, San Francisco
      { title: "Marketing Analyst", location: [cities[10], cities[7]] }, // Miami, Boston
      { title: "SEO Specialist", location: [cities[6], cities[12]] }, // Seattle, Denver
    ],
  },
  {
    department: "Technology",
    jobs: [
      { title: "Software Engineer", location: [cities[1], cities[6]] }, // Los Angeles, Seattle
      { title: "Data Scientist", location: [cities[5], cities[13]] }, // San Francisco, Phoenix
      { title: "IT Support Specialist", location: [cities[8], cities[12]] }, // Washington, Denver
    ],
  },
  {
    department: "Finance",
    jobs: [
      { title: "Financial Analyst", location: [cities[2], cities[3]] }, // Chicago, Houston
      { title: "Accountant", location: [cities[4], cities[14]] }, // Dallas, Minneapolis
      { title: "Budget Manager", location: [cities[15], cities[9]] }, // Charlotte, Atlanta
    ],
  },
  {
    department: "Research and Development",
    jobs: [
      { title: "Research Scientist", location: [cities[13], cities[1]] }, // Phoenix, Los Angeles
      { title: "Product Designer", location: [cities[7], cities[5]] }, // Boston, San Francisco
      { title: "Innovation Analyst", location: [cities[0], cities[8]] }, // New York, Washington
    ],
  },
  {
    department: "Human Resources",
    jobs: [
      { title: "HR Generalist", location: [cities[3], cities[12]] }, // Houston, Denver
      { title: "Recruiter", location: [cities[6], cities[14]] }, // Seattle, Minneapolis
      { title: "Benefits Specialist", location: [cities[16], cities[17]] }, // Nashville, Philadelphia
    ],
  },
  {
    department: "Sales",
    jobs: [
      { title: "Account Manager", location: [cities[0], cities[18]] }, // New York, San Diego
      {
        title: "Business Development Representative",
        location: [cities[9], cities[13]],
      }, // Atlanta, Phoenix
      { title: "Sales Executive", location: [cities[10], cities[15]] }, // Miami, Charlotte
    ],
  },
  {
    department: "Legal",
    jobs: [
      { title: "Paralegal", location: [cities[0], cities[18]] }, // New York, San Diego
      { title: "Legal Analyst", location: [cities[0], cities[8]] }, // New York, Washington
    ],
  },
];
