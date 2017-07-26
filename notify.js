const button = document.querySelector('.front-btn');
const form = document.getElementById('email-form');
const container = document.querySelector('.container');

function showForm() {
    container.classList.add('active');
}

function showButton(e) {
    e.preventDefault();
    button.textContent = "Thank You";
    button.removeEventListener('click', showForm);
    button.setAttribute("cursor", "default");
    container.classList.remove('active');
}

button.addEventListener('click', showForm);
form.addEventListener('submit', showButton);

