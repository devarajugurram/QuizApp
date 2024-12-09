document.addEventListener('DOMContentLoaded', function() {
    const Loggin = sessionStorage.getItem("isLoggin");
    const helpElements = document.getElementsByClassName('help');
    const inl = document.getElementsByClassName('in');
    const out = document.querySelector('.out button'); 
    const hiddenpart = document.querySelector('.confirmation');
    const blurpart = document.querySelector('.options-quiz');

    if (out) {
        out.addEventListener('click', function() { rerender(); });
    }

    if (Loggin === "false" || Loggin === null) {
        for (let i = 0; i < helpElements.length; i++) helpElements[i].style.display = "none"; 
        inl[0].style.display = "block";
        out.style.display = "none";  
    } else {
        for (let i = 0; i < helpElements.length; i++) helpElements[i].style.display = "flex";
        inl[0].style.display = "none"; 
        out.style.display = "block"; 
    }

    function rerender() {
        localStorage.clear();
        sessionStorage.clear();
        window.location.href = '../Home/home.html'; 
    }

    if (Loggin === "true") {
        var c = document.querySelector('.c');
        var cpp = document.querySelector('.cpp');
        var java = document.querySelector('.java');
        var python = document.querySelector('.python');

        c.addEventListener('click', function() { runfunction(1) });
        cpp.addEventListener('click', function() { runfunction(2) });
        java.addEventListener('click', function() { runfunction(3) });
        python.addEventListener('click', function() { runfunction(4) });
    }

    function runfunction(para) {
        sessionStorage.setItem('language', para);
        blurpart.style.filter = "blur(2px)";
        hiddenpart.style.display = "flex";
    }
    const yesButton = document.querySelector('#yesButton');
    if (yesButton) {
        yesButton.addEventListener('click', checkAndRedirect);
    }

    const noButton = document.querySelector('#noButton');
    if (noButton) {
        noButton.addEventListener('click', keepAndRedirect);
    }

    function checkAndRedirect() {
        hiddenpart.style.display = "none";
        blurpart.style.filter = "blur(0px)";
        window.location.href = "../Test/test.html";
    }

    function keepAndRedirect() {
        hiddenpart.style.display = "none";
        blurpart.style.filter = "blur(0px)";
        window.location.href = "../Home/home.html";
    }

});
