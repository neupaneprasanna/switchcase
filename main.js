// main.js

document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("search");
    const questionItems = document.querySelectorAll(".question-item");
    const searchButton = document.querySelector("button");

    // Event listener for the Search button
    searchButton.addEventListener("click", () => {
        const query = searchInput.value.toLowerCase();

        questionItems.forEach((item) => {
            const questionText = item.textContent.toLowerCase();
            if (questionText.includes(query)) {
                item.style.display = "block"; // Show matching questions
            } else {
                item.style.display = "none"; // Hide non-matching questions
            }
        });
    });
});

