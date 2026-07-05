// ---------------------------------------------------------------------------
// Akbar Academy, single source of truth.
// Add a subject, board, resource or team member here and it flows through the
// whole site (nav menus, homepage, future course/past-paper pages).
// ---------------------------------------------------------------------------

export const site = {
  name: "Akbar Academy",
  tagline: "A Class Above the Rest.",
  description:
    "Premium IGCSE & A-Level tuition across the GCC & Kuwait, Physics, Chemistry, Biology, Maths and English. A British-qualified team of examiners and published authors, and a proven system that turns confusion into clarity.",
  url: "https://www.akbaracademy.co.uk",
  whatsapp: "https://wa.me/96567036380",
  whatsappLabel: "+965 6703 6380",
  register: "https://akbaracademy.co.uk/register", // wire to student system
  login: "https://akbaracademy.co.uk/login",
  email: "akbaracademy.co.uk@gmail.com",
  socials: {
    facebook: "https://www.facebook.com/akbaracademyofficial/",
    instagram: "https://www.instagram.com/akbaracademyofficial/",
    tiktok: "https://www.tiktok.com/@akbaracademyofficial",
    x: "https://x.com/IGCSEPhysics",
    youtube: "https://www.youtube.com/@AkbarAcademyOfficial",
    linkedin: "https://www.linkedin.com/in/kaleemakbar/",
  },
  apps: {
    ios: "https://apps.apple.com/us/app/akbar-academy/id1542520695",
    android:
      "https://play.google.com/store/apps/details?id=com.physicslessononline.android",
  },
};

// Exam boards offered across subjects.
export const boards = [
  { slug: "cambridge", name: "Cambridge (CIE)", short: "Cambridge" },
  { slug: "edexcel", name: "Edexcel / Pearson", short: "Edexcel" },
  { slug: "aqa", name: "AQA / OxfordAQA", short: "AQA" },
];

// Levels offered.
export const levels = ["GCSE", "IGCSE", "AS-Level", "A-Level"];

// Subjects, the spine of the multi-subject platform.
export const subjects = [
  {
    slug: "physics",
    name: "Physics",
    color: "var(--subject-physics)",
    icon: "/assets/physics.png",
    iconDark: "/assets/physics_w.png",
    logo: "/assets/subject-physics-black.png",
    logoDark: "/assets/subject-physics-white.png",
    char: "/assets/subject-physics-char.png",
    tagline: "Concepts that finally click, and marks that follow.",
    blurb:
      "From forces and electricity to nuclear physics, we make the hardest ideas intuitive and drill the exam technique that turns understanding into A*s.",
    boards: ["cambridge", "edexcel", "aqa"],
    live: true,
    featured: true,
  },
  {
    slug: "chemistry",
    name: "Chemistry",
    color: "var(--subject-chemistry)",
    icon: "/assets/chemistry.png",
    iconDark: "/assets/chemistry_w.png",
    logo: "/assets/subject-chemistry-black.png",
    logoDark: "/assets/subject-chemistry-white.png",
    char: "/assets/subject-chemistry-char.png",
    tagline: "Structured mastery of every reaction, mole and mechanism.",
    blurb:
      "Organic, inorganic and physical chemistry taught as one connected system, with the calculations and practical skills the boards reward.",
    boards: ["cambridge", "edexcel", "aqa"],
    live: true,
  },
  {
    slug: "biology",
    name: "Biology",
    color: "var(--subject-biology)",
    icon: "/assets/biology.png",
    iconDark: "/assets/biology_w.png",
    logo: "/assets/subject-biology-black.png",
    logoDark: "/assets/subject-biology-white.png",
    char: "/assets/subject-biology-char.png",
    tagline: "Clear, confident command of every system and process.",
    blurb:
      "Cells to ecosystems, taught for genuine understanding, plus the precise exam language markers are looking for.",
    boards: ["cambridge", "edexcel", "aqa"],
    live: true,
  },
  {
    slug: "maths",
    name: "Maths",
    color: "var(--subject-maths)",
    icon: "/assets/maths.png",
    iconDark: "/assets/maths_w.png",
    logo: "/assets/subject-maths-black.png",
    logoDark: "/assets/subject-maths-white.png",
    char: "/assets/subject-maths-char.png",
    tagline: "Method, fluency and full-mark exam technique.",
    blurb:
      "Number, algebra, geometry and statistics built up step by step, with relentless past-paper practice so nothing in the exam is a surprise.",
    boards: ["cambridge", "edexcel", "aqa"],
    live: true,
  },
  {
    slug: "english",
    name: "English",
    color: "var(--subject-english)",
    icon: "/assets/english.png",
    iconDark: "/assets/english_w.png",
    logo: "/assets/subject-english-black.png",
    logoDark: "/assets/subject-english-white.png",
    char: "/assets/subject-english-char.png",
    tagline: "Reading, writing and analysis that reads like top-band work.",
    blurb:
      "Language and Literature taught by an examiner and college counsellor, plus IELTS and university-application support.",
    boards: ["cambridge", "edexcel", "aqa"],
    live: true,
  },
];

