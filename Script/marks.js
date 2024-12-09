document.addEventListener('DOMContentLoaded', function() {
    var cScore = sessionStorage.getItem("c");
    var cppScore = sessionStorage.getItem("cpp");
    var javaScore = sessionStorage.getItem("java");
    var pythonScore = sessionStorage.getItem("python");
    var ts = 0;
    if(cScore !== null) { ts += parseInt(cScore);}
    if(cppScore !== null) { ts += parseInt(cppScore); }
    if(javaScore !== null) { ts += parseInt(javaScore); }
    if(pythonScore !== null) { ts += parseInt(pythonScore); }
    const clang = document.querySelector('.c-score');
    var cl = document.createElement('p');
    cl.textContent = cScore !== null ? cScore + " / " + "5" : "- / 5";
    clang.appendChild(cl);
    const cpplang = document.querySelector('.cpp-score');
    var cppl = document.createElement('p');
    cppl.textContent = cppScore !== null ? cppScore + " / " + "5" : "- / 5";
    cpplang.appendChild(cppl);
    const javalang = document.querySelector('.java-score');
    var javal = document.createElement('p');
    javal.textContent = javaScore !== null ? javaScore + " / " + "5" : "- / 5";
    javalang.appendChild(javal);
    const pythonlang = document.querySelector('.python-score');
    var pythonl = document.createElement('p');
    pythonl.textContent = pythonScore !== null ? pythonScore + " / " + "5" : "- / 5";
    pythonlang.appendChild(pythonl);
    var totalscore = document.querySelector('.total-score');
    const tl = document.createElement('p');
    tl.textContent = ts === 0 ? "- / 5" : ts/5 + " / " + " 5";
    totalscore.appendChild(tl);
    const tscore = document.querySelector('.score');
    const putscore = document.createElement('a');
    putscore.textContent = ts/5;
    tscore.appendChild(putscore);
    sessionStorage.setItem("totalscore",ts/5);
    const style = document.createElement('style');
    style.textContent = `
        #display-score p {
            font-size: large;
        }
    `;
    document.head.appendChild(style);
});