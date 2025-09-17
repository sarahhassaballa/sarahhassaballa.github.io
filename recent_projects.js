const dynamicProjects = [
  {
    title: "Outfit Suggestion App & Closet Organizer",
    summary: "A digital closet mobile app that simplifies outfit planning and helps manage wardrobe.",
    description: `
                <li><b>Tools:</b> React Native, JavaScript, Django, Firebase, Python</li>
                <li>Allows users to upload pictures of their clothing to build a catalog of their closet and combine items to create and save outfits for inspiration.</li>
                </li>Users can filter clothing by tags, color, or weather.</li>
                <li>The app suggests outfits based on style prompts, current weather conditions, and available clothing.</li>
    `,
    image: "/assets/img/project-outfit-app.png",
    link: "",
    gitHub: ""
  },
  {
    title: "Spell-Checker",
    summary: "An English spell-checker based on Python.",
    description: `
                <li><b>Tools:</b> Python</li>
                <li>Checks the spelling of any English word or sentence.</li>
                <li>Returns both the correctly spelled words and the misspelled words, and the closest correct spelling of any misspelled words.</li>
    `,
    image: "assets/img/project-spell-checker.png",
  },
  {
    title: "Geographical Information System (GIS)",
    summary: "A geographical information system based on C++.",
    description: `
                <li><b>Tools:</b> C++, NetBeans, GitHub, Glade</li>
                <li>Effectively implemented several pathfinding algorithms such as A*, Dijkstra’s, Breadth-First Search (BFS), and Multithreading for the user to successfully find the shortest path between any two locations on the GIS</li>
                <li>Users can locate and reach restaurants, cafés, and subway stations anywhere on the map.</li>
    `,
    image: "assets/img/project-GIS.jpg",
    gitHub: "https://github.com/sarahhassaballa/ECE297-Mapper"
  },
  {
    title: "Hex Match 16 Game",
    summary: "An FPGA-based LED hex-matching game.",
    description: `
                <li><b>Tools:</b> ARM Assembly Language, DE1-SoC FPGA board, LEDs, HEX 7-segment displays, Switches</li>
                <li>The system shows a “random” hex pattern on the HEX display.</li>
                <li>The player must flip the switches to match that exact pattern.</li>
                <li>Each success increments the score, shown on LEDs.</li>
                <li>After 16 successes, the HEX display shows “PASSed”.</li>
    `,
    image: "assets/img/project-DE1-SoC-board.jpg",
  }
];

const container = document.getElementById("recent-projects-container");
const toggleBtn = document.getElementById("toggle-btn");

let expanded = false; // start collapsed every refresh

function renderProjects() {
  container.innerHTML = ""; // clear

  if (expanded) {
    // Show all projects
    projects.forEach(project => {
      container.innerHTML += `
        <div class="col s12 m6 l4">
          <div class="card">
            <div class="card-image">
              <img src="${project.image}" alt="${project.title}">
            </div>
            <div class="card-content">
              <span class="card-title">${project.title}</span>
              <p>${project.description}</p>
            </div>
            <div class="card-action">
              <a href="${project.link}" target="_blank">View Project</a>
            </div>
          </div>
        </div>
      `;
    });
    toggleBtn.textContent = "Collapse";
  } else {
    // Show only most recent project
    const project = projects[0];
    container.innerHTML = `
      <div class="col s12 m6 l4">
        <div class="card">
          <div class="card-image">
            <img src="${project.image}" alt="${project.title}">
          </div>
          <div class="card-content">
            <span class="card-title">${project.title}</span>
            <p>${project.description}</p>
          </div>
          <div class="card-action">
            <a href="${project.link}" target="_blank">View Project</a>
          </div>
        </div>
      </div>
    `;
    toggleBtn.textContent = "Load More";
  }
}

// Initial state = collapsed
renderProjects();

// Toggle expand/collapse
toggleBtn.addEventListener("click", () => {
  expanded = !expanded;
  renderProjects();
});