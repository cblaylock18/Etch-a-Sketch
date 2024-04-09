let gridSize = 100; //this will need to eventually change with user input

const content = document.querySelector(".content");
const selections = document.querySelector(".selections");
const container = document.querySelector(".container");

let createSketchPad = function (gridSize) {
    for (let i = 0; i < gridSize * gridSize; i++) {
        let gridDiv = document.createElement("div");
        gridDiv.onmouseover = () => {
            gridDiv.style.backgroundColor =
                "rgb(" +
                Math.random() * 255 +
                "," +
                Math.random() * 255 +
                "," +
                Math.random() * 255 +
                ")";
        };
        gridDiv.style.flex = `1 1 ${75 / gridSize}vh`;
        gridDiv.style.minHeight = `${75 / gridSize}vh`;
        container.appendChild(gridDiv);
    }
};

createSketchPad(gridSize);

content.style.display = "flex";
content.style.justifyContent = "center";
content.style.alignItems = "center";

container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.height = "75vh";
container.style.width = "75vh";
