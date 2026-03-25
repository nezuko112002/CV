export const portfolioData = {
  name: "Crisjay S. Juevesano",
  photo: "/2x2.png",
  role: "Frontend Developer",
  tagline: ["Crafting", "interfaces", "that feel", "inevitable."],
  bio: [
    "I build pixel-perfect, performant interfaces where design intention meets engineering precision. Focused on the intersection of motion, accessibility, and clean component architecture.",
   
  ],
  stats: [
    { num: "8", label: "Months experience" },
    { num: "2", label: "Projects shipped" },
    { num: "∞", label: "Coffee consumed" },
    { num: "01", label: "Obsession: Coding" },
  ],
  skills: [
    {
      title: "Languages",
      tags: ["TypeScript", "HTML5", "CSS"],
    },
    {
      title: "Frameworks",
      tags: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    },
    {
      title: "Workflow",
      tags: ["Git / GitHub", "Figma", "Vite", "Vercel", "Netlify", "Supabase"],
    },
  ],
  experience: [
    {
      date: "August 2025 - Present",
      company: "SaleSnap",
      role: "Frontend Developer",
      bullets: [],
    },
  ],
  projects: [
    {
      num: "01",
      title: "Lakbay Travel",
      desc: "Travel booking website for the Philippines built with HTML and CSS: flights, island-hopping tours, and hotel reservations with a single “basket” checkout flow.",
      stack: ["HTML", "CSS", "UI"],
      live: "https://nezuko112002.github.io/Lakbay-travel/",
      code: "https://github.com/nezuko112002/Lakbay-travel",
    },
    {
      num: "02",
      title: "Personal CV Portfolio",
      desc: "Minimalist personal CV/portfolio website to showcase my frontend skills, projects, experience, and contact details.",
      stack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      live: "#",
      code: "#",
    },
    {
      num: "03",
      title: "SK Management System",
      desc: "Barangay SK management web app focused on organizing records, workflows, and admin tasks in a centralized interface.",
      stack: ["Next.js", "TypeScript", "Tailwind CSS"],
      live: "#",
      code: "https://github.com/nezuko112002/Sk-Management-System",
    },
    {
      num: "04",
      title: "Project Four",
      desc: "Coming soon.",
      stack: ["React", "Supabase", "CSS"],
      live: "#",
      code: "#",
    },
  ],
  contact: [
    { label: "Email", value: "crisjayjuevesano50@gmail.com", href: "mailto:crisjayjuevesano50@gmail.com" },
    { label: "Phone", value: "09701531002", href: "tel:09701531002" },
    { label: "Facebook", value: "facebook.com/crisjayjuevesano", href: "https://facebook.com/crisjayjuevesano" },
  ],
} as const;

