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
  register: "https://www.akbaracademy.co.uk/?login=popup",
  login: "https://www.akbaracademy.co.uk/?login=popup",
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

// Top announcement ticker (scrolls across the very top of every page).
export const announcements = [
  {
    strong: "September intake now open",
    post: ", evaluation places are limited and filling weekly",
  },
  { strong: "Cambridge, Edexcel and AQA" },
  { pre: "Led by a ", strong: "Cambridge and Edexcel endorsed author" },
  { strong: "Live online across the GCC" },
];

// Exam boards offered across subjects.
export const boards = [
  { slug: "cambridge", name: "Cambridge (CAIE)", short: "Cambridge" },
  { slug: "edexcel", name: "Edexcel / Pearson", short: "Edexcel" },
  { slug: "aqa", name: "AQA", short: "AQA" },
];

// Levels offered.
export const levels = ["IGCSE", "AS-Level", "A-Level"];

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
    tagline: "Led by our founder and published author, Mr Akbar.",
    blurb:
      "From mechanics to nuclear physics, taught around exactly how marks are won. Our flagship subject, built on the method behind five endorsed textbooks.",
    levels: ["IGCSE", "AS", "A2"],
    boards: ["cambridge", "edexcel", "aqa"],
    boardNote: "Cambridge and Edexcel at IGCSE, plus AQA at AS and A Level.",
    lead: "Mr Akbar and Mr McComish",
    boardsFull: 3,
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
      "Organic, inorganic and physical chemistry taught as one connected system, with the calculations and practical skills examiners reward.",
    levels: ["IGCSE", "AS"],
    boards: ["cambridge", "edexcel"],
    lead: "Mr Jav",
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
      "From cells to whole systems, taught for genuine understanding, plus the precise exam language markers are looking for.",
    levels: ["IGCSE", "AS"],
    boards: ["cambridge", "edexcel"],
    lead: "Mr Alex Robert",
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
      "Number, algebra, geometry and statistics built up step by step, until the method is second nature and nothing in the exam feels unfamiliar.",
    levels: ["IGCSE", "AS"],
    boards: ["cambridge", "edexcel"],
    lead: "Mr Michael Kwatia",
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
      "First and Second Language English taught by an experienced examiner, building the reading, writing and analysis skills that hit the top band.",
    levels: ["IGCSE"],
    boards: ["cambridge", "edexcel"],
    lead: "Ms George Dixon",
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

// Tuition packages (homepage "Packages to suit you" section).
export const packages = [
  {
    name: "Live Classroom & Online Classes",
    icon: "GraduationCap",
    featured: true,
    points: [
      "Tailored live sessions with Mr Kaleem Akbar",
      "Interactive participation",
      "Full access to all resources and learner support",
    ],
  },
  {
    name: "Virtual Learning Sessions",
    icon: "MonitorPlay",
    points: [
      "Choose when and where to study",
      "Study at your own pace",
      "Select the modules you want",
    ],
  },
  {
    name: "Ace My Exams",
    icon: "Award",
    points: [
      "All the past paper resources you need to get the grade you deserve",
    ],
  },
  {
    name: "Self Study",
    icon: "BookOpen",
    points: ["Select either Cambridge, Edexcel or AQA books"],
  },
];

// "What's included in every course" lists.
export const includedEssentials = [
  "Specification-mapped lessons, every topic on the syllabus",
  "Live worked examples and model answers every session",
  "Weekly quizzes and end-of-topic assessments",
  "Past paper practice with mark scheme review",
  "Notes and books available to purchase",
  "Half-term progress reports to parents",
  "Full lesson recording access when absent",
];

export const includedElite = [
  { text: "Everything in Essentials, plus:", strong: true },
  { text: "Full lesson recordings, every session, not just absences" },
  {
    text: "Free access to the Akbar Academy app (recap videos, PowerPoints, classified mark schemes, extended past paper library)",
  },
  { text: "Notes and books included, no extra charge" },
  { text: "Access to Exam Wizard and AI Tutor" },
  { text: "Weekly progress updates to parents" },
  { text: "Priority marking and feedback turnaround" },
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
    desc: "Exam technique woven in, so real understanding converts into marks.",
  },
  {
    n: 4,
    title: "Performance feedback",
    desc: "Clear tracking and parent feedback, every step of the way.",
  },
];

// Comparison rows ("Why Akbar Academy gets better results").
export const comparison = [
  {
    icon: "User",
    label: "Experienced specialist teachers",
    us: "Top 4% subject experts",
    them: "Generalist tutors",
  },
  {
    icon: "Package",
    label: "Personalised mastery plans",
    us: "Built for your child",
    them: "One-size-fits-all",
  },
  {
    icon: "Users",
    label: "Small group focus",
    us: "Kept intentionally small",
    them: "Large groups",
  },
  {
    icon: "Pencil",
    label: "Weekly feedback & tracking",
    us: "Every single week",
    them: "Rare or inconsistent",
  },
  {
    icon: "Clock",
    label: "Exam strategy built in",
    us: "From day one",
    them: "Last-minute focus",
  },
  {
    icon: "MessageSquare",
    label: "Live progress via the parent app",
    us: "Always informed",
    them: "Minimal communication",
  },
];

