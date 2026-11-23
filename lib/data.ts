import React from 'react';
import type { StaticImageData } from 'next/image';
import { LuGraduationCap } from 'react-icons/lu';
import focusflowImg from '@/public/focusflow.png';
import voyageiqImg from '@/public/voyageiq.png';
import bidspaceImg from '@/public/bidspace.png';
import frvFroovaImg from '@/public/frv-froova.png';
import datalensImg from '@/public/datalens.png';
import wishlishlyImg from '@/public/wishlishly.png';
import mollifyImg from '@/public/mollify.png';
import replyoImg from '@/public/replyo.png';
import hereImg from '@/public/here.webp';
import readerImg from '@/public/reader.webp';
import coffeePreorderImg from '@/public/coffee-preorder.webp';
import beUniqueImg from '@/public/beunique.webp';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export type ProjectData = {
  title: string;
  category: string;
  description: string;
  tags: readonly string[];
  imageUrl: StaticImageData;
  /** Descriptive alt text; cards fall back to "Screenshot of <title>". */
  imageAlt?: string;
  /** CSS object-position for the cover-cropped image; defaults to "center top". */
  imagePosition?: string;
  liveDemoLink: string;
  githubLink: string;
};

export const projectsData: readonly ProjectData[] = [
  {
    title: 'HERE — Make Real Plans',
    category: 'Mobile App / Product Development',
    description:
      'A social discovery app built with Flutter that helps people connect through real-world activities such as coffee, walks, and coworking. Users can discover nearby people, share availability, and make plans, with a focus on privacy and meaningful real-life connections.',
    tags: ['Flutter'],
    imageUrl: hereImg,
    imageAlt:
      'HERE landing page with the headline \'Meet people nearby. Make real plans.\' beside an iPhone mockup of the app home screen showing a map of nearby people in Oslo',
    liveDemoLink: 'https://hereplans.app/',
    githubLink: '',
  },
  {
    title: 'Reader — Text to Speech',
    category: 'Web Application / Accessibility',
    description:
      'A browser-based text-to-speech app that turns written content into spoken audio. Paste text or upload PDF and TXT files, choose a voice, adjust playback speed, and follow along with synchronized sentence highlighting. Includes a private reading library and saved progress.',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS', 'PDF.js'],
    imageUrl: readerImg,
    imageAlt:
      'Reader landing page with the headline \'Listen to anything you need to read.\' and a panel for previewing the text-to-speech voices available on the device',
    imagePosition: 'left top',
    liveDemoLink: 'https://tts-saasvercelapp.vercel.app/',
    githubLink: '',
  },
  {
    title: 'Coffee Pre-order',
    category: 'Web Application / E-commerce',
    description:
      'A coffee pre-ordering web application built with Next.js and AWS. Customers can browse the menu, add products to their cart, and complete checkout using test payments. The application focuses on responsive design and a smooth, user-friendly ordering experience.',
    tags: ['Next.js', 'AWS'],
    imageUrl: coffeePreorderImg,
    imageAlt:
      'Coffee Pre-order homepage with the headline \'Skip the queue.\', an Order now button, and a takeaway coffee cup beside a phone showing the ordering app',
    imagePosition: 'left top',
    liveDemoLink: 'https://coffee-preorder.vercel.app/',
    githubLink: '',
  },
  {
    title: 'BeUnique — E-commerce Store',
    category: 'React / E-commerce',
    description:
      'A React storefront that loads products from a REST API. Features live product search, product pages with discount pricing, a cart with quantity controls and totals, a checkout flow, and a contact form validated with react-hook-form and Yup.',
    tags: ['React', 'React Router', 'styled-components', 'react-hook-form'],
    imageUrl: beUniqueImg,
    imageAlt:
      'BeUnique storefront with a product search bar and product cards for vanilla perfume, a toy car, and gold headphones, each with a rating and a View Product button',
    liveDemoLink: 'https://react-ecom-store-psi.vercel.app/',
    githubLink: 'https://github.com/ethmane-didi/react-ecom-store',
  },
  {
    title: 'FocusFlow — Productivity SaaS',
    category: 'Web Application / Productivity',
    description:
      'A full-featured productivity web app inspired by the Hyperfocus method. Two focus modes: deep work timer with distraction blocking, and a free-form idea capture journal. Includes mood tracking, habit streaks, badges, and a freemium pricing model.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Authentication'],
    imageUrl: focusflowImg,
    liveDemoLink: 'https://focusflow-app.vercel.app/',
    githubLink: 'https://github.com/ethmane-didi/focusflow-web',
  },
  {
    title: 'VoyageIQ — Luxury Travel Explorer',
    category: 'Web Application / Travel',
    description:
      'A travel planning app featuring curated luxury property listings with rich photography, location filters, and live weather and country data. Users browse destinations like Paris, Switzerland, and Amsterdam with real-time information to plan their perfect trip.',
    tags: ['Next.js', 'TypeScript', 'REST APIs', 'API Integration'],
    imageUrl: voyageiqImg,
    liveDemoLink: 'https://vacation-explorer.vercel.app/',
    githubLink: 'https://github.com/ethmane-didi/VacationExplorer',
  },
  {
    title: 'BidSpace — Online Auction Platform',
    category: 'Web Application / Marketplace',
    description:
      'A fully functional auction web app where users register, list items, and compete in real-time bidding. Features a credit-based economy, user authentication, curated listings, and a clean responsive layout designed to build trust around every bid.',
    tags: ['JavaScript', 'HTML/CSS', 'Responsive Design', 'Authentication'],
    imageUrl: bidspaceImg,
    liveDemoLink: 'https://visionary-sprite-8c6f10.netlify.app/',
    githubLink: 'https://github.com/ethmane-didi/auction-platform-sp2',
  },
  {
    title: 'FRV Froova — Brand & E-Commerce',
    category: 'Marketing Site / E-commerce',
    description:
      'A bold product marketing site for a probiotic soda brand. Built with Next.js and powered by Prismic CMS. Features product showcases, flavor browsing, subscription pricing, and a vibrant design system that perfectly matches the brand identity.',
    tags: ['Next.js', 'Prismic CMS', 'TypeScript', 'E-Commerce'],
    imageUrl: frvFroovaImg,
    liveDemoLink: 'https://frv.vercel.app/',
    githubLink: 'https://github.com/ethmane-didi/froova',
  },
  {
    title: 'DataLens — Analytics Dashboard',
    category: 'Full-Stack / Data Visualization',
    description:
      'A full-stack analytics dashboard with a dark UI featuring colorful KPI cards, real-time line charts, and pie chart breakdowns. Built to visualize and explore datasets in an intuitive, data-dense interface backed by a Node.js/MongoDB API.',
    tags: ['React', 'Express.js', 'MongoDB', 'Recharts'],
    imageUrl: datalensImg,
    liveDemoLink: 'https://dashboard-app-plum-five.vercel.app/',
    githubLink: 'https://github.com/ethmane-didi/dashboard-app',
  },
  {
    title: 'Wishlishly — iOS Wishlist App',
    category: 'Mobile App / iOS',
    description:
      'A native iOS app built with Flutter that lets users create, organize, and share wishlists with friends and family. Features a clean UI, real-time list sharing, and a seamless cross-device experience. Live on the Apple App Store.',
    tags: ['Flutter', 'iOS', 'Dart', 'App Store'],
    imageUrl: wishlishlyImg,
    liveDemoLink: 'https://apps.apple.com/no/app/wishly-wishlist-gifts/id6755959823',
    githubLink: '',
  },
  {
    title: 'Replyo — AI Chat Assistant for Business',
    category: 'SaaS / AI',
    description:
      'A production-ready SaaS landing page for an AI-powered customer support and booking assistant. Built with Next.js, TypeScript, and Tailwind CSS — featuring a responsive UI, animated chat demo, pricing tiers, and multi-language support. Designed for restaurants, clinics, and service businesses.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'AI', 'SaaS'],
    imageUrl: replyoImg,
    liveDemoLink: 'https://replyo-eta.vercel.app/',
    githubLink: '',
  },
  {
    title: 'Mollify — Open-Source Learning Platform',
    category: 'Open Source / EdTech',
    description:
      'Contributed to an open-source learning platform built for Noroff students. I implemented the text-to-speech feature in TypeScript, enabling students to listen to course content directly in the browser — improving accessibility and overall learning experience.',
    tags: ['SvelteKit', 'TypeScript', 'Tailwind CSS', 'Skeleton UI', 'OpenAI'],
    imageUrl: mollifyImg,
    liveDemoLink: 'https://mollify.noroff.dev',
    githubLink: '',
  },
];

export const skillsData = [
  {
    section: 'Technical Skills',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'TypeScript',
      'React',
      'Prisma',
      'MongoDB',
      'Express.js',
      'Framer Motion',
      'Shadcn (ui)',
      'Figma',
      'Responsive Web Design',
      'Cross-browser Compatibility',
      'RESTful APIs',
      'User Experience (UX) Design',
      'User Interface (UI) Design',
    ],
  },
  {
    section: 'Frameworks',
    skills: ['Tailwind CSS', 'Bootstrap', 'SCSS (Sass)'],
  },
  {
    section: 'Workflow',
    skills: [
      'Version Control',
      'Node.js',
      'Git',
      'GitHub',
      'GitHub Project',
      'Agile/Scrum Methodology',
      'Trello',
      'Other Tools',
    ],
  },
] as const;

export const experiencesData = [
  {
    title: 'Front-End Developer Graduate',
    location: 'Noroff University College Norway',
    description:
      'Program started in October 2021 and concluded in October 2023.',
    icon: React.createElement(LuGraduationCap),
    date: '2023',
  },
] as const;