// Resources mega-menu.
export const resourceCategories = [
  {
    slug: "ebooks",
    name: "eBooks",
    desc: "Digital textbooks & guides for every subject and board.",
    icon: "BookOpen",
  },
  {
    slug: "printed-books",
    name: "Printed Books",
    desc: "Our Cambridge, Edexcel & AQA revision books in print.",
    icon: "Book",
  },
  {
    slug: "ace-my-exams",
    name: "Ace My Exams",
    desc: "Topic-by-topic past-paper mastery, everything you need to hit the grade.",
    icon: "Trophy",
    featured: true,
  },
  {
    slug: "virtual-resources",
    name: "Virtual Resources",
    desc: "Recorded lessons and on-demand learning you can study at your own pace.",
    icon: "MonitorPlay",
  },
  {
    slug: "digital-downloads",
    name: "Digital Downloads",
    desc: "Worksheets, mark schemes and printable resource packs.",
    icon: "Download",
  },
  {
    slug: "revision-products",
    name: "Revision Products",
    desc: "Flashcards, mind maps and exam-season revision tools.",
    icon: "Sparkles",
  },
];

// The four-stage method.
export const systemSteps = [
  {
    n: 1,
    title: "Diagnose mastery",
    desc: "Pinpoint exactly what your child knows and where the real gaps are.",
  },
  {
    n: 2,
    title: "Structured practice",
    desc: "Targeted lessons and resources that build on each other, no guesswork.",
  },
  {
    n: 3,
    title: "Exam integration",
    desc: "Past-paper technique woven in, so knowledge converts into marks.",
  },
  {
    n: 4,
    title: "Performance feedback",
    desc: "Clear tracking and parent feedback, every step of the way.",
  },
];

// Comparison rows.
export const comparison = [
  { label: "A clear, structured plan", us: "Built in", them: "Ad-hoc" },
  { label: "British-qualified examiners", us: "Yes", them: "Rarely" },
  { label: "Exam technique built in", us: "Every lesson", them: "Hit & miss" },
  {
    label: "Progress tracking & parent feedback",
    us: "Always",
    them: "Seldom",
  },
  { label: "Free past papers & resources", us: "All in one place", them: "Scattered" },
  {
    label: "One platform, every subject",
    us: "Physics to English",
    them: "One tutor, one subject",
  },
];

