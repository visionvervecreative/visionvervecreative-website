import {
  Camera,
  Video,
  PenTool,
  Sparkles,
  Code2,
  Cpu,
  type LucideIcon,
} from 'lucide-react'

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export const heroServices = [
  'Photography',
  'Videography',
  'Graphic Design',
  'Branding',
  'Website Development',
  'Software Development',
]

export const stats = [
  { value: 240, suffix: '+', label: 'Projects Delivered' },
  { value: 98, suffix: '%', label: 'Client Retention' },
  { value: 12, suffix: '', label: 'Awards Won' },
  { value: 40, suffix: '+', label: 'Team Creatives' },
]

export type Service = {
  icon: LucideIcon
  title: string
  description: string
  points: string[]
}

export const services: Service[] = [
  {
    icon: Code2,
    title: 'Website Development',
    description:
      'Fast, accessible, conversion-focused websites built on modern frameworks and headless architecture.',
    points: ['Next.js & Headless', 'Web Performance', 'CMS Integration'],
  },
  {
    icon: Cpu,
    title: 'Software Development',
    description:
      'Custom platforms, dashboards and automation engineered to scale with your ambitions.',
    points: ['Web Apps', 'APIs & Automation', 'Cloud Native'],
  },
  {
    icon: Sparkles,
    title: 'Branding',
    description:
      'Distinct identities and strategy that make audiences feel something and remember you.',
    points: ['Brand Strategy', 'Identity Systems', 'Guidelines'],
  },
  {
    icon: PenTool,
    title: 'Graphic Design',
    description:
      'Editorial-grade visual design across print and digital that elevates every touchpoint.',
    points: ['Art Direction', 'Print & Digital', 'Motion Graphics'],
  },
  {
    icon: Camera,
    title: 'Photography',
    description:
      'Cinematic product, lifestyle and campaign photography with a signature look.',
    points: ['Product', 'Lifestyle', 'Campaign'],
  },
  {
    icon: Video,
    title: 'Videography',
    description:
      'Story-driven films, commercials and social content that stop the scroll.',
    points: ['Commercials', 'Brand Films', 'Social Content'],
  },
]

export const processSteps = [
  { step: '01', title: 'Discovery', text: 'We listen, audit and align on goals, audience and ambition.' },
  { step: '02', title: 'Research', text: 'Market, competitor and user research to ground every decision.' },
  { step: '03', title: 'Strategy', text: 'A clear roadmap connecting brand, product and business outcomes.' },
  { step: '04', title: 'Design', text: 'Concept, art direction and interface design crafted to detail.' },
  { step: '05', title: 'Development', text: 'Robust, performant engineering with pixel-true fidelity.' },
  { step: '06', title: 'Testing', text: 'QA, accessibility and performance validation across devices.' },
  { step: '07', title: 'Launch', text: 'A confident, orchestrated go-live moment.' },
  { step: '08', title: 'Support', text: 'Ongoing optimization, iteration and growth partnership.' },
]

export type Category =
  | 'Websites'
  | 'Photography'
  | 'Videography'
  | 'Branding'
  | 'Software'

export type Project = {
  title: string
  client: string
  description: string
  category: Category
  image: string
  tech: string[]
  services: string[]
}

export const projects: Project[] = [
  {
    title: 'Aurora Commerce',
    client: 'Aurora Retail Group',
    description: 'A headless commerce platform with a bespoke design system and 3x faster load times.',
    category: 'Websites',
    image: '/images/project-web.png',
    tech: ['Next.js', 'TypeScript', 'Tailwind'],
    services: ['Web Development', 'Branding'],
  },
  {
    title: 'Lumen Identity',
    client: 'Lumen Studios',
    description: 'A full rebrand and identity system for a fast-growing creative production house.',
    category: 'Branding',
    image: '/images/project-branding.png',
    tech: ['Figma', 'Adobe'],
    services: ['Branding', 'Graphic Design'],
  },
  {
    title: 'Noir Editorial',
    client: 'Maison Noir',
    description: 'A cinematic campaign shoot for a luxury fashion capsule collection.',
    category: 'Photography',
    image: '/images/project-photo.png',
    tech: ['Studio', 'Retouch'],
    services: ['Photography', 'Art Direction'],
  },
  {
    title: 'Momentum Film',
    client: 'Momentum Sports',
    description: 'A hero brand film and social cutdowns that drove a 4x lift in engagement.',
    category: 'Videography',
    image: '/images/project-video.png',
    tech: ['Cinema', 'Color'],
    services: ['Videography', 'Editing'],
  },
  {
    title: 'Vertex Platform',
    client: 'Vertex Labs',
    description: 'A data-heavy analytics SaaS dashboard engineered for scale and clarity.',
    category: 'Software',
    image: '/images/project-software.png',
    tech: ['React', 'Next.js', 'Firebase'],
    services: ['Software', 'Web Development'],
  },
  {
    title: 'Halo Studio',
    client: 'Halo Interiors',
    description: 'A refined portfolio site with immersive scroll storytelling.',
    category: 'Websites',
    image: '/images/showcase-web.png',
    tech: ['Next.js', 'GSAP', 'Tailwind'],
    services: ['Web Development', 'Design'],
  },
]

