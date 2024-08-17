import { Blog, Feature, Pricing, Review } from "@/types";

export const logos = [
  { imgSrc: "/images/logos/logo-01.png" },
  { imgSrc: "/images/logos/logo-02.png" },
  { imgSrc: "/images/logos/logo-03.png" },
  { imgSrc: "/images/logos/logo-04.png" },
  { imgSrc: "/images/logos/logo-05.png" },
  { imgSrc: "/images/logos/logo-06.png" },
];

export const imageWithContent = [
  {
    header: "Enhance Customer Engagement and Efficiency",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    imgSrc: "/images/pictures/pic-01.jpg",
  },
  {
    header: "Make Informed Business Choices with Bots",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    imgSrc: "/images/pictures/pic-02.jpg",
  },
  {
    header: "All-in-One Chatbot Integration Solution",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    imgSrc: "/images/pictures/pic-03.jpg",
  },
];

export const featuresContent: Feature[] = [
  {
    icon: "/images/icons/icon-04.png",
    header: "Smart Widget",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  },
  {
    icon: "/images/icons/icon-05.png",
    header: "Voice Memo",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  },
  {
    icon: "/images/icons/icon-06.png",
    header: "Ai Assistant",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  },
  {
    icon: "/images/icons/icon-07.png",
    header: "Video Calls",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  },
  {
    icon: "/images/icons/icon-01.png",
    header: "Cross Device Sync",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  },
  {
    icon: "/images/icons/icon-03.png",
    header: "Ai Messaging",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  },
];

export const PricingContent: Pricing[] = [
  {
    name: "Basic plan",
    yearlyPricing: "$180",
    monthlyPricing: "$19",
    recommanded: false,
    options: ["Automatic updates", "Support Assistance", "Customization"],
    yearlySaving: "20%",
  },
  {
    name: "Business plan",
    yearlyPricing: "$280",
    monthlyPricing: "$29",
    recommanded: true,
    options: [
      "Automatic updates",
      "Support Assistance",
      "Customization",
      "Language Support",
    ],
    yearlySaving: "20%",
  },
  {
    name: "Enterprise plan",
    yearlyPricing: "$480",
    monthlyPricing: "$49",
    recommanded: false,
    options: [
      "Automatic updates",
      "Support Assistance",
      "Customization",
      "Language Support",
      "Collaboration",
    ],
    yearlySaving: "20%",
  },
];

export const reviewsContent: Review[] = [
  {
    content:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."',
    name: "Mark Roberts",
    job: "Freelance",
    imageUrl: "/images/people/person-01.png",
  },
  {
    content:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."',
    name: "Michaerl Walker",
    job: "CEO, RevUp",
    imageUrl: "/images/people/person-02.jpg",
  },
  {
    content:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."',
    name: "Jenny",
    job: "Developer, HIL",
    imageUrl: "/images/people/person-04.jpg",
  },
  {
    content:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."',
    name: "Emily Davis",
    job: "Developer, Facelook",
    imageUrl: "/images/people/person-05.jpg",
  },
  {
    content:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."',
    name: "Sara Thomsan",
    job: "Founder, DevAgency",
    imageUrl: "/images/people/person-03.jpg",
  },

  {
    content:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."',
    name: "John Anderson",
    job: "CEO, CupDev",
    imageUrl: "/images/people/person-06.jpg",
  },
];

export const blogsContent: Blog[] = [
  {
    imageUrl: "/images/features/features-01.jpg",
    type: "Business",
    header: "Best Practices for Data Security in SaaS Applications",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  },
  {
    imageUrl: "/images/features/features-06.jpg",
    type: "Business",
    header: "The Ultimate Guide to choosing the Right SaaS Solution",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  },
  {
    imageUrl: "/images/features/features-02.jpg",
    type: "Productivity",
    header: "How AI is Changing the SaaS Landscape",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  },
];

export const FrequentlyAskQuestion = [
  "How can your platform fenefit my business?",
  "How secure is your platform?",
  "Can I integrate your solution with other tooks we use?",
  "Which language is supported?",
  "How does your pricing model work?",
];
