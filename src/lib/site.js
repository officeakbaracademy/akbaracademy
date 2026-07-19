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
  // Parent enrolment funnel, where every "Book your evaluation" CTA points.
  bookEvaluation:
    "https://enrollment.akbaracademy.co/parent-funnel-home-page",
  trustpilot: "https://www.trustpilot.com/review/akbaracademy.co.uk",
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
    strong: "Book your evaluation now.",
    post: " The new academic session starts 22 August.",
  },
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
      "Led by our founder and Physics author. From IGCSE foundations to confident A Level problem solving.",
    levels: ["IGCSE", "AS & A2"],
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
      "Clear, exam focused teaching that turns definitions and mechanisms into reliable marks.",
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
      "Structured content, strong recall technique and exam application from IGCSE to AS.",
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
      "Method first teaching that builds fluency and speed for IGCSE and AS Level papers.",
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
      "First Language and Second Language support that lifts reading, writing and exam response quality.",
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

// The five-step learning loop that runs every week, in every subject.
export const systemSteps = [
  {
    n: 1,
    icon: "AlignLeft",
    title: "Teach",
    desc: "Specialist live lessons, structured to the syllabus.",
  },
  {
    n: 2,
    icon: "PenTool",
    title: "Practise",
    desc: "Targeted questions and real past paper work.",
  },
  {
    n: 3,
    icon: "SquareCheck",
    title: "Mark",
    desc: "Work marked to the mark scheme, not guessed.",
  },
  {
    n: 4,
    icon: "MessageSquare",
    title: "Feedback",
    desc: "Clear next steps on exactly what to fix.",
  },
  {
    n: 5,
    icon: "LineChart",
    title: "Track",
    desc: "Progress logged and shared with parents.",
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

// The two parent-facing monthly plans (homepage pricing section).
export const plans = [
  {
    name: "Live Online",
    price: "82",
    note: "Per subject, from",
    features: [
      "8 live lessons a month, 2 hours each",
      "Marked work and weekly feedback",
      "Progress tracking for parents",
      "Learn from anywhere in the GCC",
    ],
  },
  {
    name: "Onsite & Hybrid",
    price: "102",
    badge: "Most popular",
    featured: true,
    note: "Per subject, from",
    features: [
      "Everything in Live Online",
      "Face to face classes in Kuwait",
      "Switch between onsite and online",
      "Structured classroom environment",
    ],
  },
];

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

// Team. Each credential renders on its own line with an icon: "badge" for
// experience and specialisms, "doc" for degrees, authorship and publications.
export const team = [
  {
    name: "Mr Kaleem Akbar",
    subject: "Physics Lead",
    photo: "/assets/team-kaleem.jpg",
    credentials: [
      { icon: "badge", text: "20+ years teaching, Cambridge & Edexcel endorsed author" },
      { icon: "doc", text: "Author of 5 IGCSE textbooks" },
    ],
  },
  {
    name: "Mr Phil McComish",
    subject: "Physics Specialist",
    photo: "/assets/team-phil.jpg",
    credentials: [
      { icon: "badge", text: "26+ years teaching, examiner across major boards" },
      { icon: "doc", text: "Co-author, Cambridge University Press Physics Coursebook" },
    ],
  },
  {
    name: "Mr Jav",
    subject: "Chemistry Lead",
    photo: "/assets/team-jav.jpg",
    credentials: [
      { icon: "doc", text: "Biochemistry (Hons), University of Manchester" },
      { icon: "badge", text: "IGCSE & A-Level Chemistry specialist" },
    ],
  },
  {
    name: "Mr Alex Robert",
    subject: "Biology Lead",
    photo: "/assets/team-alex.jpg",
    credentials: [
      { icon: "doc", text: "PGCE Biology, First class" },
      { icon: "badge", text: "15 years teaching experience" },
    ],
  },
  {
    name: "Mr Michael Kwatia",
    subject: "Maths Lead",
    photo: "/assets/team-michael.jpg",
    credentials: [
      { icon: "badge", text: "Qualified Teacher (QTS), 9+ years teaching maths" },
      { icon: "doc", text: "BSc Mathematics & Education, Sheffield Hallam University" },
    ],
  },
  {
    name: "Ms George Dixon",
    subject: "English Lead",
    photo: "/assets/team-george.jpg",
    credentials: [
      { icon: "badge", text: "BA (Hons) English, MA, MA, PGCE" },
      { icon: "doc", text: "AQA & Edexcel Examiner" },
    ],
  },
];

// Headline proof banner: the results gap plus verified Trustpilot testimonials.
export const proof = {
  stat: "96%",
  claim: "of Akbar Academy students achieve A* to B.",
  detail:
    "Against 64% A* to B for Cambridge worldwide, that is a 32 point difference. The gap is not the students. It is the system around them.",
  rating: "4.9",
};

export const proofReviews = [
  {
    quote:
      "My son jumped from C's to an A. Thank you Mr Akbar for your efforts.",
    name: "Aisha Albannai",
    role: "Parent, verified on Trustpilot",
  },
  {
    quote:
      "Mr Akbar is a brilliant teacher who was able to make my daughter not only understand physics but also adore it.",
    name: "Omnasreldeen Mohd",
    role: "Parent, verified on Trustpilot",
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

// Real reviews published on Trustpilot. Quotes are the reviewers' own words,
// trimmed only at sentence boundaries. Do not edit the wording.
export const trustpilotStats = { score: "4.9", count: "172" };

export const tickerReviews = [
  {
    title: "Akbar physics teacher",
    quote:
      "Mr Akbar is a wonderful physics teacher and has made physics such an easy subject for me. When I started I wasn't confident at all but now I'm certain I'll get top marks.",
    name: "Faisal Al Ghanim",
    location: "Kuwait",
  },
  {
    title: "The best physics teacher",
    quote:
      "Mr Akbar's positive attitude and encouragement over the years, paired with his incredible knowledge and experience with numerous exam systems, made him the best physics teacher I've ever had.",
    name: "Khaled Eid",
    location: "Kuwait",
  },
  {
    title: "Achieved an A at IGCSE",
    quote:
      "Going to the start of year 11 I had been struggling with physics and my grade had dropped, but with the help of Akbar Academy I was able to achieve an A in my IGCSE.",
    name: "Malak",
    location: "Egypt",
  },
  {
    title: "Mr Akbar",
    quote:
      "Mr Akbar is one of the best teachers and characters I've ever met. His textbook is one of a kind, it covers topics in intense detail and it makes physics concepts really easy.",
    name: "Antony Mettry",
    location: "Kuwait",
  },
  {
    title: "I took biology with Miss Nunn",
    quote:
      "I took biology with Miss Nunn, her classes were so fun. She makes learning fun and easy, and delivers the information in a way where she makes sure you'll never forget it again.",
    name: "Lana",
    location: "Kuwait",
  },
  {
    title: "We are deeply grateful to you",
    quote:
      "We are deeply grateful to you, Mr Akbar, for all the help and support you've given my children. Their accomplishments are a true reflection of your dedication.",
    name: "Abeer Altararwa",
    location: "Kuwait",
  },
  {
    title: "Ms Nunn, great teacher",
    quote:
      "Ms Nunn was a great teacher, calm, experienced and really good when it comes to teaching. She helped me with the subject that I felt the worst at.",
    name: "Fahad Boresli",
    location: "Kuwait",
  },
  {
    title: "The fun in learning",
    quote:
      "My experience was great as I felt everything was well organised and easily accessible, which allowed me to waste way less time, and I also had fun in the lessons.",
    name: "Ward Turjuman",
    location: "Kuwait",
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
