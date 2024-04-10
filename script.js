let gridSize = 16; //starting size of grid
let isDarkening = false; //start by interacting with rainbow colors

// defining elements in html for later use

const content = document.querySelector(".content");
const selections = document.querySelector(".selections");
const button = document.querySelectorAll("button");
const gridChange = document.querySelector(".gridChange");
const interactionChange = document.querySelector(".interactionChange");
const container = document.querySelector(".container");

gridChange.onclick = () => {
    let isValidInput = false;
    let oldGridSize = gridSize;
    while (isValidInput === false) {
        gridSize = prompt(
            "How large would you like the grid?\nInput any integer from 1 to 100!",
            16
        );

        if (gridSize > 0 && gridSize <= 100 && gridSize % 1 === 0) {
            isValidInput = true;
            eraseSketchPad();
            createSketchPad(gridSize, isDarkening);
        } else if (gridSize === null) {
            isValidInput = true;
            gridSize = oldGridSize;
        }
    }
};

interactionChange.onclick = () => {
    eraseSketchPad();
    isDarkening = !isDarkening;
    createSketchPad(gridSize, isDarkening);
};

let createSketchPad = function (gridSize, isDarkening) {
    for (let i = 0; i < gridSize * gridSize; i++) {
        let gridDiv = document.createElement("div");
        if (isDarkening === false) {
            gridDiv.onmouseover = () => {
                gridDiv.style.backgroundColor =
                    "rgb(" +
                    Math.floor(Math.random() * 255) +
                    "," +
                    Math.floor(Math.random() * 255) +
                    "," +
                    Math.floor(Math.random() * 255) +
                    ")";
            };
        } else if (isDarkening === true) {
            gridDiv.style.backgroundColor = "rgb(0, 0, 0)";
            gridDiv.style.opacity = "0";
            gridDiv.onmouseover = () => {
                gridDiv.style.opacity = `${
                    parseFloat(gridDiv.style.opacity) + 0.1
                }`;
            };
        }
        gridDiv.style.flex = `1 1 ${75 / gridSize}vh`;
        gridDiv.style.minHeight = `${75 / gridSize}vh`;
        container.appendChild(gridDiv);
    }
};

let eraseSketchPad = function () {
    while (container.childElementCount > 0) {
        container.removeChild(container.lastChild);
    }
};

// Practice with setting styles via JS

content.style.display = "flex";
content.style.flexDirection = "column";
content.style.gap = "30px";
content.style.justifyContent = "center";
content.style.alignItems = "center";

container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.height = "75vh";
container.style.width = "75vh";
container.style.borderStyle = "solid";
container.style.borderWidth = "1px";
container.style.borderColor = "rgb(150, 150, 150)";

button.forEach(function (button) {
    button.style.padding = "10px 20px";
    button.style.border = "none";
    button.style.borderRadius = "5px";
    button.style.backgroundImage =
        "linear-gradient(to right, #ff7e5f, #feb47b)";
    button.style.color = "white";
    button.style.fontSize = "16px";
    button.style.fontWeight = "bolder";
    button.style.cursor = "pointer";
    button.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.2)";
    button.style.transition = "all 0.3s ease";

    // Add a hover effect
    button.addEventListener("mouseover", function () {
        button.style.backgroundImage =
            "linear-gradient(to right, #feb47b, #ff7e5f)";
    });

    button.addEventListener("mouseout", function () {
        button.style.backgroundImage =
            "linear-gradient(to right, #ff7e5f, #feb47b)";
    });
});

// Initial grid building

createSketchPad(gridSize, isDarkening);