// Team.
export const team = [
  {
    name: "Kaleem Akbar",
    subject: "Physics Lead",
    photo: "/assets/team-kaleem.jpg",
    bio: "Founder of Akbar Academy and lead Physics tutor. A British-qualified examiner whose structured system has taught more than 3,000 students to top grades.",
  },
  {
    name: "Phil McComish",
    subject: "Physics",
    photo: "/assets/team-phil.jpg",
    bio: "30+ years teaching. Examiner for Edexcel International A-Level and CIE A-Level, and co-author of a Cambridge University Press Physics book.",
  },
  {
    name: "Michael Kwatia",
    subject: "Maths",
    photo: "/assets/team-michael.jpg",
    bio: "Teaches Maths with a gift for making method and problem-solving click, backed by relentless past-paper practice.",
  },
  {
    name: "Jav",
    subject: "Chemistry",
    photo: "/assets/team-jav.jpg",
    bio: "Chemistry specialist who teaches organic, inorganic and physical chemistry as one connected system, with the exam technique the boards reward.",
  },
  {
    name: "Alex Robert",
    subject: "Biology",
    photo: "/assets/team-alex.jpg",
    bio: "Biology specialist teaching cells to ecosystems for genuine understanding, plus the precise exam language markers look for.",
  },
  {
    name: "George Dixon",
    subject: "English",
    photo: "/assets/team-george.jpg",
    bio: "30 years across the UK and Middle East, all boards plus IELTS. Now a US College Counsellor, with students to Oxbridge and the Ivy League.",
  },
];

// Real testimonials.
export const reviews = [
  {
    quote:
      "Best teacher ever. My son jumped from C's to an A. Thank you Mr Akbar for your efforts.",
    name: "Aisha",
    role: "Parent",
  },
  {
    quote:
      "Akbar Academy helped me learn and understand everything in a way that stuck with me even after my exams.",
    name: "Maya",
    role: "Student",
  },
  {
    quote:
      "We are deeply grateful for all the help and support you've given my children. Their accomplishments reflect your dedication.",
    name: "Abeer",
    role: "Parent",
  },
];

// Short testimonials for the hero slider (with the real grade jump).
export const tickerReviews = [
  {
    from: "C",
    to: "A",
    subject: "Physics",
    quote: "My son jumped from a C to an A. Best teacher ever.",
    name: "Aisha",
    role: "Parent",
  },
  {
    from: "D",
    to: "A*",
    subject: "Chemistry",
    quote: "The structure made everything finally click for me.",
    name: "Yousef",
    role: "Student",
  },
  {
    from: "U",
    to: "A",
    subject: "Maths",
    quote: "From failing to top of the class in one year.",
    name: "Fatima",
    role: "Parent",
  },
  {
    from: "5",
    to: "9",
    subject: "Biology",
    quote: "The past-paper technique is what got me the grade.",
    name: "Maya",
    role: "Student",
  },
  {
    from: "E",
    to: "B",
    subject: "English",
    quote: "Confident, clear teaching that stuck after the exam.",
    name: "Omar",
    role: "Student",
  },
  {
    from: "3",
    to: "7",
    subject: "Physics",
    quote: "Weekly feedback kept us in the loop the whole way.",
    name: "Abeer",
    role: "Parent",
  },
  {
    from: "C",
    to: "A*",
    subject: "Chemistry",
    quote: "Worth every penny. A genuinely different system.",
    name: "Hassan",
    role: "Parent",
  },
];

// Grade transformations for the marquee.
export const gradeJumps = [
  ["U", "A"],
  ["3", "7"],
  ["D", "A*"],
  ["C", "A"],
  ["Grade 9", "148/180"],
  ["E", "B"],
  ["5", "9"],
  ["F", "C"],
  ["B", "A*"],
  ["4", "8"],
];

export const stats = [
  { value: "3,000+", label: "Students taught" },
  { value: "96%", label: "A* to B at IGCSE" },
  { value: "4.9★", label: "Trustpilot & Google" },
  { value: "Examiners", label: "& published authors" },
];

