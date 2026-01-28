AOS.init();
/* Project Cards - Updated to showcase key professional projects */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "Hotel Management System",
    cardImage: "assets/images/project-page/priestapp.jpeg",
    description: "Multi-tenant hotel management platform with real-time room status, shift management, and guest self-service features.",
    tags: ["Angular 17", "Firebase", "PrimeNG", "NgRx"],
    Previewlink: "#",
    Githublink: "#",
  },
  {
    title: "Financial Analytics Dashboard",
    cardImage: "assets/images/project-page/financial-dashboard.png",
    description: "Enterprise financial platform with real-time market data, portfolio management, and interactive charting.",
    tags: ["React.js", "Redux", "D3.js", "AG-Grid"],
    Previewlink: "#",
    Githublink: "#",
  },
  {
    title: "Front Desk Operations Hub",
    cardImage: "assets/images/project-page/front-desk-dashboard.png",
    description: "Centralized front desk dashboard for hotel operations with real-time cleaning status tracking, departure management, housekeeping requests, and maintenance ticket overview.",
    tags: ["Angular 17", "TypeScript", "Firestore", "PrimeNG"],
    Previewlink: "#",
    Githublink: "#",
  },
  {
    title: "Shift Management & Scheduling",
    cardImage: "assets/images/project-page/shift-scheduling.png?v=2",
    description: "Real-time shift tracking system with timer functionality, break management, calendar views, and automated schedule generation for hotel staff.",
    tags: ["Angular 17", "RxJS", "Firestore", "PrimeNG"],
    Previewlink: "#",
    Githublink: "#",
  },
  {
    title: "Housekeeping Management Module",
    cardImage: "assets/images/project-page/HousekeepingManagement.png",
    description: "Room cleaning status tracking, task assignment, and inventory management for hotel housekeeping operations with real-time updates.",
    tags: ["Angular", "Firebase", "PrimeNG", "RxJS"],
    Previewlink: "#",
    Githublink: "#",
  },
  {
    title: "Maintenance Request System",
    cardImage: "assets/images/project-page/MaintenanceRequest.png",
    description: "Work order management with priority-based ticket routing, photo attachments, progress tracking, and maintenance team coordination.",
    tags: ["Angular", "Firestore", "Cloud Functions", "FCM"],
    Previewlink: "#",
    Githublink: "#",
  },
];

// function for rendering project cards data
const showProjectCards = () => {
  let output = "";
  projects.forEach(({ title, cardImage, description, tags, Previewlink, Githublink }) => {
    const tagsHTML = tags ? tags.map(tag => `<span class="tech-tag">${tag}</span>`).join('') : '';
    
    output += `       
        <div class="column skill-card card" style="margin: 15px" data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600">
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
            <div class="header">
            </div>
            <div class="data">
              <div class="content">
                <div class="title-div">
                  <h4 class="title"><a target="_blank" href="${Githublink}">${title}</a></h4>
                  <p class="project-description">${description}</p>
                  <div class="tech-tags">${tagsHTML}</div>
                </div>
              </div>
            </div>
          </div>
        </div>`;
  });
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showProjectCards);

function myFunction() {
  var input, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  title = document.getElementsByClassName("title");

  for (i = 0; i < card.length; i++) {
    if (title[i].innerHTML.toUpperCase().includes(input)) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}