// Evaluation offer + the four course types (homepage pricing section).
export const evaluation = {
  name: "Start with an evaluation",
  price: "49",
  currency: "KD",
  badge: "Start here",
  desc: "2 to 4 lessons. Full academic assessment. Detailed parent report. We identify exactly where your child is and which course type suits them, before you commit to monthly fees.",
};

export const courseTypes = [
  {
    name: "Full Course",
    tag: "Standard",
    badge: "Most common",
    featured: true,
    perWeek: "2",
    perMonth: "8 lessons / month",
    desc: "The complete IGCSE or A Level course, Cambridge, Edexcel or Oxford International AQA, taught in one year. Two lessons per week, eight lessons per month.",
    who: "All IGCSE and A Level students",
  },
  {
    name: "Accelerated",
    tag: "Highly motivated",
    perWeek: "1",
    perMonth: "4 lessons / month",
    desc: "The same full two-year IGCSE course, covered in half the lessons. One lesson per week, covering everything the full course covers. No minimum grade required to start.",
    who: "Commitment over grades",
  },
  {
    name: "Half Syllabus",
    tag: "First-year IGCSE",
    perWeek: "1",
    perMonth: "4 lessons / month",
    desc: "First-year IGCSE content only. Ideal for students who find the full pace overwhelming. One lesson per week, working through the syllabus slowly and thoroughly.",
    who: "Cambridge, Edexcel or Oxford International AQA",
  },
  {
    name: "Edexcel Modular",
    tag: "Year 10 or 11",
    perWeek: "1",
    perMonth: "4 lessons / month",
    desc: "One year at a time, first-year content in year one and second-year content in year two. One lesson per week per year. Ideal for students on the modular Edexcel route.",
    who: "Edexcel only, one year at a time",
  },
];

// Team.
export const team = [
  {
    name: "Mr Kaleem Akbar",
    subject: "Physics Lead",
    photo: "/assets/team-kaleem.jpg",
    bio: "20+ years teaching and a Cambridge and Edexcel endorsed author, with five published IGCSE textbooks.",
  },
  {
    name: "Mr Phil McComish",
    subject: "Physics Specialist",
    photo: "/assets/team-phil.jpg",
    bio: "26+ years teaching, an examiner across major boards, and a Cambridge University Press author.",
  },
  {
    name: "Mr Jav",
    subject: "Chemistry Lead",
    photo: "/assets/team-jav.jpg",
    bio: "Biochemistry (Hons), University of Manchester, and an IGCSE and A-Level Chemistry specialist.",
  },
  {
    name: "Mr Alex Robert",
    subject: "Biology Lead",
    photo: "/assets/team-alex.jpg",
    bio: "An IGCSE and A-Level Biology specialist teaching the Cambridge and Edexcel examination boards.",
  },
  {
    name: "Mr Michael Kwatia",
    subject: "Maths Lead",
    photo: "/assets/team-michael.jpg",
    bio: "A Qualified Teacher (QTS) with 9+ years of experience and a BSc from Sheffield Hallam University.",
  },
  {
    name: "Ms George Dixon",
    subject: "English Lead",
    photo: "/assets/team-george.jpg",
    bio: "A BA (Hons) English graduate with two Master's degrees and a PGCE, and an AQA and Edexcel examiner.",
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
    quote: "Finally understanding the topics is what got me the grade.",
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
    a: "We teach Physics, Chemistry, Biology, Maths and English at IGCSE, AS-Level and A-Level, across the Cambridge (CAIE), Edexcel/Pearson and AQA boards. Every subject follows the same structured Akbar Academy system, so the quality is consistent whichever subject or board your child studies.",
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
    a: "Start with a one-off paid evaluation session (KD 49, which also secures your child's place and covers a couple of lessons). We assess your child's current level, identify the gaps, and give you a clear target with a plan and direct parent feedback. From there you choose the programme that fits, online or onsite, once or twice a week, and the commitment length that suits you.",
  },
  {
    q: "How much does tuition cost?",
    a: "Tuition starts from KD 82 per month online, and from KD 102 per month for face-to-face or hybrid, typically 8 lessons a month of 2 hours each (around 16 teaching hours). You can see transparent, subject-by-subject pricing on the Pricing page. All fees are in Kuwaiti Dinar.",
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
      "Akbar Academy is a premium online and onsite tuition provider for IGCSE, AS-Level and A-Level students across Kuwait, the GCC and internationally. We specialise in Physics, Chemistry, Biology, Maths and English, teaching the Cambridge (CAIE), Edexcel and AQA specifications, using a single, proven method that consistently moves students up the grade boundaries.",
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
      "At IGCSE, 96% of Akbar Academy students achieve A* to B, against 64% A* to B for Cambridge worldwide, a 32% performance difference. Our students routinely record dramatic grade jumps, from U to A, from C to A*, and from failing marks to full university offers, including places at Oxbridge and Ivy League universities. We hold 4.9-star ratings on both Trustpilot and Google.",
      "These results are not accidental. They come from a repeatable system, qualified specialist teachers, and a genuine partnership with parents, the combination that lets us describe ourselves, honestly, as a class above the rest.",
    ],
  },
];
