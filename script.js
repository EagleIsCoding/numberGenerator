// Random number generator

const generatedNumber = document.getElementById('generatedNumber');
const generateSubmit = document.getElementById('generateSubmit');
const minInput = document.getElementById('minInput');
const maxInput = document.getElementById('maxInput');
const error = document.getElementById('error');

/**
 * Generates a random number between the min and max values
 */
generateSubmit.addEventListener('click', () => {
    if (minInput.value === '' || maxInput.value === '') {
        error.textContent = 'Please enter a value for both min and max';
        return;
    }
    if (parseInt(minInput.value) > parseInt(maxInput.value)) {
        error.textContent = 'Min value must be less than max value';
        return;
    }
    error.textContent = '';
    const min = parseInt(minInput.value);
    const max = parseInt(maxInput.value);
    const random = Math.floor(Math.random() * (max - min + 1)) + min;
    generatedNumber.textContent = random;
});

