export const personalProjectDetails = {
  'fitza-ecommerce': {
    id: 'fitza-ecommerce',
    title: 'Fitza Ecommerce',
    subtitle: 'Comprehensive Health & Activewear E-Commerce Store',
    badge: 'Full-Stack React + DRF',
    category: 'E-Commerce Platform',
    images: [
      '/fitzahome.jpg',
      '/admindashboard.jpg'
    ],
    liveDemoUrl: 'https://fitza.netlify.app/',
    githubUrl: 'https://github.com/abhinandbhaskar/Fitza_Ecommerce',
    about:
      'Fitza is a modern full-stack e-commerce platform designed to provide a comprehensive, AI-powered dress and apparel shopping experience. The system features personalized product recommendations, secure checkout pipelines, dedicated seller store management, and intelligent chatbot assistance. Built with React and Django REST Framework, it blends modern UI design with scalable, production-ready backend APIs.',
    techStack: [
      'Python',
      'Django',
      'Django REST Framework',
      'React',
      'Tailwind CSS',
      'Redux',
      'PostgreSQL',
      'Razorpay',
      'JWT Auth',
      'AWS S3'
    ],
    userRoles: [
      {
        role: 'Administrator',
        badge: 'Admin',
        color: 'emerald',
        description: 'Full system control, platform moderation, user governance, merchant onboarding approvals, and real-time sales telemetry.'
      },
      {
        role: 'Seller / Merchant',
        badge: 'Seller',
        color: 'blue',
        description: 'Dedicated merchant portal to manage inventory catalogs, set pricing, view incoming order requests, and track revenue metrics.'
      },
      {
        role: 'Customer',
        badge: 'User',
        color: 'purple',
        description: 'Browse curated collections, receive AI recommendations, manage cart & wishlist, complete secure checkouts, and track live shipments.'
      }
    ],
    coreFeatures: [
      'AI-powered personalized product recommendation engine based on user browse patterns',
      'Integrated AI assistant chatbot for 24/7 customer support and inquiry handling',
      'Secure JWT authentication with HttpOnly cookies and Google OAuth Sign-In',
      'Dynamic pincode-based distance calculation for real-time shipping costs',
      'Coupon, discount voucher, and multi-tier loyalty reward system',
      'Dual payment gateway integration: Razorpay online checkout and Cash on Delivery (COD)',
      'Automated dynamic PDF invoice generation upon verified order completion',
      'Comprehensive seller dashboard with inventory stock telemetry and revenue analytics',
      'Admin moderation panel with complete user, product, and order lifecycle control'
    ],
    technicalImplementation:
      'The platform is built using React with Vite and Tailwind CSS for a high-performance, responsive single-page frontend. The backend is powered by Django and Django REST Framework (DRF) delivering high-throughput JSON API endpoints. Authentication relies on JWT stored in HttpOnly cookies to mitigate XSS vulnerabilities, synchronized with Redux Toolkit for state management. PostgreSQL manages ACID-compliant relational data, while media assets are served via AWS S3. The production backend runs with Gunicorn and Nginx reverse proxies, with the frontend deployed on Netlify.',
    challengesAndSolutions: [
      {
        challenge: 'JWT token loss and session desynchronization on page refresh',
        solution: 'Implemented secure HttpOnly cookie storage paired with an automated silent refresh token rotation endpoint, ensuring seamless session persistence.'
      },
      {
        challenge: 'Delivering accurate, personalized product recommendations',
        solution: 'Collected 500+ interaction event datasets to train a lightweight machine learning recommendation matrix based on user preferences and purchase history.'
      },
      {
        challenge: 'Secure and verified seller merchant onboarding',
        solution: 'Designed a multi-step OTP-based mobile verification and email verification pipeline before seller dashboard privileges are activated.'
      },
      {
        challenge: 'Dynamic distance-based shipping fee calculation',
        solution: 'Integrated an address pincode distance API calculating dynamic carrier shipping costs during live checkout.'
      },
      {
        challenge: 'Handling complex coupon discounts, taxes, and order totals',
        solution: 'Constructed an isolated order pricing engine handling tax calculations, discount stacking rules, and coupon validations.'
      }
    ]
  },

  'netflix-clone': {
    id: 'netflix-clone',
    title: 'Netflix Clone',
    subtitle: 'High-Fidelity Cinematic Streaming Application',
    badge: 'React & TMDB API',
    category: 'Media Streaming Web App',
    images: [
      '/netflixclone.png',
      '/netflix1.png'
    ],
    liveDemoUrl: 'https://euphonious-gumption-6654b0.netlify.app/',
    githubUrl: 'https://github.com/abhinandbhaskar/netflix-clone',
    about:
      'A high-fidelity web application replicating the core user interface and browsing experience of Netflix. Leveraging the TMDB (The Movie Database) REST API, the application dynamically streams real-time movie and television show catalogues across Trending, Popular, Top Rated, and genre-specific rows with instant movie trailer playback.',
    techStack: [
      'React',
      'JavaScript (ES6+)',
      'TMDB REST API',
      'YouTube IFrame API',
      'Tailwind CSS',
      'CSS Flexbox/Grid',
      'Axios'
    ],
    userRoles: [
      {
        role: 'Viewer / User',
        badge: 'Viewer',
        color: 'red',
        description: 'Browse live trending movies, inspect high-resolution posters and ratings, watch trailers, and filter by cinematic genres.'
      }
    ],
    coreFeatures: [
      'Authentic cinematic dark UI styled with Netflix design standards',
      'Live category carousels: Trending, Popular, Action, Comedy, Horror, and Top Rated',
      'Real-time metadata, posters, backdrops, and overview descriptions fetched via TMDB API',
      'Dynamic banner hero featuring automatically rotating featured films with description truncation',
      'Instant movie trailer modal playback powered by YouTube API integration',
      'Fluid horizontal scrolling movie rows with responsive hover zoom effects'
    ],
    technicalImplementation:
      'Developed with React SPA architecture utilizing functional components and custom asynchronous data hooks. Axios instances are pre-configured with TMDB base endpoints and API keys. Custom error-handling wrappers gracefully render fallback UI states when movie trailers or media backdrops are unavailable. Responsive media queries and modern CSS Grid ensure an immersive viewing experience on mobile devices, tablets, and widescreen desktop monitors.',
    challengesAndSolutions: [
      {
        challenge: 'Handling asynchronous TMDB API payload delays and varying image dimensions',
        solution: 'Constructed reusable React skeleton loaders and conditional image fallback handlers to prevent layout shifts during image loads.'
      },
      {
        challenge: 'Replicating responsive Netflix layout and smooth horizontal scroll rows with pure CSS',
        solution: 'Utilized CSS Flexbox with hidden scrollbar utilities and GPU-accelerated hover transforms for silky-smooth carousel navigation.'
      },
      {
        challenge: 'Fetching and synchronizing correct YouTube trailers for individual movie IDs',
        solution: 'Created an automated fallback query searching official movie trailer keys via TMDB video endpoints with graceful error handling.'
      }
    ]
  },

  'weather-app': {
    id: 'weather-app',
    title: 'Weather App',
    subtitle: 'Real-Time Global Weather Engine & 5-Day Forecast',
    badge: 'Live Meteorological App',
    category: 'Meteorological Analytics',
    images: [
      '/weatherhome.png'
    ],
    liveDemoUrl: 'https://weather-app-new2025.netlify.app/',
    githubUrl: 'https://github.com/abhinandbhaskar/weather-app',
    about:
      'A responsive real-time meteorological application providing instant global weather intelligence. Users can search for any city or coordinate worldwide to receive accurate temperature, humidity, wind velocity, UV index, and 5-day predictive forecasts, presented within an intuitive, clean interface.',
    techStack: [
      'React',
      'OpenWeather API',
      'JavaScript (ES6+)',
      'Tailwind CSS',
      'GeoLocation API',
      'Lucide Icons'
    ],
    userRoles: [
      {
        role: 'User',
        badge: 'User',
        color: 'cyan',
        description: 'Search worldwide locations, detect current location weather via GPS, and analyze detailed atmospheric metrics.'
      }
    ],
    coreFeatures: [
      'Global city search with dynamic auto-complete location querying',
      'Real-time atmospheric telemetry: current temperature, feels-like, humidity, pressure, and wind speed',
      '5-day meteorological forecast breakdown with interactive visual indicators',
      'Automatic geolocation detection using browser GPS APIs',
      'Dynamic background atmospheric visual adaptation reflecting live weather conditions',
      'Responsive, mobile-friendly design with intuitive card modularity'
    ],
    technicalImplementation:
      'Constructed with React and Vite. API calls are orchestrated to OpenWeather OneCall and Geocoding APIs using custom async fetch hooks. State management maintains search history and unit toggles (Celsius / Fahrenheit). Optimized to cache recent city searches to minimize repetitive API hits and ensure rapid response times.',
    challengesAndSolutions: [
      {
        challenge: 'Handling disparate timezone offsets and UTC date-time conversions for global cities',
        solution: 'Engineered a timezone calculation utility mapping local city offsets to accurate 12-hour local sunrise, sunset, and hourly forecast displays.'
      },
      {
        challenge: 'Gracefully managing invalid city names or API rate-limiting responses',
        solution: 'Implemented client-side input validation, debounced search triggers, and user-friendly error banners.'
      }
    ]
  },

  'homely-foods': {
    id: 'homely-foods',
    title: 'Homely Foods',
    subtitle: 'Home-Cooked Food Marketplace & Provider Hub',
    badge: 'Full-Stack Django Platform',
    category: 'Food Marketplace & Logistics',
    images: [
      '/homelyfoodshome.png'
    ],
    liveDemoUrl: 'http://homelyfoodsproject.pythonanywhere.com/',
    githubUrl: 'https://github.com/abhinandbhaskar/First-Academic-Project-HomelyFoods',
    about:
      'Homely Foods is an online community marketplace connecting consumers with local home chefs providing authentic homemade meals. The platform enables users to discover local culinary offerings, view fresh daily menus, place meal orders, and track deliveries, while local home cooks manage their kitchens, orders, and customer relationships.',
    techStack: [
      'Python',
      'Django',
      'MySQL',
      'HTML5',
      'CSS3',
      'JavaScript',
      'Bootstrap 5',
      'Django ORM'
    ],
    userRoles: [
      {
        role: 'Customer',
        badge: 'Consumer',
        color: 'emerald',
        description: 'Explore daily home menus, filter by diet and dietary preferences, place meal orders, and track delivery progress.'
      },
      {
        role: 'Home Food Provider',
        badge: 'Home Chef',
        color: 'amber',
        description: 'Publish daily meal offerings, configure price and preparation quantities, review incoming orders, and manage dispatch status.'
      },
      {
        role: 'Administrator',
        badge: 'Admin',
        color: 'blue',
        description: 'Chef kitchen verification, menu compliance monitoring, customer dispute resolution, and platform-wide order oversight.'
      }
    ],
    coreFeatures: [
      'Multi-role authentication engine distinguishing Customers, Chefs, and Administrators',
      'Kitchen provider dashboard for publishing daily rotating meal schedules',
      'Interactive cart and order placement engine with real-time status progression (Pending, Cooking, Dispatched, Delivered)',
      'Admin moderation portal for home chef verification and hygiene inspection tracking',
      'Customer review and rating system ensuring high community food standards',
      'Responsive mobile-optimized interface for on-the-go ordering'
    ],
    technicalImplementation:
      'Built upon Django MVC architecture utilizing Django ORM for relational schema integrity across Users, Menus, Orders, and Reviews. User permissions are governed by custom Django auth decorators and session handling. Relational database storage is managed by MySQL with indexing on geographical search parameters to optimize local search speed.',
    challengesAndSolutions: [
      {
        challenge: 'Managing fluctuating meal inventory and preventing over-ordering on daily specials',
        solution: 'Implemented transactional database locking in Django ORM during checkout to accurately decrement available portion quantities.'
      },
      {
        challenge: 'Separating privileges and view access between home cooks and customers',
        solution: 'Created custom Django user model profiles paired with role-based view decorators restricting unauthorized actions.'
      }
    ]
  },

  'diet-master': {
    id: 'diet-master',
    title: 'Diet Master',
    subtitle: 'Diet Consultation, Meal Planning & Nutrition Tracker',
    badge: 'Health & Nutrition Engine',
    category: 'Healthcare & Wellness Platform',
    images: [
      '/dietmasterhome.jpg'
    ],
    liveDemoUrl: 'http://dietmasterwebsite.pythonanywhere.com/',
    githubUrl: 'https://github.com/abhinandbhaskar/Academic-Project-DietMaster',
    about:
      'Diet Master is a full-featured clinical diet consultation and nutritional planning platform. It assists individuals in managing their wellness journeys through automated BMI calculation, personalized caloric targets, weekly macronutrient meal plans, and direct scheduling with certified dietitians.',
    techStack: [
      'Python',
      'Django',
      'PostgreSQL',
      'Bootstrap 5',
      'JavaScript',
      'Chart.js',
      'Django ORM'
    ],
    userRoles: [
      {
        role: 'User / Patient',
        badge: 'Patient',
        color: 'emerald',
        description: 'Log health vitals (height, weight, age, activity level), receive customized meal plans, and schedule nutritionist consultations.'
      },
      {
        role: 'Dietitian / Specialist',
        badge: 'Consultant',
        color: 'blue',
        description: 'Review assigned patient medical profiles, design tailored dietary regimens, and manage video/messaging appointment bookings.'
      },
      {
        role: 'Administrator',
        badge: 'Admin',
        color: 'purple',
        description: 'Verify dietitian credentials, manage system analytics, and govern dietary database recipes.'
      }
    ],
    coreFeatures: [
      'Automated Body Mass Index (BMI) and Basal Metabolic Rate (BMR) calculation engine',
      'Dynamic caloric target calculation based on weight goals (maintenance, loss, or gain)',
      'Custom weekly meal generator with granular carbohydrate, protein, and fat breakdowns',
      'Dietitian appointment booking calendar with confirmation notifications',
      'Patient weight and wellness history tracking with visual progress charts',
      'Curated nutritional recipe database with allergen and dietary preference tags'
    ],
    technicalImplementation:
      'Engineered with Django backend workflows and PostgreSQL. Mathematical algorithms calculate precise metabolic metrics based on Harris-Benedict formulas. Interactive visual trend graphs are rendered using Chart.js on client pages. Django sessions and form validations safeguard sensitive personal health information.',
    challengesAndSolutions: [
      {
        challenge: 'Generating accurate dietary calorie recommendations across diverse user body types',
        solution: 'Integrated validated clinical formulas factoring in age, gender, height, current weight, and activity intensity tiers.'
      },
      {
        challenge: 'Preventing double-booking of dietitian consultation time slots',
        solution: 'Designed database constraint models and transaction checks ensuring exclusive time reservation per consultant.'
      }
    ]
  },

  'get-me-help': {
    id: 'get-me-help',
    title: 'Get Me Help',
    subtitle: 'Job Search, Service Assistance & Employer Portal',
    badge: 'Career & Services Portal',
    category: 'Employment & Services Network',
    images: [
      '/getmehelphome.png'
    ],
    liveDemoUrl: 'http://getmehelpproject.pythonanywhere.com/',
    githubUrl: 'https://github.com/abhinandbhaskar/internship-project-get-me-help',
    about:
      'Get Me Help is an employment and service assistance web portal designed to bridge the gap between people seeking specialized assistance and skilled professionals offering services. The platform streamlines job discovery, service requests, resume evaluation, and hiring pipelines across Users, Admins, and Workers.',
    techStack: [
      'Python',
      'Django',
      'React',
      'Tailwind CSS',
      'Bootstrap',
      'JavaScript',
      'PostgreSQL',
      'Django ORM'
    ],
    userRoles: [
      {
        role: 'Job Seeker / Client',
        badge: 'Client',
        color: 'blue',
        description: 'Search available positions, upload resumes, submit service assistance requests, and track application feedback.'
      },
      {
        role: 'Employer / Worker',
        badge: 'Provider',
        color: 'emerald',
        description: 'Publish job listings and service offerings, review candidate submissions, download resumes, and manage hiring stages.'
      },
      {
        role: 'Administrator',
        badge: 'Admin',
        color: 'purple',
        description: 'Review posted listings for safety, verify employer registrations, and resolve dispute tickets.'
      }
    ],
    coreFeatures: [
      'Dual portal architecture supporting both individual service assistance and formal employment listings',
      'Resume file upload and profile portfolio management for applicants',
      'Advanced multi-parameter search filtering by location, industry, and compensation tier',
      'Employer candidate management dashboard with status updates (Under Review, Interviewed, Hired)',
      'Automated email and dashboard notifications for applicant status progression',
      'Secure document storage and verified employer badges'
    ],
    technicalImplementation:
      'Built with Django backend architecture supporting media file uploads, PostgreSQL database models, and responsive frontend UI components. File uploads are sanitized and stored with authenticated access permissions to safeguard applicant privacy. Modular views enable rapid search and filtering across active listings.',
    challengesAndSolutions: [
      {
        challenge: 'Secure handling and validation of diverse resume file formats (PDF, DOCX)',
        solution: 'Implemented file type and size validation hooks in Django models to prevent unauthorized execution or oversized file uploads.'
      },
      {
        challenge: 'Maintaining scalable search query performance across high-volume job listings',
        solution: 'Utilized PostgreSQL indexed search fields across title, description, and location attributes for rapid sub-second query retrieval.'
      }
    ]
  }
};
