// Function to add the "navbarDark" class to the navbar on scroll
function handleNavbarScroll() {
    const header = document.querySelector(".navbar");
    window.onscroll = function () {
        const top = window.scrollY;
        if (top >= 100) {
            header.classList.add("navbarDark");
        } else {
            header.classList.remove("navbarDark");
        }
    };
}

// Function to handle navbar collapse on small devices after a click
function handleNavbarCollapse() {
    const navLinks = document.querySelectorAll(".nav-item");
    const menuToggle = document.getElementById("navbarSupportedContent");

    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            new bootstrap.Collapse(menuToggle).toggle();
        });
    });
}

// Function to dynamically create HTML elements from the JSON file
function createSkillsFromJSON() {
    const container = document.querySelector("#skills .container");
    let row = document.createElement("div");
    row.classList.add("row");

    // Load the JSON file
    fetch("data/skills.json")
        .then((response) => response.json())
        .then((data) => {
            // Iterate through the JSON data and create HTML elements
            data.forEach((item, index) => {
                const card = document.createElement("div");
                card.classList.add("col-lg-4", "mt-4");
                card.innerHTML = `
                    <div class="card skillsText">
                        <div class="card-body">
                            <img src="./images/${item.image}" />
                            <h4 class="card-title mt-3">${item.title}</h4>
                            <p class="card-text mt-3">${item.text}</p>
                        </div>
                    </div>
                `;

                // Append the card to the current row
                row.appendChild(card);

                // If the index is a multiple of 3 or it's the last element, create a new row
                if ((index + 1) % 3 === 0 || index === data.length - 1) {
                    container.appendChild(row);
                    row = document.createElement("div");
                    row.classList.add("row");
                }
            });
        });
}
// Function to dynamically create HTML elements from the JSON file
function createPortfolioFromJSON() {
    const container = document.querySelector("#portfolio .container");
    let row = document.createElement("div");
    row.classList.add("row");

    // Load the JSON file
    fetch("data/portfolio.json")
        .then((response) => response.json())
        .then((data) => {
            // Iterate through the JSON data and create HTML elements
            data.forEach((item, index) => {
                const card = document.createElement("div");
                card.classList.add("col-lg-4", "mt-4");
                card.innerHTML = `
                    <div class="card portfolioContent">
                    <img class="card-img-top" src="images/${item.image}" style="width:100%">
                    <div class="card-body">
                        <h4 class="card-title">${item.title}</h4>
                        <p class="card-text">${item.text}</p>
                        <div class="text-center">
                            <a href="${item.link}" target="_blank" rel="noopener noreferrer" class="space-btn"> <span> 🚀 Découvrir </span></a>
                        </div>
                    </div>
                </div>
                `;

                // Append the card to the current row
                row.appendChild(card);

                // If the index is a multiple of 3 or it's the last element, create a new row
                if ((index + 1) % 3 === 0 || index === data.length - 1) {
                    container.appendChild(row);
                    row = document.createElement("div");
                    row.classList.add("row");
                }
            });
        });
}

const particlesContainer = document.querySelector(".particles");

for (let i = 0; i < 30; i++) {

    const particle = document.createElement("span");

    particle.classList.add("particle");

    particle.style.left = Math.random() * 100 + "%";

    particle.style.animationDuration =
        (12 + Math.random() * 12) + "s";

    particle.style.animationDelay =
        Math.random() * 12 + "s";

    particle.style.opacity =
        Math.random() * 0.25;

    particle.style.transform =
        `scale(${0.5 + Math.random()})`;

    particlesContainer.appendChild(particle);

}

const terminal = document.getElementById("terminalText");

const cursor = document.createElement("span");

cursor.className = "cursor";

cursor.textContent = "█";

terminal.innerHTML = "";

terminal.appendChild(cursor);

const sequences = [

[
"> npm run test",
"",
"Running Cypress...",
"✔ Login Tests",
"",
"Running API Tests...",
"✔ Passed",
"",
"Running Smoke Tests...",
"✔ Passed",
"",
"Deploy Ready"
],

[
"> npm run security",
"",
"Checking XSS...",
"✔ Secure",
"",
"Checking CSRF...",
"✔ Secure",
"",
"Checking SQL Injection...",
"✔ Secure",
"",
"Security Scan Complete"
],

[
"> npm run qa",
"",
"Running Regression Tests...",
"✔ Passed",
"",
"Running Accessibility...",
"✔ Passed",
"",
"Running Performance...",
"✔ Passed",
"",
"Pipeline Complete"
]

];

let currentSequence = 0;
let currentLine = 0;
let currentChar = 0;

function typeCharacter(){

    const lines = sequences[currentSequence];

    if(currentLine >= lines.length){

        setTimeout(() => {

            terminal.innerHTML = "";
            terminal.appendChild(cursor);

            currentSequence++;

            if(currentSequence >= sequences.length){
                currentSequence = 0;
            }

            currentLine = 0;
            currentChar = 0;

            typeCharacter();

        },2500);

        return;

    }

    const line = lines[currentLine];

    if(currentChar < line.length){

        terminal.insertBefore(
            document.createTextNode(line.charAt(currentChar)),
            cursor
        );
        
        currentChar++;

        setTimeout(typeCharacter,35);

    }else{

        terminal.insertBefore(
            document.createTextNode("\n"),
            cursor
        );

        currentLine++;

        currentChar = 0;

        setTimeout(typeCharacter,300);

    }

}

typeCharacter();


console.clear();

console.log(`

██████╗  █████╗
██╔══██╗██╔══██╗
██████╔╝███████║
██╔═══╝ ██╔══██║
██║     ██║  ██║
╚═╝     ╚═╝  ╚═╝

Welcome, fellow developer 👋

You've already found the first easter egg.

Did you know?

The first "computer bug"
was literally a bug.

Happy testing!

— Miguel Oliveira

`);

console.log(
"%cTip: try typing history()",
"color:#22c55e;font-size:15px;font-weight:bold;"
);

function history(){

    console.clear();

    console.table({

        "1947":"First Computer Bug",

        "1970":"Software Testing grows",

        "1996":"JUnit",

        "2004":"Selenium",

        "2015":"Cypress",

        "2026":"Miguel Oliveira"

    });

}

const archiveModal = document.getElementById('qaArchiveModal');

archiveModal.addEventListener('show.bs.modal', () => {

    const loader = document.getElementById("archiveLoader");
    const content = document.getElementById("archiveContent");
    const progress = document.querySelector(".loader-progress");
    const status = document.getElementById("loaderStatus");

    loader.style.display = "block";
    content.style.display = "none";

    progress.style.width = "0%";

    status.textContent = "Initializing...";

    setTimeout(() => {

        progress.style.transition = "width 0.5s linear";
        progress.style.width = "100%";

        status.textContent = "Decrypting archive...";

    },100);

    setTimeout(() => {

        status.textContent = "Access Granted";

    },600);

    setTimeout(() => {

        loader.style.display="none";
        content.style.display="block";

    },1100);

});

// Call the functions to execute the code
handleNavbarScroll();
handleNavbarCollapse();
createSkillsFromJSON();
createPortfolioFromJSON();
