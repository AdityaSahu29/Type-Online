const setofPara = [
    "Achieving mindfulness involves a gradual process of training, but with a bit of practice we can learn to focus our mind completely, which reduces stress and helps us live longer.",
    "Whether or not the threats we perceive are real, stress is an easily identifiable condition that not only causes anxiety but is also highly psychosomatic, affecting everything from our digestive system to our skin.",
    "One way to reach a state of mindfulness is through meditation, which helps filter the information that reaches us from the outside world."
];

const msg = document.getElementById('msg');
const typeArea = document.getElementById('typeArea');
const btn = document.getElementById('btn');
const timer = document.getElementById('timer');
let startTime, endTime;
let conut = 0;
if (btn.innerText == "Start") {
    typeArea.disabled = true;
}

function playgame() {
    let randomNumber = Math.floor(Math.random() * setofPara.length);
    msg.innerText = setofPara[randomNumber];
    let date = new Date();
    startTime = date.getTime();
    btn.innerText = "Done";
    // startTimer();
}

function endGame() {
    let date = new Date();
    endTime = date.getTime();
    let totalTime = ((endTime - startTime) / 1000);

    let totalStr = typeArea.value;
    let wordCount = wordCounter(totalStr);

    let speed = Math.round((wordCount / totalTime) * 60);

    let finalMsg = "You typed total " + wordCount + " words at " + speed + "WPM";
    finalMsg += compareWord(msg.innerText, totalStr);
    msg.innerText = finalMsg;

    typeArea.value = " ";
    // clearInterval(myInterval);
    // timer.innerText = Count;

}
function compareWord(str1, str2) {
    let word1 = str1.split(" ");
    let word2 = str2.split(" ");
    let cnt = 0;

    word1.forEach(function (item, index) {
        if (item == word2[index]) {
            cnt++;
        }
    })

    let errorCount = (word1.length - cnt);
    errornum = errorCount;
    return (" and " + cnt + " are correct out of " + word1.length + " and number of mistakes are " + errorCount);
}

function wordCounter(str) {
    let response = str.split(" ").length;
    return response;
}

// function startTimer() {
//     timer.innerText = 0;
//     startTime = new Date();
//     let myInterval = setInterval(() => {
//         count++;
//         timer.innerText = count;
//     }, 1000)
// }

// function getTimerTime() {
//     return Math.floor((new Date() - startTime) / 1000);
// }
btn.addEventListener('click', function () {
    if (this.innerText == "Start") {
        typeArea.disabled = false;
        playgame();
    } else if (this.innerText == "Done") {
        typeArea.disabled = false;
        btn.innerText = "Start";
        endGame();
    }
});