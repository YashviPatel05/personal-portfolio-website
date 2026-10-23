import React, { useState } from 'react'
import { AnimatePresence, MotionConfig, motion } from 'framer-motion'

const email = 'yashvip010905@gmail.com'
const linkedIn = 'https://www.linkedin.com/in/yashvi-patel'
const projects = [
  { n: '01', date: '2025 — 2026', title: <>Personal Portfolio<br />Website</>, visual: 'portfolio', stack: ['React.js', 'Tailwind CSS', 'Framer Motion', 'Vercel'], footer: 'PERFORMANCE · INTERACTION · DEPLOYMENT', description: 'Designed and developed a fully responsive personal portfolio with a 95+ Lighthouse performance score and sub-1.5 second load time across devices. Built 8+ animated UI components and scroll-triggered transitions with Framer Motion, improving engagement and reducing estimated bounce rate by 30%. Deployed on Vercel with a GitHub Actions CI/CD pipeline for 99.9% uptime and zero manual deployments after setup.' },
  { n: '02', date: 'FULL STACK', title: <>Task Management<br />Application</>, visual: 'tasks', stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'WebSocket'], footer: 'AUTH · REAL-TIME · API DESIGN', description: 'Architected a collaborative task management system with role-based JWT authentication. Built 12+ RESTful API endpoints with Express.js and MongoDB, averaging under 120ms response times for CRUD operations under concurrent load. WebSocket synchronization enables live updates for 5+ simultaneous users without refreshing.' },
  { n: '03', date: 'FULL STACK', title: <>E-Commerce<br />Web Platform</>, visual: 'shop', stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe API'], footer: 'STOREFRONT · CHECKOUT · SEO', description: 'Built a production-ready storefront with 50+ dynamic product listings, a persistent cart, and a validated multi-step checkout. Integrated Stripe with webhook listeners for real-time order updates. Server-side rendering and static generation improved page load speed by 40% and reached a Google SEO score of 90+.' },
]
const skills = [
  ['01', 'Frontend', 'HTML5, CSS3, JavaScript (ES6+), TypeScript, React.js, Next.js, Tailwind CSS, Bootstrap, Redux Toolkit'],
  ['02', 'Backend', 'Node.js, Express.js, RESTful APIs, GraphQL, Python, Flask, FastAPI'],
  ['03', 'Data & tools', 'MongoDB, MySQL, PostgreSQL, Firebase Firestore · Git, GitHub, Docker, Postman, Linux, Vercel, Netlify'],
  ['04', 'Practices', 'JWT, OAuth 2.0, WebSockets, MVC, Agile, SDLC, data structures and algorithms'],
]
const credentials = [
  ['01', 'Meta Frontend Developer', 'Professional Certificate · Coursera · 2024'],
  ['02', 'The Complete Web Developer Bootcamp', 'Udemy · Node.js, Express.js, MongoDB, REST APIs'],
  ['03', '200+ coding problems solved', 'LeetCode · Data structures and algorithms'],
  ['04', '24-hour college hackathon', 'Delivered a working prototype in a three-person team'],
]
const reveal = { hidden: { opacity: 0, y: 26 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } } }

function Reveal({ children, className = '', delay = 0, as: Component = motion.div }) {
  return <Component className={className} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.16 }} transition={{ delay }}>{children}</Component>
}
function Kicker({ children, trailing }) { return <div className="section-kicker"><span>{children}</span><span className="kicker-line" />{trailing && <span>{trailing}</span>}</div> }

