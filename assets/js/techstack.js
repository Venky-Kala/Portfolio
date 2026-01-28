AOS.init();

//  Tech Stacks cards - Updated to match resume

const techStackCards = document.querySelector(".techstack-box");
const techStack = [
  {
    langImage: "assets/images/techstack-page/angular.png",
    langName: "Angular (2-19)",
    langDesc: "<li>5+ years building enterprise-grade SPAs with scalable, component-based architecture, Angular CLI, modules, services, and dependency injection.</li>",
  },
  {
    langImage: "assets/images/techstack-page/typescript.png",
    langName: "TypeScript & ES6+",
    langDesc: "<li>Strong expertise in TypeScript and modern JavaScript (ES6+) for type-safe, maintainable, and scalable frontend applications.</li>",
  },
  {
    langImage: "assets/images/techstack-page/react.png",
    langName: "React.js",
    langDesc: "<li>Building data-intensive financial dashboards and UI components with React, Redux, Hooks, and modern functional patterns.</li>",
  },
  {
    langImage: "assets/images/techstack-page/rxjs.png",
    langName: "RxJS & NgRx",
    langDesc: "<li>Reactive programming with RxJS Observables, Subjects, Streams, and NgRx (Store, Effects, Selectors) for complex state management.</li>",
  },
  {
    langImage: "assets/images/techstack-page/node.png",
    langName: "Node.js & Express",
    langDesc: "<li>Full-stack proficiency building REST APIs with clean routing, middleware validation, logging, and structured response patterns.</li>",
  },
  {
    langImage: "assets/images/techstack-page/firebase.png",
    langName: "Firebase & Firestore",
    langDesc: "<li>Real-time data sync, authentication, Cloud Functions, FCM notifications, scalable data modeling, and query/index optimization.</li>",
  },
  {
    langImage: "assets/images/techstack-page/aws.png",
    langName: "AWS Cloud",
    langDesc: "<li>Deploying and managing SPAs on Amazon S3, CloudFront CDN, Lambda functions, API Gateway, and CI/CD with CodePipeline.</li>",
  },
  {
    langImage: "assets/images/techstack-page/html.png",
    langName: "HTML5 & CSS3/SCSS",
    langDesc: "<li>Proficient in modern UI/UX practices including mobile-first design, accessibility (WCAG), cross-browser compatibility, and responsive layouts.</li>",
  },
  {
    langImage: "assets/images/techstack-page/primeng.png",
    langName: "PrimeNG & Angular Material",
    langDesc: "<li>Creating reusable components and consistent enterprise design systems with PrimeNG, Angular Material, and Tailwind CSS.</li>",
  },
  {
    langImage: "assets/images/techstack-page/git.png",
    langName: "Git & GitHub Actions",
    langDesc: "<li>Version control workflows, pull requests, CI/CD pipelines with GitHub Actions, Jenkins, and automated deployments.</li>",
  },
  {
    langImage: "assets/images/techstack-page/testing.png",
    langName: "Testing (Jasmine/Karma/Cypress)",
    langDesc: "<li>Unit testing with Jasmine/Karma and Jest, E2E testing with Cypress and Playwright, ensuring stable releases with automated coverage.</li>",
  },
  {
    langImage: "assets/images/techstack-page/charts.png",
    langName: "Data Visualization",
    langDesc: "<li>Interactive charting with Chart.js, Highcharts, Recharts, and D3.js for analytics dashboards, time-series, and performance metrics.</li>",
  },
];

const displayTechStacksCards = () => {
  const entireCardTemplate =
  techStack.map((stack)=> {
      return `        
    <div class="row page-content techstackcards" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="0" data-aos-duration="400"> 
        <div class="tech_card">
            <div class="card_img">
                <img src ="${stack.langImage}" class="featured_image">
            </div>
            <div class="card_header">
                <header>
                    <div class="text-center langName">
                        <h4>${stack.langName}</h4>
                    </div>
                </header>
                <ul class="description">
                ${stack.langDesc}
            </ul>
            </div>
        </div>
    </div>
      `}).join('');
  techStackCards.innerHTML = entireCardTemplate;
};
// displayTechStacksCards(techStack)
document.addEventListener("DOMContentLoaded", displayTechStacksCards);
