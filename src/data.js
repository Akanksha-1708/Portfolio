// Instead of writing your personal information directly inside every React component, you keep it in one place.

export const profile = {
  name: 'Akanksha Dwivedi',
  role: 'Computer Science Engineering Student',
  tagline:
    'Building intelligent systems and AI-powered applications.',
  description:
    'I am a CSE student at PSIT, exploring AI, machine learning, and software engineering. I enjoy building practical projects and working with emerging technologies.',
  status: 'Open to internships',
  github: 'https://github.com/Akanksha-1708',
  email: 'akadwi96@gmail.com',
  linkedin: '',
  resume: '',
};

export const marqueeItems = [
  'C++',
  'Python',
  'Machine Learning',
  'React',
  'LangChain',
  'LangGraph',
  'MCP',
  'Open Source',
];


export const projects = [
  {
    id: 'gitverse',
    slug: 'gitverse',
    title: 'GitVerse',
    category: 'Web Development',
    year: '2026',
    blurb:
      'Explore and compare GitHub profiles through interactive analytics. Search users, compare their statistics, discover top repositories, and visualize programming language usage.',
    stack: ['JavaScript', 'GitHub API', 'Chart.js', 'GSAP', 'HTML', 'CSS'],
    url: 'ADD_DEPLOYMENT_LINK',
    github: 'https://github.com/Akanksha-1708/GitVerse',
  },
  {
    id: 'persistent-chatbot',
    slug: 'persistent-streaming-ai-chatbot',
    title: 'Persistent Streaming AI Chatbot',
    category: 'Generative AI',
    year: '2026',
    blurb:
      'A conversational AI application with real-time streaming responses and thread-based conversation memory. Built with LangGraph and Streamlit, using Mistral AI for generating responses and MemorySaver to retain context within conversations.',
    stack: [
      'Python',
      'LangGraph',
      'LangChain',
      'Mistral AI',
      'Streamlit',
    ],
    url: 'ADD_DEPLOYMENT_LINK',
    github: 'ADD_GITHUB_LINK',
  },
  {
    id: 'skillswap',
    slug: 'skillswap',
    title: 'SkillSwap',
    category: 'Web Development',
    year: '2026',
    blurb:
      'A peer-to-peer skill-exchange platform where users can trade knowledge and skills instead of money. The project is designed around AI-powered skill matching and real-time collaboration.',
    stack: ['React', 'Vite', 'Firebase'],
    url: 'ADD_DEPLOYMENT_LINK',
    github: 'https://github.com/Akanksha-1708/Skillswap-react',
  },
  {
    id: 'cosmic-guardian',
    slug: 'cosmic-guardian-ai',
    title: 'Cosmic Guardian AI',
    category: 'AI & Data Visualization',
    year: '2026',
    blurb:
      'An interactive Earth and space intelligence platform combining live ISS tracking, 3D Earth visualization, satellite monitoring, space-weather insights, near-Earth object tracking, and an AI-powered space assistant.',
    stack: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Three.js',
      'Space APIs',
    ],
    url: 'ADD_DEPLOYMENT_LINK',
    github: 'https://github.com/Akanksha-1708/Cosmic-Guardian-AI',
  },
];
