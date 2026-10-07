export const professionalProjects = [
  {
    id: 'vps-automation-erp',
    title: 'VPS Automation ERP',
    rank: 'Top 1 Flagship',
    isFlagship: true,
    category: 'professional',
    type: 'erp',
    badge: 'Enterprise Flagship',
    subtitle: 'Cloud Infrastructure & Automated Server Lifecycle Management',
    description: 'A mission-critical enterprise ERP engineered for automated VPS provisioning, server virtualization lifecycle, real-time resource telemetry, and client billing workflows.',
    image: '/admindashboard.jpg',
    tags: ['Django REST', 'React', 'PostgreSQL', 'Docker', 'Linux Automation', 'Celery & Redis'],
    liveUrl: null,
    highlights: [
      'Automated VM instance provisioning & real-time CPU/RAM telemetry',
      'Multi-tenant client billing engine with automated invoice generation',
      'Role-based access control (RBAC) and audited administrative actions',
      'High-throughput asynchronous task pipelines'
    ],
    architecture: {
      backend: 'Django REST Framework with Celery background workers and PostgreSQL',
      frontend: 'React with Tailwind CSS, Chart.js telemetry dashboards, and live telemetry feeds',
      security: 'JWT authentication, IP-restricted administrative endpoints, and automated audit logs'
    }
  },
  {
    id: 'mks-multi-entity-erp',
    title: 'MKS Multi-Entity ERP System',
    rank: 'Top 2 Flagship',
    isFlagship: true,
    category: 'professional',
    type: 'erp',
    badge: 'Enterprise Multi-Tenant',
    subtitle: 'Distributed Multi-Organization Business & Financial Management',
    description: 'Comprehensive multi-entity ERP architected for multi-branch accounting, automated inter-company ledger reconciliation, inventory synchronization, and consolidated reporting.',
    image: '/admindashboard.jpg',
    tags: ['Django REST', 'React', 'PostgreSQL', 'Multi-Tenancy', 'Financial Accounting'],
    liveUrl: null,
    highlights: [
      'Multi-company schema isolation with unified administrative oversight',
      'Automated double-entry bookkeeping and tax calculation engines',
      'Real-time inventory transfers across distributed branch warehouses',
      'Consolidated P&L and balance sheet generators'
    ],
    architecture: {
      backend: 'Django multi-tenant architecture with PostgreSQL partitioned schemas',
      frontend: 'React dashboard with dynamic table filtering, data export, and ledger views',
      security: 'Granular organization-level permissions and encrypted financial records'
    }
  },
  {
    id: 'velvet-cakes-automation',
    title: 'VELVET CAKES Business Automation',
    rank: 'Top 3 Flagship',
    isFlagship: true,
    category: 'professional',
    type: 'fullstack',
    badge: 'Industrial Automation',
    subtitle: 'End-to-End Bakery Production, Order Logistics & POS Integration',
    description: 'An integrated business automation and POS system managing high-volume custom cake orders, automated ingredient batch calculations, delivery dispatch routing, and multi-counter POS.',
    image: '/homelyfoodshome.png',
    tags: ['Django', 'React', 'PostgreSQL', 'POS System', 'Logistics'],
    liveUrl: null,
    highlights: [
      'Custom cake 3D configurator and automated kitchen ticket dispatch',
      'Live recipe scaling and ingredient inventory deduction',
      'Multi-outlet POS billing with barcode scanner & thermal printer support',
      'Driver delivery dispatch tracking with real-time customer SMS notifications'
    ],
    architecture: {
      backend: 'Django REST backend handling inventory concurrency and POS transactions',
      frontend: 'High-speed React POS interface optimized for touchscreens and tablet counters'
    }
  },
  {
    id: 'agam-elearning',
    title: 'AGAM E-Learning Platform',
    rank: 'Top 4 Flagship',
    isFlagship: true,
    category: 'professional',
    type: 'fullstack',
    badge: 'EdTech Platform',
    subtitle: 'Interactive Course Delivery, Live Video Sessions & Assessment LMS',
    description: 'Next-generation learning management system featuring interactive video streaming, automated grading exams, student progress analytics, and instructor content authoring.',
    tags: ['Django', 'Python', 'HTML5/CSS3', 'JavaScript', 'AWS S3', 'Razorpay', 'PostgreSQL'],
    liveUrl: 'https://agam.net.in/',
    highlights: [
      'Admin Course Studio for video uploads, descriptions, pricing & quiz authoring',
      '2-Video free preview paywall before Razorpay course subscription checkout',
      'Lag-free video streaming & downloadable resources powered by AWS S3',
      'Automated dynamic completion certificates with unique verification credentials'
    ],
    architecture: {
      backend: 'Traditional Django MVT architecture with PostgreSQL and AWS S3 media hosting',
      frontend: 'Server-rendered Django templates with HTML5, CSS3, JavaScript, and Bootstrap'
    }
  },
  {
    id: 'gemstock-auction-singapore',
    title: 'GEMSTOCK - Auction Platform (Singapore)',
    rank: 'Top 5 Flagship',
    isFlagship: true,
    category: 'professional',
    type: 'fullstack',
    badge: 'Singapore Global Project',
    subtitle: 'Live Online Auction Engine, Real-Time Bidding & Admin Leaderboard',
    description: 'An international digital auction engine deployed for Singapore clients featuring real-time bidding, minimum bid gap enforcement, email verification, interactive bid history modals, and an admin live leaderboard.',
    image: '/fitzahome.jpg',
    tags: ['Python', 'Django', 'Email Verification', 'Live Bidding', 'Admin Leaderboard', 'Singapore'],
    liveUrl: null,
    highlights: [
      'Live bidding engine with minimum bid gap enforcement & interactive bid history modal',
      'Registered user authentication with email verification & buyer profile dashboard (All vs. Won Bids)',
      'Admin studio with 5-image uploader, timer controls, and live bid leaderboard',
      'Automated winner notification email dispatch & Singapore country-specific regulatory policy'
    ],
    architecture: {
      backend: 'Django backend with atomic row-level locks, time-triggered auction expiration workers & async email dispatchers',
      frontend: 'Interactive bidding interface with live countdown timers, bid history modal, and admin leaderboard'
    }
  },
  {
    id: 'tutor-me-singapore',
    title: 'Tutor Me (Singapore Project)',
    category: 'professional',
    type: 'fullstack',
    badge: 'Singapore EdTech',
    subtitle: 'On-Demand Tutor Marketplace & Video Classroom',
    description: 'Singapore-based tuition coordination platform connecting students, parents, tutors, and enquiries, with centralized operations and WhatsApp and Telegram communication workflows.',
    tags: ['Django', 'React', 'PostgreSQL', 'Stripe'],
    image: '/getmehelphome.png',
    highlights: ['Geo-based tutor discovery', 'Timezone-aware calendar booking', 'Automated tutor payouts']
  },
  {
    id: 'svt-invoice-system',
    title: 'SVT INVOICE Automation',
    category: 'professional',
    type: 'fullstack',
    badge: 'Django + React',
    subtitle: 'Enterprise Billing & GST Invoicing Automation Engine',
    description: 'Fast, automated invoicing system generating GST-compliant tax invoices, automated recurring billing reminders, and financial summaries.',
    tags: ['Django REST', 'React', 'PostgreSQL', 'PDF Generation'],
    image: '/admindashboard.jpg',
    highlights: ['1-click GST invoice generation', 'Automated email dispatch', 'Client aging balance reports']
  },
  {
    id: 'business-advisor-ai',
    title: 'Business Advisor AI',
    category: 'professional',
    type: 'fullstack',
    badge: 'AI Powered',
    subtitle: 'Intelligent Enterprise Performance & Predictive Advisor',
    description: 'AI-driven business analytics platform that analyzes business metrics, inventory velocity, and cashflow to deliver actionable growth recommendations.',
    tags: ['Python', 'Django', 'React', 'AI Analytics', 'LLM'],
    image: '/dietmasterhome.jpg',
    highlights: ['Predictive sales forecasting', 'Automated natural language reports', 'Executive decision dashboards']
  },
  {
    id: 'magizhnithi-finance',
    title: 'MAGIZHNITHI Finance',
    category: 'professional',
    type: 'fullstack',
    badge: 'Fintech Platform',
    subtitle: 'Loan Portfolio, Repayment Schedule & Interest Tracking System',
    description: 'Robust financial management application managing loan applications, penalty tracking, and customer statements.',
    tags: ['Django', 'PostgreSQL', 'React', 'FinTech'],
    image: '/admindashboard.jpg',
    highlights: ['EMI amortization schedules', 'Overdue penalty calculations', 'Daily collector route management']
  },
  {
    id: 'rayvolt-senergy',
    title: 'RAYVOLT SENERGY',
    category: 'professional',
    type: 'fullstack',
    badge: 'Industrial CleanTech',
    subtitle: 'Solar Energy Output Monitoring & Industrial Telemetry',
    description: 'Industrial clean energy platform showcasing commercial solar installations, plant capacity calculations, and client enquiry management.',
    tags: ['Django', 'React', 'Tailwind CSS', 'Solar Tech'],
    image: '/weatherhome.png',
    highlights: ['Solar capacity ROI calculator', 'Interactive industrial project gallery', 'Client service ticketing']
  },
  {
    id: 'rn-broiler-erp',
    title: 'RN Broiler ERP',
    category: 'professional',
    type: 'erp',
    badge: 'AgriTech ERP',
    subtitle: 'Poultry Farm Batch Lifecycle & Feed Logistics Management',
    description: 'Specialized supply chain ERP tracking broiler farm chick batches, mortality rates, automated feed ratio formulas, and wholesale distribution logistics.',
    tags: ['Django', 'React', 'PostgreSQL', 'Supply Chain'],
    image: '/admindashboard.jpg',
    highlights: ['Daily FCR (Feed Conversion Ratio) tracking', 'Vaccination schedule alerts', 'Wholesale weighing & invoicing']
  },
  {
    id: 'ak-mobiles-erp',
    title: 'AK Mobiles ERP',
    category: 'professional',
    type: 'erp',
    badge: 'Retail Tech',
    subtitle: 'IMEI-Level Inventory Tracking & Point of Sale System',
    description: 'Specialized mobile retail management system with barcode/IMEI scanning, warranty tracking, supplier returns, and multi-counter billing.',
    tags: ['Django', 'React', 'PostgreSQL', 'Barcode Scanner'],
    image: '/admindashboard.jpg',
    highlights: ['Serial/IMEI unique unit tracking', 'Warranty status lookup', 'Instant WhatsApp invoice dispatch']
  },
  {
    id: 'brain-edge-academy',
    title: 'Brain Edge Academy',
    category: 'professional',
    type: 'fullstack',
    badge: 'EdTech Portal',
    subtitle: 'State-Level Talent Competition & Examination Portal',
    description: 'Educational portal for registering students, issuing digital admit cards, conducting timed online competitive exams, and publishing rank lists.',
    tags: ['Django', 'React', 'PostgreSQL'],
    image: '/getmehelphome.png',
    highlights: ['Bulk school registrations', 'Hall ticket PDF generation', 'Automated rank list publishing']
  },
  {
    id: 'akshaya-interiors',
    title: 'Akshaya Interiors',
    category: 'professional',
    type: 'fullstack',
    badge: 'Architecture & Design',
    subtitle: 'Interactive Interior Design Catalog & 3D Project Portfolio',
    description: 'High-end interior design web platform featuring modern project portfolios, budget cost estimators, and customer consultation booking.',
    tags: ['React', 'Django', 'Tailwind CSS'],
    image: '/homelyfoodshome.png',
    highlights: ['High-resolution 3D render showcase', 'Custom room cost estimator', 'Consultation scheduling system']
  },
  {
    id: 'sharp-solars',
    title: 'Sharp Solars',
    category: 'professional',
    type: 'fullstack',
    badge: 'Renewable Energy',
    subtitle: 'Renewable Energy Blog & Industrial Product Catalog',
    description: 'Commercial solar products platform with technical specification datasheets, government subsidy calculators, and thought-leadership blogs.',
    tags: ['Django', 'React', 'Tailwind CSS'],
    image: '/weatherhome.png',
    highlights: ['Subsidy cost estimator', 'Product catalog with PDF downloads', 'Lead capture automation']
  },
  {
    id: 'andaman-ocean-bliss',
    title: 'Andaman Ocean Bliss',
    category: 'professional',
    type: 'fullstack',
    badge: 'Travel & Tourism',
    subtitle: 'Island Tourism Booking & Custom Tour Package Platform',
    description: 'Curated travel portal for island tours, water sports activity bookings, hotel reservations, and custom itinerary generation.',
    tags: ['React', 'Django', 'Tailwind CSS'],
    image: '/netflixclone.png',
    highlights: ['Custom tour package builder', 'Activity slot reservations', 'Interactive island itinerary maps']
  },
  {
    id: 'akshaya-entertainers',
    title: 'Akshaya Entertainers',
    category: 'professional',
    type: 'fullstack',
    badge: 'Media & Events',
    subtitle: 'Live Event Production & Media Showcase Platform',
    description: 'Dynamic event management and artist booking showcase featuring performance reels, event booking calendars, and press galleries.',
    tags: ['React', 'Tailwind CSS', 'GSAP'],
    image: '/netflix1.png',
    highlights: ['High-definition media gallery', 'Live event booking inquiry engine', 'Client testimonial reels']
  }
];

