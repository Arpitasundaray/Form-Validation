(() => {
    'use strict';

    const forms = document.querySelectorAll('.needs-validation');

    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }

            form.classList.add('was-validated');
        }, false);
    });

    const registrationForm = document.getElementById('registrationForm');

    // Validate username
    const validateUsername = () => {
        const username = document.getElementById('Username');
        if (username.value.length < 5) {
            username.classList.add('is-invalid');
            document.getElementById('UsernameFeedback').textContent = 'Username must be at least 5 characters long.';
            return false;
        } else {
            username.classList.remove('is-invalid');
            username.classList.add('is-valid');
            return true;
        }
    };

    // Validate full name
    const validateFullName = () => {
        const fullName = document.getElementById('FullName');
        if (fullName.value.length < 5) {
            fullName.classList.add('is-invalid');
            document.getElementById('FullNameFeedback').textContent = 'Name must be at least 5 characters long.';
            return false;
        } else {
            fullName.classList.remove('is-invalid');
            fullName.classList.add('is-valid');
            return true;
        }
    };

    // Validate email
    const validateEmail = () => {
        const email = document.getElementById('email');
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value)) {
            email.classList.add('is-invalid');
            document.getElementById('emailFeedback').textContent = 'Please enter a valid email address.';
            return false;
        } else {
            email.classList.remove('is-invalid');
            email.classList.add('is-valid');
            return true;
        }
    };

    
    // Validate phone number
    const validatePhoneNumber = () => {
        const phoneNumber = document.getElementById('PhoneNumber');
        const phoneNumberPattern = /^[0-9]{10}$/;
        if (!phoneNumberPattern.test(phoneNumber.value)) {
            phoneNumber.classList.add('is-invalid');
            document.getElementById('PhoneNumberFeedback').textContent = 'Please enter a valid 10-digit phone number.';
            return false;
        } else {
            phoneNumber.classList.remove('is-invalid');
            phoneNumber.classList.add('is-valid');
            return true;
        }
    };

    // Validate password
    const validatePassword = () => {
        const password = document.getElementById('Password');
        const fullNameValue = document.getElementById('FullName').value.toLowerCase();
        const passwordValue = password.value.toLowerCase();
        if (password.value.length < 8 || passwordValue === 'password' || passwordValue === fullNameValue) {
            password.classList.add('is-invalid');
            document.getElementById('PasswordFeedback').textContent = 'Password must be at least 8 characters long, and cannot be "password" or your name.';
            return false;
        } else {
            password.classList.remove('is-invalid');
            password.classList.add('is-valid');
            return true;
        }
    };

    // Validate confirm password
    const validateConfirmPassword = () => {
        const password = document.getElementById('Password');
        const confirmPassword = document.getElementById('ConfirmPassword');
        if (password.value !== confirmPassword.value) {
            confirmPassword.classList.add('is-invalid');
            document.getElementById('ConfirmPasswordFeedback').textContent = 'Passwords do not match.';
            return false;
        } else {
            confirmPassword.classList.remove('is-invalid');
            confirmPassword.classList.add('is-valid');
            return true;
        }
    };

    // Validate date of birth
    const validateDateOfBirth = () => {
        const dateOfBirth = document.getElementById('DateOfBirth');
        if (!dateOfBirth.value) {
            dateOfBirth.classList.add('is-invalid');
            document.getElementById('DateOfBirthFeedback').textContent = 'Please enter your date of birth.';
            return false;
        } else {
            dateOfBirth.classList.remove('is-invalid');
            dateOfBirth.classList.add('is-valid');
            return true;
        }
    };

    // Validate gender
    const validateGender = () => {
        const gender = document.getElementById('Gender');
        if (!gender.value) {
            gender.classList.add('is-invalid');
            document.getElementById('GenderFeedback').textContent = 'Please select your gender.';
            return false;
        } else {
            gender.classList.remove('is-invalid');
            gender.classList.add('is-valid');
            return true;
        }
    };

    // Validate address
    const validateAddress = () => {
        const address = document.getElementById('Address');
        if (!address.value) {
            address.classList.add('is-invalid');
            document.getElementById('AddressFeedback').textContent = 'Please enter your address.';
            return false;
        } else {
            address.classList.remove('is-invalid');
            address.classList.add('is-valid');
            return true;
        }
    };

    // Validate city
    const validateCity = () => {
        const city = document.getElementById('City');
        if (!city.value) {
            city.classList.add('is-invalid');
            document.getElementById('CityFeedback').textContent = 'Please enter your city.';
            return false;
        } else {
            city.classList.remove('is-invalid');
            city.classList.add('is-valid');
            return true;
        }
    };

    // Validate state
    const validateState = () => {
        const state = document.getElementById('State');
        if (!state.value) {
            state.classList.add('is-invalid');
            document.getElementById('StateFeedback').textContent = 'Please enter your state.';
            return false;
        } else {
            state.classList.remove('is-invalid');
            state.classList.add('is-valid');
            return true;
        }
    };

    // Validate zip code
    const validateZipCode = () => {
        const zipCode = document.getElementById('ZipCode');
        if (!zipCode.value) {
            zipCode.classList.add('is-invalid');
            document.getElementById('ZipCodeFeedback').textContent = 'Please enter your zip code.';
            return false;
        } else {
            zipCode.classList.remove('is-invalid');
            zipCode.classList.add('is-valid');
            return true;
        }
    };

    // Validate country
    const validateCountry = () => {
        const country = document.getElementById('Country');
        if (!country.value) {
            country.classList.add('is-invalid');
            document.getElementById('CountryFeedback').textContent = 'Please select your country.';
            return false;
        } else {
            country.classList.remove('is-invalid');
            country.classList.add('is-valid');
            return true;
        }
    };

    // Validate profile picture
    const validateProfilePicture = () => {
        const profilePicture = document.getElementById('ProfilePicture');
        profilePicture.classList.add('is-valid');
        return true;
    };

    // Validate security question
    const validateSecurityQuestion = () => {
        const securityQuestion = document.getElementById('SecurityQuestion');
        if (!securityQuestion.value) {
            securityQuestion.classList.add('is-invalid');
            document.getElementById('SecurityQuestionFeedback').textContent = 'Please select a security question.';
            return false;
        } else {
            securityQuestion.classList.remove('is-invalid');
            securityQuestion.classList.add('is-valid');
            return true;
        }
    };

    // Validate security answer
    const validateSecurityAnswer = () => {
        const securityAnswer = document.getElementById('SecurityAnswer');
        if (!securityAnswer.value) {
            securityAnswer.classList.add('is-invalid');
            document.getElementById('SecurityAnswerFeedback').textContent = 'Please provide an answer to your security question.';
            return false;
        } else {
            securityAnswer.classList.remove('is-invalid');
            securityAnswer.classList.add('is-valid');
            return true;
        }
    };

    // Validate terms and conditions
    const validateTerms = () => {
        const terms = document.getElementById('Terms');
        if (!terms.checked) {
            terms.classList.add('is-invalid');
            terms.nextElementSibling.classList.add('text-danger');
            return false;
        } else {
            terms.classList.remove('is-invalid');
            terms.nextElementSibling.classList.remove('text-danger');
            return true;
        }
    };

    // Reset form validation styles and values
    const resetForm = () => {
        const form = document.getElementById('registrationForm');
        form.reset();
        const elements = form.elements;
        for (let i = 0; i < elements.length; i++) {
            elements[i].classList.remove('is-valid', 'is-invalid');
        }
    };

    // Submit form function
    const submitForm = () => {
        if (registrationForm.checkValidity()) {
            $('#successModal').modal('show'); // Show the success modal
            resetForm(); // Reset the form after successful submission
        } else {
            registrationForm.classList.add('was-validated');
        }
    };

    // Validate the entire form
    const validateForm = (event) => {
        event.preventDefault();
        let formValid = true;

        if (!validateUsername()) formValid = false;
        if (!validateFullName()) formValid = false;
        if (!validateEmail()) formValid = false;
        if (!validatePhoneNumber()) formValid = false;
        if (!validatePassword()) formValid = false;
        if (!validateConfirmPassword()) formValid = false;
        if (!validateDateOfBirth()) formValid = false;
        if (!validateGender()) formValid = false;
        if (!validateAddress()) formValid = false;
        if (!validateCity()) formValid = false;
        if (!validateState()) formValid = false;
        if (!validateZipCode()) formValid = false;
        if (!validateCountry()) formValid = false;
        if (!validateProfilePicture()) formValid = false;
        if (!validateSecurityQuestion()) formValid = false;
        if (!validateSecurityAnswer()) formValid = false;
        if (!validateTerms()) formValid = false;


        if (formValid && registrationForm.checkValidity()) {
            console.log("Form is valid. Submitting...");
            $('#successModal').modal('show'); // Show the success modal
            registrationForm.reset(); // Optionally reset the form after submission
        } else {
            registrationForm.classList.add('was-validated');
        }
    };

    // Expose functions globally for inline event handlers
    window.validateUsername = validateUsername;
    window.validateFullName = validateFullName;
    window.validateEmail = validateEmail;
    window.validatePhoneNumber = validatePhoneNumber;
    window.validatePassword = validatePassword;
    window.validateConfirmPassword = validateConfirmPassword;
    window.validateDateOfBirth = validateDateOfBirth;
    window.validateGender = validateGender;
    window.validateAddress = validateAddress;
    window.validateCity = validateCity;
    window.validateState = validateState;
    window.validateZipCode = validateZipCode;
    window.validateCountry = validateCountry;
    window.validateProfilePicture = validateProfilePicture;
    window.validateSecurityQuestion = validateSecurityQuestion;
    window.validateSecurityAnswer = validateSecurityAnswer;
    window.validateTerms = validateTerms;
    window.validateForm = validateForm;
})();
// Function to reset form and close modal
const resetFormAndCloseModal = () => {
    resetForm();
    $('#successModal').modal('hide');
};

// Function to reset form
const resetForm = () => {
    document.getElementById('registrationForm').reset();
    $('#registrationForm').removeClass('was-validated');
};

// Submit form function
const submitForm = () => {
    if (registrationForm.checkValidity()) {
        $('#successModal').modal('show'); // Show the success modal
    } else {
        registrationForm.classList.add('was-validated');
    }
};

// Validate form on submit
const validateForm = (event) => {
    event.preventDefault();
    if (registrationForm.checkValidity()) {
        submitForm();
    } else {
        registrationForm.classList.add('was-validated');
    }
};

// Reset form on modal close
$('#successModal').on('hidden.bs.modal', function () {
    resetForm();
});

// Reset form and close modal on "Submit Another Response" button click
$('#successModal').on('click', '.btn-primary', function () {
    resetFormAndCloseModal();
});

// Event listener for form submission
document.getElementById('registrationForm').addEventListener('submit', validateForm);

