document.addEventListener('DOMContentLoaded', function () {
    const id = sessionStorage.getItem("language");
    let itemid;
    switch (id) {
        case "1": itemid = "c"; break;
        case "2": itemid = "cpp"; break;
        case "3": itemid = "java"; break;
        case "4": itemid = "python"; break;
        default: console.log("Something went wrong");
    }

    const data = JSON.parse(sessionStorage.getItem("dataStore"));
    const array = [];
    while (array.length < 5) {
        const randomNumber = Math.floor(Math.random() * 10);
        if (!array.includes(randomNumber)) { 
            array.push(randomNumber);
        }
    }
    let idx = 0;

    const selectedAnswers = Array(5).fill(null);

    const que = document.querySelector('.question');
    const choices = document.querySelector('.choices');
    const title = document.createElement('h3');
    que.appendChild(title);

    function updateQuestion() {
        title.textContent = "Q" + (idx + 1) + "  " + data[itemid][array[idx]]["question"];
        renderOptions();

        document.querySelector('.prev-choice').style.display = idx === 0 ? 'none' : 'block';
        const nextButton = document.querySelector('.next-choice');
        nextButton.value = idx === 4 ? 'Submit' : 'Next';
    }
    function numberOfQuestionsAttempted() {
        let count = 0;
        for(let i=0;i<selectedAnswers.length;i++) {
            if(selectedAnswers[i] === null) count++;
        }
        return count;
    }
    function renderOptions() {
        choices.innerHTML = '';
        for (let i = 1; i <= 4; i++) {
            const label = document.createElement('label');
            const radio = document.createElement('input');

            radio.id = "opt" + i;
            radio.type = "radio";
            radio.name = "question" + (idx + 1);
            radio.value = data[itemid][array[idx]][i];

            label.htmlFor = radio.id;
            label.classList.add('option-label');
            label.appendChild(radio);
            label.append(" " + data[itemid][array[idx]][i]);
            label.style.paddingLeft = "40px";
            radio.style.visibility = "hidden";
            if (selectedAnswers[idx] === radio.value) {
                radio.checked = true;
                label.style.border = '2px solid green';
            }


            label.addEventListener('click', function () {
                document.querySelectorAll('.option-label').forEach(lbl => lbl.style.border = 'none');
                label.style.border = '2px solid green';

                selectedAnswers[idx] = radio.value;
            });

            choices.appendChild(label);
        }
    }

    const style = document.createElement('style');
    style.textContent = `
        .option-label {
            padding-left: 20px;
            display: block;
            padding: 10px;
            margin: 10px 0;
            border-radius: 5px;
            cursor: pointer;
            border: 1px solid transparent;
            transition: border-color 0.3s ease;
        }
        .option-label:hover {
            background-color: #101F10;
        }
    `;
    document.head.appendChild(style);

    function increase() {
        if (idx < 4) {
            idx++;
            updateQuestion();
        }else {
            const value = numberOfQuestionsAttempted();
            if (value > 0) {
                document.querySelector('.confirmation').style.display = "flex";
                document.querySelector('.question-area').style.filter = "blur(2px)";
                document.querySelector('.prev-next').style.filter = "blur(2px)";
            } else {
                const result = getCalulatedScore();
                sessionStorage.setItem(itemid,JSON.stringify(result))
                window.location.href = "../Result/result.html";
            }
        }
    }

    function getCalulatedScore() {
        var score = 0;
        for(let i=0;i<selectedAnswers.length;i++) {
            if(selectedAnswers[i] == data[itemid][array[i]][data[itemid][array[i]]["answer"]]) score++;
        }
        return score;
    }

    function negate() {
        if (idx > 0) {
            idx--;
            updateQuestion();
        }
    }

    document.querySelector('.prev').addEventListener('click', negate);
    document.querySelector('.next').addEventListener('click', increase);

    updateQuestion(); 
});