export const personalProjects = [
  {
    id: 'fitza-ecommerce',
    title: 'Fitza Ecommerce',
    category: 'personal',
    type: 'react',
    badge: 'Full-Stack React + DRF',
    subtitle: 'Comprehensive Health & Activewear E-Commerce Store',
    description: 'Full-stack e-commerce platform using React and Django REST Framework featuring seamless shopping cart, JWT user authentication, dynamic product filtering, and instant checkout.',
    image: '/fitzahome.jpg',
    tags: ['React', 'Django REST', 'PostgreSQL', 'Tailwind CSS', 'JWT'],
    demoUrl: 'https://fitza.netlify.app/',
    codeUrl: 'https://github.com',
    highlights: [
      'Complete React frontend with Django REST Framework backend API',
      'Persistent cart state and dynamic price calculation',
      'Advanced product filtering by category, price, and ratings',
      'Responsive mobile-first UI with smooth transitions'
    ],
    architecture: {
      backend: 'Django REST API endpoints with PostgreSQL and JWT auth',
      frontend: 'React single page application with modern hooks and responsive Tailwind styling'
    }
  },
  {
    id: 'netflix-clone',
    title: 'Netflix Clone',
    category: 'personal',
    type: 'react',
    badge: 'React & TMDB API',
    subtitle: 'High-Fidelity Cinematic Streaming Application',
    description: 'Netflix UI clone built with React featuring live trailer playback, dynamic category browsing, responsive layout, and TMDB REST API integration.',
    image: '/netflixclone.png',
    tags: ['React', 'TMDB API', 'Tailwind CSS', 'YouTube API'],
    demoUrl: 'https://euphonious-gumption-6654b0.netlify.app/',
    codeUrl: 'https://github.com',
    highlights: [
      'Real-time movie data streaming from TMDB REST API',
      'Embedded YouTube movie trailer playback on title click',
      'Dynamic banner hero with auto-rotating trending titles',
      'Fluid horizontal scrolling movie rows with hover card zoom'
    ],
    architecture: {
      backend: 'TMDB Public API and YouTube IFrame integration',
      frontend: 'React with custom async API fetchers and Tailwind CSS'
    }
  },
  {
    id: 'weather-app',
    title: 'Weather App',
    category: 'personal',
    type: 'react',
    badge: 'Live Meteorological App',
    subtitle: 'Real-Time Global Weather Engine & 5-Day Forecast',
    description: 'Real-time weather application with global location search, OpenWeather API integration, dynamic atmospheric condition visuals, and a responsive, attractive UI.',
    image: '/weatherhome.png',
    tags: ['React', 'OpenWeather API', 'Tailwind CSS', 'GeoLocation'],
    demoUrl: 'https://weather-app-new2025.netlify.app/',
    codeUrl: 'https://github.com',
    highlights: [
      'Instant global city search with auto-complete geolocation',
      'Real-time temperature, humidity, wind speed, and UV index',
      '5-day meteorological forecast breakdown with interactive visual icons',
      'Dynamic UI theme shifting based on day/night and atmospheric state'
    ],
    architecture: {
      backend: 'OpenWeather OneCall API & Geocoding REST endpoints',
      frontend: 'React state engine with responsive weather visualizers'
    }
  },
  {
    id: 'homely-foods',
    title: 'Homely Foods',
    category: 'personal',
    type: 'django',
    badge: 'Full-Stack Django Platform',
    subtitle: 'Home-Cooked Food Marketplace & Provider Hub',
    description: 'Homely Foods is a responsive Django-based food selling website with multi-role admin oversight, home chef food provider management, and customer ordering.',
    image: '/homelyfoodshome.png',
    tags: ['Django', 'Python', 'SQLite/PostgreSQL', 'Bootstrap', 'Auth'],
    demoUrl: 'http://homelyfoodsproject.pythonanywhere.com/',
    codeUrl: 'https://github.com',
    highlights: [
      'Multi-role authentication: Customers, Home Chefs, and Administrators',
      'Food provider dashboard for listing daily homemade menus',
      'Cart and order placement engine with status tracking',
      'Admin moderation panel for chef verification and food listings'
    ],
    architecture: {
      backend: 'Django MVC with Django ORM, authentication, and session handling',
      frontend: 'Server-rendered Django templates with dynamic CSS and JavaScript'
    }
  },
  {
    id: 'diet-master',
    title: 'Diet Master',
    category: 'personal',
    type: 'django',
    badge: 'Health & Nutrition Engine',
    subtitle: 'Diet Consultation, Meal Planning & Nutrition Tracker',
    description: 'Diet Master is a full-featured diet consultation platform with user health profiles, personalized meal planning, calorie calculation, and nutrition tracking.',
    image: '/dietmasterhome.jpg',
    tags: ['Django', 'Python', 'PostgreSQL', 'Bootstrap'],
    demoUrl: 'http://dietmasterwebsite.pythonanywhere.com/',
    codeUrl: 'https://github.com',
    highlights: [
      'BMI and daily caloric requirement calculator based on user health metrics',
      'Personalized weekly meal plan generator with macro breakdowns',
      'Dietitian consultation appointment scheduling and messaging',
      'User health progress tracking with weight history visual charts'
    ],
    architecture: {
      backend: 'Django backend with nutrition calculation algorithms and database models',
      frontend: 'Clean, accessible responsive user portal'
    }
  },
  {
    id: 'get-me-help',
    title: 'Get Me Help',
    category: 'personal',
    type: 'django',
    badge: 'Career & Services Portal',
    subtitle: 'Job Search, Service Assistance & Employer Portal',
    description: 'A comprehensive job search and assistance platform featuring resume uploads, employer job posting dashboards, candidate filtering, and real-time notifications.',
    image: '/getmehelphome.png',
    tags: ['Django', 'Python', 'PostgreSQL', 'Bootstrap'],
    demoUrl: 'http://getmehelpproject.pythonanywhere.com/',
    codeUrl: 'https://github.com',
    highlights: [
      'Dual portal for job seekers (resume upload) and employers (candidate review)',
      'Advanced job search filtering by location, role, and salary range',
      'Application tracking system for candidate hiring pipelines',
      'Email and dashboard notifications for application status updates'
    ],
    architecture: {
      backend: 'Django ORM managing job postings, candidate submissions, and media uploads',
      frontend: 'Modular responsive layout with intuitive dashboard navigation'
    }
  }
];

export const allProjects = [...professionalProjects, ...personalProjects];