function Header() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  return <header className="site-header"><a className="wordmark" href="#home" aria-label="Yashvi Patel home">YP<span>.</span></a>
    <button className="menu-toggle focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c0f179]" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} onClick={() => setOpen(!open)}><span /><span /></button>
    <AnimatePresence initial={false}><motion.nav className={`nav ${open ? 'open' : ''}`} aria-label="Main navigation" initial={false}>
      <a href="#about" onClick={close}>About</a><a href="#work" onClick={close}>Projects</a><a href="#skills" onClick={close}>Skills</a><a className="nav-contact" href={`mailto:${email}`} onClick={close}>Let’s talk <span>↗</span></a>
    </motion.nav></AnimatePresence>
  </header>
}
function HeroArt() {
  return <motion.div className="hero-art" role="img" aria-label="Abstract green Yashvi Patel monogram" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.2 }}>
    <motion.div className="orbit orbit-one" animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 44, ease: 'linear' }} /><motion.div className="orbit orbit-two" animate={{ rotate: -360 }} transition={{ repeat: Infinity, duration: 52, ease: 'linear' }} /><motion.div className="orbit orbit-three" animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 60, ease: 'linear' }} />
    <motion.div className="art-core" animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}><span>YP</span><i>✳</i></motion.div><span className="art-label label-top">FRONTEND<br />&amp; BACKEND</span><span className="art-label label-bottom">IDEA → INTERFACE</span><span className="art-star">✳</span>
  </motion.div>
}
function ProjectPreview({ project }) {
  if (project.visual === 'portfolio') return <div className="project-visual portfolio-visual"><div className="mini-browser"><div className="browser-bar"><i /><i /><i /><span>yashvipatel.dev</span></div><div className="mini-content"><small>DESIGN / BUILD / ITERATE</small><b>Thoughtful<br />by design<span>.</span></b><div className="mini-chip">SCROLL TO EXPLORE ↘</div></div><div className="mini-sun">✳</div></div><span className="visual-index">01 — PERSONAL</span></div>
  if (project.visual === 'tasks') return <div className="project-visual task-visual"><div className="task-window"><div className="task-title"><span className="task-mark">◫</span> focusboard <span className="avatar">YP</span></div><div className="task-columns"><div><small>IN PROGRESS <b>03</b></small><i className="task-item lilac">Refresh onboarding flow</i><i className="task-item yellow">Add team settings</i></div><div><small>COMPLETED <b>02</b></small><i className="task-item green">Ship API updates</i></div></div><div className="live-pill"><span className="status-dot" /> LIVE SYNC</div></div><span className="visual-index">02 — COLLABORATION</span></div>
  return <div className="project-visual shop-visual"><div className="shop-window"><div className="shop-nav"><b>FORM &amp; FIELD</b><span>SHOP&nbsp;&nbsp; ABOUT&nbsp;&nbsp; BAG (0)</span></div><div className="shop-body"><div className="shop-copy"><small>OBJECTS FOR EVERY DAY</small><b>Made to<br />live with<span>.</span></b><span className="shop-link">EXPLORE COLLECTION ↗</span></div><div className="shop-product"><div className="product-shape" /><small>01 / CERAMIC VASE</small></div></div></div><span className="visual-index">03 — COMMERCE</span></div>
}
function ProjectCard({ project }) {
  return <motion.article className="project-card" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.12 }}>
    <ProjectPreview project={project} /><div className="project-info"><div className="project-topline"><span>{project.n} / 03</span><span>{project.date}</span></div><h3>{project.title}</h3><p className="project-description">{project.description}</p><div className="tags">{project.stack.map(item => <span key={item}>{item}</span>)}</div><div className="project-footer"><span>{project.footer}</span><span className="arrow-circle" aria-hidden="true">↗</span></div></div>
  </motion.article>
}

