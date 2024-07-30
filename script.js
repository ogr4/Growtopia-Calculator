
document.addEventListener('DOMContentLoaded', function () {
    const navbarLinks = document.querySelectorAll('#nav a');
    navbarLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const calculatorType = event.target.dataset.calculator;
            loadCalculator(calculatorType);
            highlightSelectedButton(event.target);
        });
    });
});

function highlightSelectedButton(selectedButton) {
    const navbarLinks = document.querySelectorAll('#nav a');
    navbarLinks.forEach(link => {
        link.classList.remove('selected');
    });
    selectedButton.classList.add('selected');
}

function loadCalculator(type) {
    const inputFields = document.getElementById('input-fields');
    inputFields.innerHTML = '';

    let inputHTML = '';

    switch (type) {
        case 'crime':
            inputHTML = `
                <input class="input box" type="number" id="input1" placeholder="">
            `;
            break;
        case 'surg':
            inputHTML = `
            `;
            break;
        case 'gala':
            inputHTML = `
            `;
            break;
        default:
    }

    inputFields.innerHTML = inputHTML;
}