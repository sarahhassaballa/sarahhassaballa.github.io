const dynamicProjects = [
            {
                title: "Outfit Suggestion App & Closet Organizer",
                summary: "A digital closet mobile app that simplifies outfit planning and helps manage wardrobe.",
                description: `
                    <ul>
                        <li><b>Tools:</b> React Native, JavaScript, Django, Firebase, Python</li>
                        <li>Allows users to upload pictures of their clothing to build a catalog of their closet and combine items to create and save outfits for inspiration.</li>
                        <li>Users can filter clothing by tags, color, or weather.</li>
                        <li>The app suggests outfits based on style prompts, current weather conditions, and available clothing.</li>
                    </ul>
                `,
                image: "/assets/img/project-outfit-app.png",
                gitHub: null
            },
            {
                title: "Spell-Checker",
                summary: "An English spell-checker based on Python.",
                description: `
                    <ul>
                        <li><b>Tools:</b> Python</li>
                        <li>Checks the spelling of any English word or sentence.</li>
                        <li>Returns both the correctly spelled words and the misspelled words, and the closest correct spelling of any misspelled words.</li>
                    </ul>
                `,
                image: "/assets/img/project-spell-checker.png",
                gitHub: null
            },
            {
                title: "Geographical Information System (GIS)",
                summary: "A geographical information system based on C++.",
                description: `
                    <ul>
                        <li><b>Tools:</b> C++, NetBeans, GitHub, Glade</li>
                        <li>Effectively implemented several pathfinding algorithms such as A*, Dijkstra's, Breadth-First Search (BFS), and Multithreading for the user to successfully find the shortest path between any two locations on the GIS</li>
                        <li>Users can locate and reach restaurants, cafés, and subway stations anywhere on the map.</li>
                    </ul>
                `,
                image: "/assets/img/project-GIS.jpg",
                gitHub: "https://github.com/sarahhassaballa/ECE297-Mapper"
            },
            {
                title: "Hex Match 16 Game",
                summary: "An FPGA-based LED hex-matching game.",
                description: `
                    <ul>
                        <li><b>Tools:</b> ARM Assembly Language, DE1-SoC FPGA board, LEDs, HEX 7-segment displays, Switches</li>
                        <li>The system shows a "random" hex pattern on the HEX display.</li>
                        <li>The player must flip the switches to match that exact pattern.</li>
                        <li>Each success increments the score, shown on LEDs.</li>
                        <li>After 16 successes, the HEX display shows "PASSed".</li>
                    </ul>
                `,
                image: "/assets/img/project-DE1-SoC-board.jpg",
                gitHub: null
            }
        ];

        const container = document.getElementById("recent-projects-container");
        const toggleBtn = document.getElementById("toggle-btn");

        let expanded = false; // start collapsed every refresh

        function renderProjects() {
            container.innerHTML = ""; // clear

            // Build the GitHub button HTML only if gitHub property exists
            const gitHubButton = project.gitHub ? `
                <a href="${project.gitHub}" target="_blank" class="btn-floating btn-large waves-effect waves-light blue-grey">
                    <i class="fa fa-github"></i>
                </a>
            ` : '';

            if (expanded) {
                // Show all projects
                dynamicProjects.forEach(project => {
                    const card = `
                       <div class="col s12 m6 l4">
                            <div class="card medium">
                                <div class="card-image waves-effect waves-block waves-light">
                                    <img src="${project.image}" alt="${project.title}" style="width: 100%; height: 100%" class="activator" />
                                </div>
                                <div class="card-content">
                                    <span class="card-title activator teal-text hoverline">
                                        ${project.title}
                                        <i class="mdi-navigation-more-vert right"></i>
                                    </span>
                                    <p>${project.summary}</p>
                                </div>
                                <div class="card-reveal">
                                    <span class="card-title grey-text">
                                        <small>Accomplishments</small>
                                        <i class="mdi-navigation-close right"></i>
                                    </span>
                                    <ul>
                                        ${project.description}
                                    </ul>
                                    ${gitHubButton ? `<div class="card-action">${gitHubButton}</div>` : ''}
                                </div>
                            </div>
                        </div>
                    `; 
                    container.innerHTML += card;
                });
                toggleBtn.textContent = "Show Less";
            } else {
                // Show only most recent project (first in array)
                const project = dynamicProjects[0];
                const card = `
                        <div class="col s12 m6 l4">
                            <div class="card medium">
                                <div class="card-image waves-effect waves-block waves-light">
                                    <img src="${project.image}" alt="${project.title}" style="width: 100%; height: 100%" class="activator" />
                                </div>
                                <div class="card-content">
                                    <span class="card-title activator teal-text hoverline">
                                        ${project.title}
                                        <i class="mdi-navigation-more-vert right"></i>
                                    </span>
                                    <p>${project.summary}</p>
                                </div>
                                <div class="card-reveal">
                                    <span class="card-title grey-text">
                                        <small>Accomplishments</small>
                                        <i class="mdi-navigation-close right"></i>
                                    </span>
                                    <ul>
                                        ${project.description}
                                    </ul>
                                    ${gitHubButton ? `<div class="card-action">${gitHubButton}</div>` : ''}
                                </div>
                            </div>
                        </div>
                    `;
                container.innerHTML = card;
                toggleBtn.textContent = "Load More Projects";
            }
        }

        // Initial state = collapsed (showing only latest project)
        renderProjects();

        // Toggle expand/collapse
        toggleBtn.addEventListener("click", () => {
            expanded = !expanded;
            renderProjects();
        });

        