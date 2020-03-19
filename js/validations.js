
export  const Form = (evt) => {
    evt.preventDefault();
    let emailSpan = document.querySelector('#emailError');
    let nameSpan = document.querySelector('#nameError');
    let bodySpan = document.querySelector('#bodyError');

    let email = window.gform.email.value;
    let name = window.gform.password.value;
    let body = window.gform.password.value;

    // Validate password
    if (validateEmail(email)){
        emailSpan.classList.remove('hideError');
        emailSpan.classList.add('displayError');
        emailSpan.innerHTML = validateEmail(email);
    }else{
        emailSpan.classList.remove('displayError');
        emailSpan.classList.add('hideError');
        emailSpan.innerHTML = validateEmail(email);
    }

    // Validate name
    if (validatePassword(password)){
        nameSpan.classList.remove('hideError');
        nameSpan.classList.add('displayError');
        nameSpan.innerHTML = validateName(password);
    }else{
        passwordSpan.classList.remove('displayError');
        passwordSpan.classList.add('hideError');
        passwordSpan.innerHTML = validatePassword(password);
    }
    
    if (!validateEmail(email) && !validatePassword(password)){
        window.loginForm.reset();

        if(email === 'admin@crest.com'){
            // dummy admin credentials
            window.location.replace('#/accountList');
            localStorage.setItem('email', email);
        }else if(email === 'staff@crest.com'){
            // dummy staff credentials
            window.location.replace('#/accountList');
            localStorage.setItem('email', email);
        }else{
            window.location.replace('#/dashboard');
            localStorage.setItem('email', email);
        }

    }   
}

window.addEventListener('load', () => {
if(location.hash === '#/' || location.hash === ''){
    window.loginForm = document.getElementById('loginForm');
    window.loginForm.addEventListener('submit', LForm);
}
})

window.addEventListener('hashchange', () => {
    if(location.hash === '#/' || location.hash === ''){
        window.loginForm = document.getElementById('loginForm');
        window.loginForm.addEventListener('submit', LForm);
    }
})