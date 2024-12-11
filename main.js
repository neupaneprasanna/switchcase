// JavaScript for filtering questions

// Function to filter question list based on search input
function filterQuestions() {
    const searchInput = document.getElementById('search').value.toLowerCase();
    const questionList = document.getElementById('question-list');
    const questions = questionList.getElementsByTagName('li');

    for (let i = 0; i < questions.length; i++) {
        const questionText = questions[i].textContent || questions[i].innerText;
        if (questionText.toLowerCase().indexOf(searchInput) > -1) {
            questions[i].style.display = ""; // Show matching items
        } else {
            questions[i].style.display = "none"; // Hide non-matching items
        }
    }
}

// Optional: Enhance user experience with delayed search filtering
document.getElementById('search').addEventListener('input', debounce(filterQuestions, 300));

// Debounce function to limit the rate of search execution
function debounce(func, wait) {
    let timeout;
    return function (...args) {
        const context = this;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), wait);
    };
}


