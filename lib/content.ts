// lib/content.ts

// 🌐 NAVIGATION
export const navItems = [
  { href: "/", label: "Home" },
  { href: "/amma/about-amma", label: "About" },
  { href: "/amma/message", label: "Message" },
  { href: "/amma/miracles", label: "Miracles" },
  { href: "/amma/divine-wisdom", label: "Divine Wisdom" },
];

// 🖼️ IMAGES
export const sacredImages = {
  hero: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939324/bangaru_rok3vv.jpg",
  portrait: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939314/amma_young_doqfqv.jpg",
  child: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939227/amma_child_g8n2n1.jpg",
  banner: "https://res.cloudinary.com/dvd7o5nph/image/upload/v1771331460/WhatsApp_Image_2026-02-17_at_2.59.22_PM_1_nt513j.jpg",
  pooja: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939123/om3_f76xrf.jpg",
  celebration: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939068/om4_pr5ffn.jpg",
  procession: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939095/om5_ppv6nl.jpg",
};

// 🌟 HERO
export const hero = {
  eyebrow: "Sacred Presence of Melmaruvathur",
  badge: "Divine Grace & Blessings",
  title: "Experience the Divine Grace and Boundless Love of Amma.",
  description:
    "Step into a sanctuary of peace, devotion, and selfless service. Discover the profound teachings and universal love that guide millions on their spiritual journey toward inner awakening.",
  stats: [
    { value: "1978", label: "Trust founded for service initiatives" },
    { value: "92 km", label: "From Chennai to Melmaruvathur" },
    { value: "7200+", label: "Worshipping centres cited by trust sources" },
  ],
  cta: {
    primary: { label: "Explore the Story", href: "/amma/about-amma" },
    secondary: { label: "Read Divine Wisdom", href: "/amma/divine-wisdom" },
  },
};

// 🪷 ABOUT / INTRO
export const about = {
  intro:
    "Bangaru Adigalar, reverently addressed as Amma, is associated with the Adhiparasakthi Siddhar Peedam at Melmaruvathur. The spiritual path emphasizes compassion, equality, and service.",
  highlights: [
    {
      title: "Universal Motherhood",
      text: "A spiritual identity rooted in compassion, care, and inclusiveness.",
    },
    {
      title: "Equality in Worship",
      text: "Spiritual access beyond social divisions, with strong emphasis on dignity.",
    },
    {
      title: "Service as Spirituality",
      text: "Charity, education, and care as expressions of devotion.",
    },
  ],
};

// 📖 STORY / BIO
export const story = [
  {
    title: "Who is Bangaru Adigalar",
    text: "A spiritual guide associated with the Siddhar Peedam, emphasizing universal love and dignity.",
    image: sacredImages.hero,
  },
  {
    title: "Life and Mission",
    text: "A movement built on service, inclusion, and transformation.",
    image: sacredImages.portrait,
  },
];

// ✨ TEACHINGS
export const teachings = [
  {
    title: "Simple Living",
    text: "Peace begins when desire and ego reduce.",
  },
  {
    title: "Compassion",
    text: "Kindness is the foundation of spiritual life.",
  },
  {
    title: "Inner Transformation",
    text: "Real spirituality transforms thoughts and actions.",
  },
];

// 💬 WISDOM
export const wisdom = [
  {
    quote:
      "When love, compassion, and kindness guide life, simplicity follows naturally.",
    note: "Divine Wisdom",
  },
  {
    quote:
      "Spirituality becomes meaningful when it uplifts humanity.",
    note: "Teachings",
  },
];

// 🌍 IMPACT
export const impact = [
  { value: "1978", label: "Trust Established" },
  { value: "7200+", label: "Worship Centres" },
  { value: "Medical", label: "Healthcare Outreach" },
  { value: "Education", label: "Social Upliftment" },
];

// 🧘 PROGRAMS
export const programs = [
  {
    title: "Teachings",
    text: "Spiritual guidance rooted in simplicity and discipline.",
  },
  {
    title: "Rituals",
    text: "Temple worship and sacred observances.",
  },
  {
    title: "Service",
    text: "Charity and community upliftment.",
  },
  {
    title: "Devotee Network",
    text: "Global spiritual connection.",
  },
];

// 🎬 VIDEO
export const featuredVideo = {
  title: "Featured Discourse",
  text: "Reserved for official video content and spiritual teachings.",
  cta: "Watch Now",
};

// 🖼️ GALLERY
export const gallery = [
  { title: "Divine Darshan", image: sacredImages.hero },
  { title: "Celebration", image: sacredImages.celebration },
  { title: "Procession", image: sacredImages.procession },
  { title: "Ritual", image: sacredImages.pooja },
];

// 📅 EVENTS
export const events = [
  {
    title: "Darshan Gathering",
    time: "To be updated",
    text: "Upcoming spiritual gathering.",
  },
  {
    title: "Festival Celebration",
    time: "To be updated",
    text: "Annual celebration details.",
  },
  {
    title: "Service Day",
    time: "To be updated",
    text: "Community outreach event.",
  },
];

// ❤️ CTA
export const cta = {
  title: "A sacred digital home for devotees and seekers",
  text: "A premium foundation ready for real content integration.",
};

// 🔗 CONNECT
export const connect = [
  {
    title: "WhatsApp Community",
    text: "Official devotee updates.",
  },
  {
    title: "Newsletter",
    text: "Spiritual insights and events.",
  },
  {
    title: "Social Media",
    text: "Official presence.",
  },
];