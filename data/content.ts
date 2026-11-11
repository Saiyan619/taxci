export const stats = [
  {
    value: "1M+",
    caption:
      "1,420,830 messy thoughts successfully translated into eloquent prose this year.",
  },
  {
    value: "74%",
    caption:
      "Cut the time spent staring at a blank screen or rewriting emails by 74%.",
  },
  {
    value: "94%",
    caption:
      "94% of users report feeling significantly more confident sending emails and messages after running them through Taxci.",
  },
];

export const compare = {
  raw: "hey, just checking if you saw my last email. i really need an update on this and don't want it to get lost.",
  polished:
    "Hi, I wanted to follow up on my previous email and see if there are any updates. I would appreciate your response when you have a chance.",
};

export const features = [
  {
    id: "tts",
    title: "Text to Speech",
    body: "Speak your thoughts out loud and Taxci turns your voice into clean, written words, exactly the way you meant to say them.",
    media: "/Gemini_Generated_Image_1e77ov1e77ov1e77.jpg",
    icon: "voice",
  },
  {
    id: "tone",
    title: "Tone Context",
    body: "Pick the situation, from a polite decline to a firm negotiation, and Taxci rewrites your message in the right tone.",
    media: "/Gemini_Generated_Image_8fisfp8fisfp8fis.jpg",
    icon: "tone",
  },
  {
    id: "scribe",
    title: "Intelligent Scribe",
    body: "Dump messy notes and half-formed ideas. Taxci reads the context and turns them into clear, confident writing.",
    media: "/Gemini_Generated_Image_sez59usez59usez5.jpg",
    icon: "scribe",
  },
] as const;

export const steps = [
  {
    id: "tone",
    title: "Tone Context",
    body: "Pick the situation, from a polite decline to a firm negotiation, and Taxci rewrites your message in the right tone.",
    media: "/Gemini_Generated_Image_l01i13l01i13l01i.jpg",
    icon: "tone",
  },
  {
    id: "dump",
    title: "Dump Your Thoughts",
    body: "Type, paste or speak your raw thoughts. Messy is fine, Taxci works out what you actually meant.",
    media: "/Gemini_Generated_Image_tsnpoqtsnpoqtsnp (1).jpg",
    icon: "thoughts",
  },
  {
    id: "send",
    title: "Send With Confidence",
    body: "Copy the polished version or save it to your articulations, ready to send in seconds.",
    media: "/Gemini_Generated_Image_p8pi9kp8pi9kp8pi.jpg",
    icon: "send",
  },
] as const;

export const testimonials = [
  {
    quote:
      "My team sends updates all day, and I used to spend my evenings making every message sound clear. Taxci helps me turn quick notes into professional updates before the next delivery issue lands.",
    name: "Devon Wales",
    role: "Operations Lead",
  },
  {
    quote:
      "I can finally write product feedback without making it sound harsh. I paste in the messy version, choose a constructive tone, and get something my team can actually act on.",
    name: "Amara Okafor",
    role: "Product Manager",
  },
  {
    quote:
      "As a founder, I write everything from investor updates to difficult follow-ups. Taxci helps me sound confident and direct without losing the warmth I want people to remember.",
    name: "Tunde Adeyemi",
    role: "Founder",
  },
];

export const plans = [
  {
    id: "free",
    name: "Starter",
    featured: false,
    monthly: 0,
    yearly: 0,
    blurb: "Try Taxci at your own pace.",
    cta: "Continue as free",
    features: [
      "Continue as free",
      "Basic rewriting access",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    featured: false,
    monthly: 10,
    yearly: 10,
    blurb: "For consistent everyday writing.",
    cta: "Choose Pro",
    features: [
      "50 rewrites per month",
      "All writing tones",
      "Saved rewrite history",
    ],
  },
  {
    id: "ultra",
    name: "Ultra",
    featured: true,
    monthly: 50,
    yearly: 50,
    blurb: "For unlimited rewriting.",
    cta: "Choose Ultra",
    features: [
      "Unlimited rewrites",
      "All writing tones",
      "Saved rewrite history",
    ],
  },
];

export const faqs = [
  {
    id: "trial",
    icon: "smile",
    q: "Is there a free trial available?",
    a: "Yes, you can try Taxci free for 7 days on any plan. No rewriting limits during the trial, and you can cancel before it ends without paying anything.",
  },
  {
    id: "plan",
    icon: "layers",
    q: "Can I change my plan later?",
    a: "Any time. Upgrade or downgrade from your settings and the change applies from your next billing date.",
  },
  {
    id: "privacy",
    icon: "lock",
    q: "Is my writing kept private?",
    a: "Yes. Your raw thoughts and rewrites are only used to give you your result. We don't sell your content or use it to train public models.",
  },
  {
    id: "voice",
    icon: "mic",
    q: "How does Text to Speech work?",
    a: "Hit the mic, say what's on your mind, and Taxci turns your voice into text, then rewrites it in the tone you picked.",
  },
];

export const footer = {
  explore: [
    { label: "Features", href: "#features" },
    { label: "How it works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ],
  connect: [
    { label: "LinkedIn", href: "#" },
    { label: "X / Twitter", href: "#" },
    { label: "Instagram", href: "#" },
  ],
  contact: {
    email: "hello@taxci.com",
    address: ["Victoria Gardens", "Lekki, Nigeria"],
  },
};
