import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Ronit",
  lastName: "Sharma",
  name: `Ronit Sharma`,
  role: "Data Scientist & AI/ML Engineer",
  avatar: "/images/avatar.jpg",
  email: "ronitsharma1608@gmail.com",
  location: "Asia/Kolkata",
  languages: ["English", "Hindi"],
  locale: "en",
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>Occasional notes on AI engineering and data science</>,
};

const social: Social = [
  { name: "GitHub", icon: "github", link: "https://github.com/Ronit1608", essential: true },
  { name: "LinkedIn", icon: "linkedin", link: "https://www.linkedin.com/in/ronit-sharma-0763bb363/", essential: true },
  { name: "Email", icon: "email", link: `mailto:${person.email}`, essential: true },
  { name: "Resume", icon: "document", link: "/Ronit_Sharma_Resume.pdf", essential: true },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name} – ${person.role}`,
  description: `Portfolio of ${person.name}, a ${person.role} building production AI systems`,
  headline: <>Turning data and AI into real-world impact</>,
  featured: {
    display: false,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">DocMind</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured project
        </Text>
      </Row>
    ),
    href: "/work/docmind-local-rag-pipeline",
  },
  subline: (
    <>
      I'm {person.firstName}, a Data Scientist & AI/ML Engineer building multi-agent AI systems,
      LLM applications, and hybrid RAG pipelines. Currently a Data Science Intern at{" "}
      <Text as="span" size="xl" weight="strong">DMI Infotech</Text>.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role}`,
  tableOfContent: { display: true, subItems: false },
  avatar: { display: true },
  calendar: { display: false, link: "https://cal.com" },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I'm a Data Scientist and AI/ML Engineer who builds production-focused AI - multi-agent
        voice bots, LLM applications, and hybrid RAG pipelines. I blend strong machine learning and
        data-analytics fundamentals with hands-on engineering to ship systems that deliver measurable
        impact, from 80%+ call automation to double-digit conversion gains.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "DMI Infotech Limited",
        timeframe: "Jan 2026 - Present",
        role: "Data Science Intern, Consumer Analytics",
        achievements: [
          <>Built a production multi-agent voice bot (6 specialized agents) automating 80%+ of inbound call workflows and cutting manual handling by 200+ hours/month.</>,
          <>Designed FSM-driven agent workflows across 30+ state graphs and a hybrid RAG pipeline (FAISS + BM25), improving retrieval accuracy by nearly 30%.</>,
          <>Delivered multiple client-specific voice bots, each with its own product-catalog RAG knowledge base, reusing the multi-agent architecture across deployments.</>,
        ],
        images: [],
      },
      {
        company: "Hero MotoCorp Limited",
        timeframe: "May 2025 - Jul 2025",
        role: "Summer Intern, Digital & IT",
        achievements: [
          <>Analyzed 50,000+ records in Python and tracked conversion funnels in Adobe Analytics, lifting conversion rates by 15%.</>,
          <>Built ETL processes and visualizations that cut data-processing time by 35% and raised finance adoption by 10% through region-targeted campaigns.</>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "Delhi Technological University (formerly DCE)",
        description: <>B.Tech in Mechanical Engineering (2022 - 2026), CGPA 7.52 / 10.</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Machine Learning & Deep Learning",
        description: <>Python, PyTorch, scikit-learn, XGBoost/LightGBM/CatBoost, feature engineering, model evaluation & deployment.</>,
        tags: [
          { name: "Python", icon: "python" },
          { name: "PyTorch", icon: "pytorch" },
          { name: "scikit-learn", icon: "scikitlearn" },
        ],
        images: [],
      },
      {
        title: "AI, LLMs & RAG",
        description: <>LLMs, RAG pipelines, multi-agent systems, LangChain/LangGraph, prompt engineering, vector search (FAISS).</>,
        tags: [
          { name: "OpenAI", icon: "openai" },
          { name: "FastAPI", icon: "fastapi" },
          { name: "Docker", icon: "docker" },
        ],
        images: [],
      },
      {
        title: "Data & Tools",
        description: <>Data analysis, statistics, EDA, SQL, ETL/data pipelines, Pandas, NumPy, dashboards, Git, AWS.</>,
        tags: [
          { name: "Pandas", icon: "pandas" },
          { name: "PostgreSQL", icon: "postgresql" },
          { name: "Streamlit", icon: "streamlit" },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about AI and data...",
  description: `Read what ${person.name} has been up to recently`,
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `AI and data projects by ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  images: [],
};

export { person, social, newsletter, home, about, blog, work, gallery };