// Homepage FAQ, doubles as FAQPage schema for SEO / AI search.
export const faqs = [
  {
    q: "Which subjects and exam boards does Akbar Academy cover?",
    a: "We teach Physics, Chemistry, Biology, Maths and English at GCSE, IGCSE, AS-Level and A-Level, across the Cambridge (CIE), Edexcel/Pearson and AQA/OxfordAQA boards. Every subject follows the same structured Akbar Academy system, so the quality is consistent whichever subject or board your child studies.",
  },
  {
    q: "Are lessons online or in person?",
    a: "Both. We teach live online across the GCC and the wider world, and face-to-face onsite in Kuwait City. Online and onsite students follow the same curriculum, resources and progress tracking.",
  },
  {
    q: "Who are the teachers?",
    a: "A hand-picked, British-qualified team of examiners and published authors, including a Cambridge University Press co-author and a former US College Counsellor. Every teacher is DBS-checked and specialises in their subject, so your child is taught by someone who knows exactly what each board rewards.",
  },
  {
    q: "How do I get started?",
    a: "Start with a one-off evaluation. We assess your child's current level, identify the gaps, and give you a clear target with a plan and direct parent feedback. From there you choose the programme that fits, online or onsite, once or twice a week, and the commitment length that suits you.",
  },
  {
    q: "How much does tuition cost?",
    a: "Programmes start from KD 96 per month for Essentials, with an Elite tier for the full premium ecosystem. Committing to Half-Term, Semester or Full-Year blocks saves 5%, 10% or 15%. You can see transparent, subject-by-subject pricing on the Pricing page.",
  },
  {
    q: "Do you provide past papers and revision resources?",
    a: "Yes, a growing library of past papers, mark schemes, worksheets, eBooks, printed books and revision products, all in one place. Our Ace My Exams programme takes students through past papers topic by topic so exam technique becomes second nature.",
  },
];

// Long-form SEO content, kept in collapsible sections so the visible page stays
// clean while the copy remains fully crawlable.
export const seoSections = [
  {
    id: "premium-tuition",
    title: "Premium IGCSE & A-Level tuition across Kuwait and the GCC",
    body: [
      "Akbar Academy is a premium online and onsite tuition provider for IGCSE, GCSE, AS-Level and A-Level students across Kuwait, the GCC and internationally. We specialise in Physics, Chemistry, Biology, Maths and English, teaching the Cambridge (CIE), Edexcel and AQA/OxfordAQA specifications with a single, proven method that consistently moves students up the grade boundaries.",
      "Founded by Kaleem Akbar, the academy was built on one belief: most students already work hard, what they lack is a clear system that turns that effort into marks. Instead of scattered past papers and ad-hoc tutoring, every Akbar Academy student follows a structured path: diagnose the real gaps, practise with purpose, integrate exam technique, and track progress with honest parent feedback every step of the way.",
    ],
  },
  {
    id: "why-choose",
    title: "Why parents and students choose Akbar Academy",
    body: [
      "Our teachers are British-qualified examiners and published authors, the people who mark the papers and write the books. That insider knowledge means lessons are built around exactly what each board rewards, so students stop losing easy marks and start writing answers that hit the top band.",
      "Because everything lives on one platform, families no longer juggle a different tutor for every subject. Physics, Chemistry, Biology, Maths and English all follow the same high standard, the same resources and the same progress tracking, making it simple to support a child across their whole timetable, whether they learn live online or onsite in Kuwait.",
    ],
  },
  {
    id: "results",
    title: "A track record of real results",
    body: [
      "Akbar Academy has taught over 3,000 students, with 96% achieving A* to B and 94% achieving A* to C at IGCSE. We hold 4.9-star ratings on both Trustpilot and Google, and our students routinely record dramatic grade jumps, from U to A, from C to A*, and from failing marks to full university offers, including places at Oxbridge and Ivy League universities.",
      "These results are not accidental. They come from a repeatable system, qualified specialist teachers, and a genuine partnership with parents, the combination that lets us describe ourselves, honestly, as a class above the rest.",
    ],
  },
];