export const testimonials = [
  {
    quote:
      'VisionVerve reimagined our brand from the ground up. The result feels premium, alive and unmistakably ours.',
    name: 'Elena Fischer',
    role: 'CMO, Aurora Retail Group',
  },
  {
    quote:
      'They blend art and engineering better than any team we have worked with. Our platform has never felt this fast.',
    name: 'Marcus Lee',
    role: 'Founder, Vertex Labs',
  },
  {
    quote:
      'From strategy to launch, every detail was handled with craft and care. A true creative partner.',
    name: 'Sofia Alvarez',
    role: 'Director, Maison Noir',
  },
  {
    quote:
      'The brand film they produced became the centerpiece of our biggest campaign to date.',
    name: 'David Chen',
    role: 'Head of Growth, Momentum Sports',
  },
]

export const clients = [
  'Aurora',
  'Lumen',
  'Vertex',
  'Maison Noir',
  'Momentum',
  'Halo',
  'Nova',
  'Atlas',
]

export const techStack = [
  'React',
  'Next.js',
  'TypeScript',
  'Tailwind',
  'Firebase',
  'WordPress',
  'Figma',
  'Adobe',
  'HTML',
  'CSS',
  'JavaScript',
]

export const pricing = [
  {
    name: 'Launch',
    price: '$4k',
    tagline: 'For focused brands ready to make a mark.',
    features: ['Brand or landing site', 'Core identity kit', '2 revision rounds', '30-day support'],
    featured: false,
  },
  {
    name: 'Growth',
    price: '$12k',
    tagline: 'Our most popular end-to-end partnership.',
    features: [
      'Full website or app',
      'Complete brand system',
      'Photography or video day',
      'Unlimited revisions',
      '90-day support',
    ],
    featured: true,
  },
  {
    name: 'Signature',
    price: 'Custom',
    tagline: 'For ambitious, multi-surface programs.',
    features: [
      'Software + brand + content',
      'Dedicated creative team',
      'Ongoing retainer',
      'Priority support',
    ],
    featured: false,
  },
]

export const blogPosts = [
  {
    title: 'Designing brands that feel inevitable',
    category: 'Branding',
    excerpt: 'How strategy, restraint and craft combine to make an identity feel timeless.',
    date: 'Mar 12, 2026',
    image: '/images/blog-1.png',
    featured: true,
  },
  {
    title: 'The performance-first web in 2026',
    category: 'Development',
    excerpt: 'Why speed is a design decision and how we ship sub-second experiences.',
    date: 'Feb 28, 2026',
    image: '/images/project-web.png',
    featured: false,
  },
  {
    title: 'Lighting for cinematic product film',
    category: 'Videography',
    excerpt: 'The rig, the ratios and the color grade behind our signature look.',
    date: 'Feb 04, 2026',
    image: '/images/project-video.png',
    featured: false,
  },
]

export const faqs = [
  {
    q: 'What kind of clients do you work with?',
    a: 'From ambitious startups to established brands. If you care about craft and outcomes, we are a fit.',
  },
  {
    q: 'How long does a typical project take?',
    a: 'Brand and site engagements usually run 4–10 weeks depending on scope. We share a clear timeline after discovery.',
  },
  {
    q: 'Do you offer ongoing support?',
    a: 'Yes. Every project includes a support window, and most clients continue on a growth retainer.',
  },
  {
    q: 'Can you handle both creative and engineering?',
    a: 'That is our core strength — one team spanning brand, design, film and full-stack development.',
  },
]