function App() {
  return <MotionConfig reducedMotion="user"><Header /><main>
    <section className="hero wrap" id="home"><div className="hero-copy"><motion.p className="eyebrow" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}><span className="status-dot" /> AVAILABLE FOR SOFTWARE DEVELOPER ROLES</motion.p>
      <motion.h1 initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}>Building web<br />experiences with <em>purpose.</em></motion.h1><motion.p className="hero-intro" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>Hi, I’m Yashvi — a frontend and backend developer who turns ideas into responsive, dependable products.</motion.p>
      <motion.div className="hero-actions" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }}><a className="button button-primary" href="#work">Explore my work <span>↘</span></a><a className="text-link" href={`mailto:${email}`}>Get in touch <span>↗</span></a></motion.div><div className="hero-meta"><span>AHMEDABAD, INDIA</span><span>COMPUTER SCIENCE · CLASS OF 2027</span></div></div><HeroArt /><a className="scroll-cue" href="#about"><span className="scroll-line" /> SCROLL TO EXPLORE</a>
    </section>
    <section className="about section wrap" id="about"><Kicker>01 / ABOUT</Kicker><div className="about-grid"><Reveal as={motion.h2}>Curious by nature.<br /><em>Builder by choice.</em></Reveal><Reveal className="about-text" delay={0.08}><p>I’m a Computer Science Engineering student at Adani University with hands-on experience building full-stack web applications using React.js, Node.js, and REST APIs.</p><p>I care about clean, scalable code and interfaces that feel fast, clear, and enjoyable to use. From database design and API development to deployment, I like seeing the whole product come together.</p><a className="text-link" href={linkedIn} target="_blank" rel="noreferrer">More about me on LinkedIn <span>↗</span></a></Reveal></div>
      <div className="stat-row">{[['95', '+', 'LIGHTHOUSE SCORE', 'PORTFOLIO PROJECT'], ['200', '+', 'LEETCODE PROBLEMS', 'SOLVED'], ['2027', '', 'B.TECH COMPUTER SCIENCE', 'EXPECTED GRADUATION']].map(([n, plus, first, second], i) => <Reveal key={n} delay={i * 0.07}><strong>{n}<span>{plus}</span></strong><small>{first}<br />{second}</small></Reveal>)}</div>
    </section>
    <section className="work section" id="work"><div className="wrap"><Kicker trailing="THINGS I’VE BUILT">02 / SELECTED WORK</Kicker><Reveal className="work-heading"><h2>Selected <em>projects.</em></h2><p>Personal experiments and practical builds,<br />made to solve real problems.</p></Reveal><div className="project-list">{projects.map(project => <ProjectCard key={project.n} project={project} />)}</div></div></section>
    <section className="skills section wrap" id="skills"><Kicker trailing="TECH I WORK WITH">03 / TOOLKIT</Kicker><div className="skills-grid"><Reveal as={motion.h2}>Tools for<br />turning ideas<br /><em>into products.</em></Reveal><div className="skill-groups">{skills.map(([n, title, content], i) => <Reveal className="skill-group" key={n} delay={i * 0.05}><span className="skill-number">{n}</span><div><h3>{title}</h3><p>{content}</p></div></Reveal>)}</div></div></section>
    <section className="more section wrap"><Kicker>04 / BEYOND THE CODE</Kicker><div className="more-grid"><Reveal><h2>Always learning.<br /><em>Always building.</em></h2><p>Currently pursuing a B.Tech in Computer Science Engineering at Adani University, Ahmedabad. Expected graduation: May 2027.</p></Reveal><div className="credentials">{credentials.map(([n, title, note], i) => <Reveal key={n} delay={i * 0.04}><span>{n}</span><p><b>{title}</b><small>{note}</small></p></Reveal>)}</div></div><Reveal className="interest-line"><span>ALSO INTO</span><p>Open source <i>✳</i> System design <i>✳</i> UI/UX design <i>✳</i> Competitive programming <i>✳</i> Tech blogging</p></Reveal></section>
    <section className="contact" id="contact"><div className="wrap contact-inner"><Reveal><p className="eyebrow">HAVE A PROJECT IN MIND?</p><h2>Let’s make<br /><em>something useful.</em></h2><a className="contact-button" href={`mailto:${email}`}>Say hello <span>↗</span></a></Reveal><div className="contact-bottom"><span>AHMEDABAD, INDIA</span><span>OPEN TO SOFTWARE DEVELOPER OPPORTUNITIES</span></div></div></section>
  </main><footer className="footer wrap"><a className="wordmark" href="#home">YP<span>.</span></a><span>© 2026 YASHVI PATEL</span><div><a href={`mailto:${email}`}>EMAIL ↗</a><a href={linkedIn} target="_blank" rel="noreferrer">LINKEDIN ↗</a></div><a href="#home" className="back-top">BACK TO TOP ↑</a></footer></MotionConfig>
}
export default App


