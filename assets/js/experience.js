AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Frontend / Angular Developer",
    cardImage: "assets/images/experience-page/workcuit-logo.png",
    place: "Workcuit AI · Orland Park, IL",
    time: "(Jan 2024 - Present)",
    desp: "<li>🏗️ <strong>Architected multi-role dashboards</strong> for Admin, Front Desk, Housekeeping, Maintenance & Manager using <strong>Angular 17</strong>, <strong>PrimeNG</strong>, and <strong>TypeScript</strong> with role-based UI rendering and dynamic routing.</li> <li>⏱️ <strong>Built real-time shift management</strong> module with timer tracking, break handling, calendar views, shift templates, and swap request workflows using <strong>RxJS Observables</strong> and <strong>Firestore listeners</strong>.</li> <li>☁️ <strong>Deployed Angular SPAs on AWS</strong> using <strong>S3</strong>, <strong>CloudFront CDN</strong>, <strong>Lambda</strong>, and <strong>API Gateway</strong> for secure, highly available, low-latency delivery.</li> <li>🔄 <strong>Implemented NgRx state management</strong> with Store/Effects/Selectors and RxJS streams for room status updates, task assignments, and inter-department communication.</li> <li>🔐 <strong>Designed secure multi-tenant architecture</strong> with property-based data isolation, <strong>JWT authentication</strong>, <strong>RBAC</strong>, route guards, and <strong>Firebase Security Rules</strong>.</li> <li>📱 <strong>Developed Digital Guest Pad (iPad)</strong> for self-service check-in/check-out with touch-optimized UI, responsive layouts, and PrimeNG mobile components.</li> <li>🤖 <strong>Leveraged AI-powered tools</strong> including <strong>ChatGPT</strong>, <strong>GitHub Copilot</strong>, <strong>Figma AI</strong>, and <strong>Adobe Firefly</strong> for accelerated development and design-to-code workflows.</li> <li>⚡ <strong>Optimized performance</strong> with <strong>OnPush change detection</strong>, lazy loading, code splitting, virtual scrolling, and Core Web Vitals improvements.</li> <li>🔧 <strong>Built Node.js/Express APIs</strong> for shift operations, authentication, and property configuration with middleware validation, logging, and error handling.</li> <li>📊 <strong>Designed Firestore data models</strong> for properties, rooms, tasks, shifts, and reservations with optimized indexes and scalable query patterns.</li> <li>📈 <strong>Integrated analytics dashboards</strong> using <strong>Chart.js</strong> for occupancy, revenue trends, and staff productivity with drill-down filters.</li> <li>🔔 <strong>Implemented real-time notifications</strong> using <strong>Firebase Cloud Messaging (FCM)</strong> for task assignments, shift reminders, and operational alerts.</li> <li>✅ <strong>Built comprehensive testing</strong> with <strong>Jasmine/Karma</strong> for unit tests and <strong>Cypress</strong> for E2E testing across authentication and room/task modules.</li> <li>🚀 <strong>Automated CI/CD pipelines</strong> using <strong>GitHub Actions</strong> for linting, testing, and deployment to <strong>Firebase Hosting</strong>.</li>",
  },
  {
    title: "Frontend / UI Developer",
    cardImage: "assets/images/experience-page/factset-logo.png",
    place: "FactSet · India",
    time: "(Jul 2019 - Jun 2022)",
    desp: "<li>💹 <strong>Developed enterprise financial platforms</strong> using <strong>React.js</strong> and <strong>Material-UI</strong> for investment analytics, portfolio management, and market data visualization serving hedge funds, asset managers, and banks.</li> <li>📊 <strong>Built data-intensive dashboards</strong> for equity research, fixed income analytics, risk management, and financial data analysis tools used by institutional clients.</li> <li>📋 <strong>Implemented complex data grids</strong> using <strong>React Table</strong> and <strong>AG-Grid</strong> for real-time market data, portfolio holdings, and multi-dimensional analytics with sorting, filtering, and export capabilities.</li> <li>🔌 <strong>Integrated RESTful APIs & WebSocket</strong> connections for real-time financial data feeds, market updates, and pricing with efficient caching strategies.</li> <li>📈 <strong>Developed interactive charting</strong> using <strong>Highcharts</strong>, <strong>Recharts</strong>, and <strong>D3.js</strong> for time-series analysis, portfolio performance, and risk metrics dashboards.</li> <li>🧩 <strong>Created reusable component library</strong> following FactSet design system with <strong>styled-components</strong> for forms, tables, modals, and data visualization.</li> <li>🔄 <strong>Implemented Redux state management</strong> with middleware patterns, normalized data structures for financial entities, and selector patterns for derived calculations.</li> <li>🔍 <strong>Built advanced search interfaces</strong> for screening securities, analyzing financial statements, and querying market data with autocomplete and multi-select filters.</li> <li>⚡ <strong>Optimized large dataset handling</strong> using <strong>virtualization</strong>, memoization, code splitting, and <strong>Webpack</strong> optimization strategies.</li> <li>🧪 <strong>Developed form workflows</strong> using <strong>Formik</strong> with custom validation for portfolio construction, trade order entry, and client preference management.</li> <li>✅ <strong>Achieved 70%+ code coverage</strong> with <strong>Jest</strong> unit tests for financial calculations, data transformations, and component interactions.</li> <li>🤝 <strong>Collaborated in Agile/Scrum</strong> with product managers and global teams across time zones, participating in sprint planning, code reviews, and delivery tracked in <strong>JIRA</strong>.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(  
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Technical Skills Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Angular 2-19 & TypeScript",
    cardImage: "assets/images/experience-page/angular-logo.png",
    description:
      "5+ years building enterprise SPAs with Angular, TypeScript, RxJS, NgRx (Store/Effects/Selectors), and scalable component-based architecture.",
  },
  {
    title: "React.js & Redux",
    cardImage: "assets/images/experience-page/react-logo.png",
    description:
      "Building data-intensive financial dashboards with React.js, Redux, Material-UI, AG-Grid, styled-components, and real-time WebSocket integrations.",
  },
  {
    title: "Firebase & Firestore",
    cardImage: "assets/images/experience-page/firebase-logo.png",
    description:
      "Real-time data sync with Firestore, Firebase Auth, Cloud Functions, FCM notifications, Security Rules, and Firebase Hosting.",
  },
  {
    title: "AWS Cloud Services",
    cardImage: "assets/images/experience-page/aws-logo.png",
    description:
      "Deploying Angular SPAs on AWS S3, CloudFront CDN, Lambda functions, API Gateway, and CI/CD pipelines with CodePipeline.",
  },
  {
    title: "Node.js & Express",
    cardImage: "assets/images/experience-page/node-logo.png",
    description:
      "Full-stack development with Node.js/Express REST APIs, middleware validation, authentication workflows, and microservices architecture.",
  },
  {
    title: "UI Libraries & Styling",
    cardImage: "assets/images/experience-page/css-logo.png",
    description:
      "PrimeNG, Angular Material, Material-UI, AG-Grid, Bootstrap, Tailwind CSS, SCSS/SASS, Flexbox/Grid, and responsive mobile-first design.",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Certifications Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "Google Agile Project Management",
    subtitle: "Professional Certificate",
    image: "assets/images/experience-page/google-cert.png",
    desp: "Comprehensive certification covering Foundations of Agile Project Management, Google Agile Essentials, Implement the Scrum Framework, and Organize Projects & Measure Productivity with Scrum.",
    href: "https://www.coursera.org/professional-certificates/google-project-management",
  },
  {
    title: "AWS Certified Developer",
    subtitle: "Associate (In Progress)",
    image: "assets/images/experience-page/aws-cert.png",
    desp: "Pursuing AWS Developer Associate certification to validate cloud deployment skills with S3, CloudFront, Lambda, API Gateway, and CI/CD pipelines.",
    href: "https://aws.amazon.com/certification/certified-developer-associate/",
  },
  {
    title: "Azure AI Fundamentals",
    subtitle: "AI-900 (Planned)",
    image: "assets/images/experience-page/azure-cert.png",
    desp: "Planning to pursue Microsoft Azure AI Fundamentals certification to formalize AI tools expertise with ChatGPT, GitHub Copilot, and Azure AI services.",
    href: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-fundamentals/",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="${href}" class="blog-slider__button">Learn More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
