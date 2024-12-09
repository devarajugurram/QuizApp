document.addEventListener('DOMContentLoaded', function() {
    const data = [{
        "username": "devaraju",
        "password": "Dev@r@ju@1."
    }];
    localStorage.setItem("isLogin","false");

    function checkPassword() {
        var password = document.querySelector('#password').value;
        var confirm_password = document.querySelector('#confirm-password').value;
        if(password !== confirm_password) {
            document.querySelector('.submit').style.display = 'none'; 
            return false;
        }
        else {
            document.querySelector('.submit').style.display = 'flex';
        }
        return true;
    }

    function registerProfile(event) {
        event.preventDefault();  
        var username = document.querySelector('#user').value;
        var password = document.querySelector('#password').value;
        var confirm_password = document.querySelector('#confirm-password').value;
        var flag = false;


        if(password !== confirm_password) {
            window.alert('Passwords do not match!');
            return false;
        }


        for(let i = 0; i < data.length; i++) {
            if(data[i]["username"] === username) {
                flag = true;
            }
        }

        if(!flag) {
            let arr = {"username": username, "password": password};
            data.push(arr); 
            window.alert('Account created successfully!');
            window.location.href = "../login/login.html"; 
        } else {
            window.alert('Account already exists!');
            return false;
        }
    }

    function checkCredentials(event) {
        event.preventDefault(); 

        var username = document.querySelector('#user').value;
        var password = document.querySelector('#password').value;
        var flag = false;

        for(let i = 0; i < data.length; i++) {
            if(data[i]["username"] === username && data[i]["password"] === password) { 
                flag = true;
                localStorage.setItem("isLogin","true");
                sessionStorage.setItem("isLoggin", localStorage.getItem("isLogin"));
                window.location.href = "../Home/home.html"; 
            }
        }

        if(!flag) {
            window.alert('Invalid credentials');
        }
    }

    const registerForm = document.querySelector('#registerForm');
    if(registerForm) {
        registerForm.addEventListener('submit', registerProfile);
    }

    const loginForm = document.querySelector('form');
    if(loginForm) {
        loginForm.addEventListener('submit', checkCredentials);
    }

    const passwordInput = document.querySelector('#password');
    const confirmPasswordInput = document.querySelector('#confirm-password');
    if(passwordInput && confirmPasswordInput) {
        confirmPasswordInput.addEventListener('input', checkPassword);
    }
});
