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
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

export const company = {
  name: 'VisionVerve Creative (Pty) Ltd',
  founded: '2024',
  location: 'Cape Town, South Africa',
  email: 'visionvervetech@gmail.com',
  phones: ['+27 69 341 5147', '+27 67 206 5334'],
  whatsapp: '+27 69 341 5147',
  hours: [
    { day: 'Monday – Friday', time: '08:00 – 18:00' },
    { day: 'Saturday', time: '09:00 – 14:00' },
    { day: 'Sunday & Public Holidays', time: 'Closed' },
  ],
  socials: [
    { label: 'Instagram', href: '#' },
    { label: 'LinkedIn', href: '#' },
    { label: 'Behance', href: '#' },
    { label: 'YouTube', href: '#' },
    { label: 'Dribbble', href: '#' },
  ],
}

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

export const whyChoose = [
  {
    title: 'One team, every discipline',
    text: 'Branding, design, film and full-stack engineering under one roof — no handoffs, no lost context, one coherent vision.',
  },
  {
    title: 'Strategy before pixels',
    text: 'Every engagement starts with research and positioning so the work is beautiful and built to perform.',
  },
  {
    title: 'Craft obsessed',
    text: 'We sweat the details others skip — the micro-interactions, the kerning, the color grade, the load time.',
  },
  {
    title: 'Built to scale',
    text: 'Modern, headless, performance-first architecture that grows with your ambitions long after launch.',
  },
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

export type UniverseNode = {
  id: string
  title: string
  short: string
  icon: LucideIcon
  fx: number
  fy: number
  tooltip: string
  flow: string[]
  message: string
}

export const universeNodes: UniverseNode[] = [
  {
    id: 'branding',
    title: 'Branding & Strategy',
    short: 'Branding',
    icon: Sparkles,
    fx: 0.5,
    fy: 0.1,
    tooltip: 'Building a complete visual identity.',
    flow: ['Discovery', 'Brand Strategy', 'Identity System', 'Guidelines'],
    message: 'Every VisionVerve project starts with strategy — a complete visual identity that audiences feel and remember.',
  },
  {
    id: 'photography',
    title: 'Photography',
    short: 'Photography',
    icon: Camera,
    fx: 0.2,
    fy: 0.34,
    tooltip: 'Capturing moments that tell your story.',
    flow: ['Concept', 'Art Direction', 'Shoot', 'Retouch'],
    message: 'We capture moments that tell your story — cinematic imagery that gives the brand a soul.',
  },
  {
    id: 'videography',
    title: 'Videography',
    short: 'Videography',
    icon: Video,
    fx: 0.8,
    fy: 0.34,
    tooltip: 'Motion that moves people.',
    flow: ['Script', 'Production', 'Edit', 'Color & Sound'],
    message: 'Story-driven films and social content that stop the scroll and set the brand in motion.',
  },
  {
    id: 'graphic',
    title: 'Graphic Design',
    short: 'Graphic Design',
    icon: PenTool,
    fx: 0.5,
    fy: 0.42,
    tooltip: 'Turning ideas into visual experiences.',
    flow: ['Idea', 'Art Direction', 'Design', 'Delivery'],
    message: 'Design turns strategy into visual experiences — the connective tissue between brand and product.',
  },
  {
    id: 'website',
    title: 'Website Development',
    short: 'Web Dev',
    icon: Code2,
    fx: 0.5,
    fy: 0.66,
    tooltip: 'Beautiful design meets powerful technology.',
    flow: ['Graphic Design', 'Website Development', 'Software Integration', 'Launch'],
    message: 'At VisionVerve, websites are not built in isolation. They are powered by branding, design, content and technology.',
  },
  {
    id: 'software',
    title: 'Software Development',
    short: 'Software',
    icon: Cpu,
    fx: 0.5,
    fy: 0.9,
    tooltip: 'Powerful systems behind beautiful products.',
    flow: ['Architecture', 'Development', 'Integration', 'Scale'],
    message: 'Custom platforms and automation engineered to scale — the engine behind every experience we ship.',
  },
]

export const universeEdges: [string, string][] = [
  ['branding', 'photography'],
  ['branding', 'videography'],
  ['branding', 'graphic'],
  ['photography', 'videography'],
  ['graphic', 'website'],
  ['website', 'software'],
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

export type ServiceDetail = {
  id: string
  icon: LucideIcon
  title: string
  tagline: string
  overview: string
  image: string
  deliverables: string[]
  requested: string[]
  benefits: string[]
  process: string[]
  tools: string[]
  startingFrom: string
  faqs: { q: string; a: string }[]
}

export const serviceDetails: ServiceDetail[] = [
  {
    id: 'website-development',
    icon: Code2,
    title: 'Website Development',
    tagline: 'Fast, beautiful, conversion-focused websites.',
    overview:
      'We design and build modern websites that load instantly, look stunning and turn visitors into customers. From marketing sites to headless commerce, every build is engineered for performance, accessibility and growth.',
    image: '/images/project-web.png',
    deliverables: ['Custom responsive website', 'CMS setup & training', 'SEO foundations', 'Analytics & tracking', 'Performance optimization'],
    requested: ['Business & landing sites', 'Headless e-commerce', 'Web app front-ends', 'Site redesigns & migrations'],
    benefits: ['Sub-second load times', 'Higher conversion rates', 'Effortless content editing', 'Ranks well on Google'],
    process: ['Discovery & UX', 'Design', 'Development', 'Launch & optimize'],
    tools: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'WordPress', 'Vercel'],
    startingFrom: 'R 12 000',
    faqs: [
      { q: 'How long does a website take?', a: 'Most marketing sites launch in 3–6 weeks depending on scope and content readiness.' },
      { q: 'Can I edit the site myself?', a: 'Yes — we integrate a friendly CMS and train your team so you stay in control.' },
    ],
  },
  {
    id: 'software-development',
    icon: Cpu,
    title: 'Software Development',
    tagline: 'Custom platforms engineered to scale.',
    overview:
      'When off-the-shelf tools fall short, we build bespoke software — dashboards, portals, automation and APIs — designed around your workflow and ready to grow with your business.',
    image: '/images/project-software.png',
    deliverables: ['Custom web application', 'API design & integration', 'Admin dashboards', 'Automation workflows', 'Cloud deployment'],
    requested: ['Internal tools & portals', 'SaaS products', 'Booking & CRM systems', 'Third-party integrations'],
    benefits: ['Automate manual work', 'Own your platform', 'Scales with demand', 'Secure by design'],
    process: ['Architecture', 'Build', 'Integrate', 'Scale'],
    tools: ['React', 'Next.js', 'Node.js', 'TypeScript', 'Firebase', 'PostgreSQL'],
    startingFrom: 'R 25 000',
    faqs: [
      { q: 'Do you maintain the software after launch?', a: 'Yes, we offer ongoing support and retainer options to keep your platform evolving.' },
      { q: 'Can you integrate with our existing systems?', a: 'Absolutely — we specialise in connecting APIs, payment gateways and third-party tools.' },
    ],
  },
  {
    id: 'graphic-design',
    icon: PenTool,
    title: 'Graphic Design',
    tagline: 'Editorial-grade visuals across every touchpoint.',
    overview:
      'From social campaigns to print collateral, our design work turns strategy into visuals that command attention and stay unmistakably on-brand.',
    image: '/images/project-branding.png',
    deliverables: ['Social media kits', 'Marketing collateral', 'Print & packaging', 'Presentation decks', 'Motion graphics'],
    requested: ['Campaign creative', 'Pitch & sales decks', 'Event & signage design', 'Ad creative sets'],
    benefits: ['Consistent brand look', 'Scroll-stopping creative', 'Faster campaign turnaround', 'Ready-to-use assets'],
    process: ['Brief', 'Art direction', 'Design', 'Delivery'],
    tools: ['Figma', 'Adobe Photoshop', 'Illustrator', 'After Effects', 'InDesign'],
    startingFrom: 'R 3 500',
    faqs: [
      { q: 'Do you offer monthly design retainers?', a: 'Yes — many clients use a monthly retainer for ongoing social and campaign creative.' },
      { q: 'Will I get editable source files?', a: 'You receive organised, production-ready source files for every deliverable.' },
    ],
  },
  {
    id: 'branding',
    icon: Sparkles,
    title: 'Branding',
    tagline: 'Identities that make audiences feel something.',
    overview:
      'We craft distinctive brand identities and strategy — the names, logos, systems and stories that make a brand instantly recognisable and impossible to forget.',
    image: '/images/project-branding.png',
    deliverables: ['Brand strategy', 'Logo & identity system', 'Colour & typography', 'Brand guidelines', 'Brand messaging'],
    requested: ['New brand launches', 'Rebrands & refreshes', 'Sub-brand systems', 'Brand guidelines'],
    benefits: ['Instant recognition', 'Premium perception', 'Cohesive across media', 'Confident brand story'],
    process: ['Discovery', 'Strategy', 'Identity', 'Guidelines'],
    tools: ['Figma', 'Adobe Illustrator', 'Photoshop', 'InDesign'],
    startingFrom: 'R 9 500',
    faqs: [
      { q: 'What is included in a brand guideline?', a: 'Logo usage, colour, typography, imagery, tone of voice and application examples.' },
      { q: 'Can you refresh our brand without starting over?', a: 'Yes — we offer brand refreshes that modernise your identity while keeping equity.' },
    ],
  },
  {
    id: 'photography',
    icon: Camera,
    title: 'Photography',
    tagline: 'Cinematic imagery that gives brands a soul.',
    overview:
      'Product, lifestyle and campaign photography with a signature look — crafted lighting, art direction and retouching that make your brand look world-class.',
    image: '/images/project-photo.png',
    deliverables: ['Product photography', 'Lifestyle & campaign shoots', 'On-location or studio', 'Professional retouching', 'Usage-ready exports'],
    requested: ['E-commerce product shoots', 'Brand & lifestyle campaigns', 'Team & headshots', 'Event coverage'],
    benefits: ['Consistent visual identity', 'Higher product appeal', 'Assets for every channel', 'Standout campaign imagery'],
    process: ['Concept', 'Art direction', 'Shoot', 'Retouch'],
    tools: ['Full-frame cameras', 'Studio lighting', 'Capture One', 'Lightroom', 'Photoshop'],
    startingFrom: 'R 4 500',
    faqs: [
      { q: 'Do you shoot on-location?', a: 'Yes — we shoot in our studio or on-location across Cape Town and beyond.' },
      { q: 'How many edited images do we receive?', a: 'Deliverables are tailored per shoot; we agree on final counts during planning.' },
    ],
  },
  {
    id: 'videography',
    icon: Video,
    title: 'Videography',
    tagline: 'Story-driven films that stop the scroll.',
    overview:
      'From brand films to social content, we handle every stage — script, production, editing, colour and sound — to create video that moves people and drives results.',
    image: '/images/project-video.png',
    deliverables: ['Brand films', 'Social video & reels', 'Product & promo videos', 'Editing & colour grade', 'Sound design'],
    requested: ['Brand & hero films', 'Social content packages', 'Product launches', 'Event & recap videos'],
    benefits: ['Higher engagement', 'Emotional connection', 'Content for every platform', 'Professional production value'],
    process: ['Script', 'Production', 'Edit', 'Colour & sound'],
    tools: ['Cinema cameras', 'Gimbals & drones', 'Premiere Pro', 'DaVinci Resolve', 'After Effects'],
    startingFrom: 'R 8 000',
    faqs: [
      { q: 'Do you handle scripting and concept?', a: 'Yes — we can take a project from first idea through to the final graded film.' },
      { q: 'Can you produce content for social specifically?', a: 'Definitely — we craft vertical, platform-native content built to perform.' },
    ],
  },
]

export const coreValues = [
  { title: 'Craft Over Shortcuts', text: 'We choose the harder, better path — the detail nobody asked for but everybody feels.' },
  { title: 'Honesty Over Hype', text: 'Straight answers, realistic timelines and work that speaks louder than promises.' },
  { title: 'Partnership Over Transactions', text: 'We win when you win. We embed with your team and stay invested well past launch.' },
  { title: 'Curiosity Over Comfort', text: 'We question defaults, explore the new and keep learning so your brand stays ahead.' },
  { title: 'Impact Over Output', text: 'Beautiful is the baseline. We measure ourselves on the outcomes we create.' },
  { title: 'Together Over Silos', text: 'One team spanning strategy, design, film and code — no handoffs, no lost ideas.' },
]

export const timeline = [
  { year: '2024', title: 'VisionVerve is born', text: 'Founded in Cape Town with a belief that creativity and technology belong together.' },
  { year: '2024', title: 'First clients & identity', text: 'Launched our first brand systems and websites, shaping the VisionVerve signature look.' },
  { year: '2025', title: 'Full-service studio', text: 'Expanded into photography, videography and software — a true end-to-end creative team.' },
  { year: '2026', title: 'Scaling the vision', text: 'Growing our collective and partnering with ambitious brands across the globe.' },
]

export const philosophy = [
  { title: 'Design with intent', text: 'Every decision serves a purpose — beauty and function are never at odds.' },
  { title: 'Engineer for tomorrow', text: 'We build on modern, scalable foundations so the work lasts and grows.' },
  { title: 'Tell human stories', text: 'Technology is the medium; emotion and story are the message.' },
]

export type TeamMember = { name: string; role: string; initials: string }

export const team: TeamMember[] = [
  { name: 'Joining Soon', role: 'Creative Director', initials: 'VV' },
  { name: 'Joining Soon', role: 'Lead Engineer', initials: 'VV' },
  { name: 'Joining Soon', role: 'Brand Strategist', initials: 'VV' },
  { name: 'Joining Soon', role: 'Head of Film', initials: 'VV' },
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
  {
    title: 'Product photography that sells',
    category: 'Photography',
    excerpt: 'Composition, light and retouching principles that make products irresistible.',
    date: 'Jan 22, 2026',
    image: '/images/project-photo.png',
    featured: false,
  },
  {
    title: 'From idea to platform in eight weeks',
    category: 'Software',
    excerpt: 'A behind-the-scenes look at how we scope, build and ship custom software fast.',
    date: 'Jan 09, 2026',
    image: '/images/project-software.png',
    featured: false,
  },
  {
    title: 'Building a brand system that scales',
    category: 'Branding',
    excerpt: 'Design tokens, components and guidelines that keep growing brands consistent.',
    date: 'Dec 15, 2025',
    image: '/images/project-branding.png',
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
