const gridContainer = document.querySelector("#grid-container");
const resizeButton = document.querySelector("#resize-button");

function createGrid(size) {
    gridContainer.replaceChildren();

    const squareSize = 960 / size;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");

        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        square.style.flex = `0 0 ${squareSize}px`;

        let interactionCount = 0;

        square.addEventListener("mouseenter", () => {
            const red = Math.floor(Math.random() * 256);
            const green = Math.floor(Math.random() * 256);
            const blue = Math.floor(Math.random() * 256);

            square.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

            interactionCount++;

            const brightness = Math.max(1 - interactionCount * 0.1, 0);

            square.style.filter = `brightness(${brightness})`;
        });

        gridContainer.appendChild(square);
    }
}

resizeButton.addEventListener("click", () => {
    const userInput = prompt("Enter the number of squares per side (1-100):");

    if (userInput === null) {
        return;
    }

    const trimmedInput = userInput.trim();

    if (!/^\d+$/.test(trimmedInput)) {
        alert("Please enter a whole number between 1 and 100.");
        return;
    }

    const newSize = Number(trimmedInput);

    if (newSize < 1 || newSize > 100) {
        alert("Please enter a whole number between 1 and 100.");
        return;
    }

    createGrid(newSize);
});

createGrid(16);
