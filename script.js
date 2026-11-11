
let userName = "";
let userTotalScore = 0;
let compTotalScore = 0;
let currentRound = 0;
const maxRounds = 3;


const deck = [
    { name: "6", points: 6 },
    { name: "7", points: 7 },
    { name: "8", points: 8 },
    { name: "9", points: 9 },
    { name: "10", points: 10 },
    { name: "Валет (J)", points: 2 },
    { name: "Дама (Q)", points: 3 },
    { name: "Король (K)", points: 4 },
    { name: "Туз (A)", points: 11 }
];


const userNameElem = document.getElementById("userName");
const userScoreElem = document.getElementById("userScore");
const compScoreElem = document.getElementById("compScore");
const userCardElem = document.getElementById("userCard");
const compCardElem = document.getElementById("compCard");
const generateBtn = document.getElementById("generateBtn");
const roundInfoElem = document.getElementById("roundInfo");
const gameStatusElem = document.getElementById("gameStatus");


window.onload = function() {
    while (!userName || userName.trim() === "") {
        userName = prompt("Введіть ваше ім'я для гри '21':");
        if (userName === null) {
            userName = "User";
            break;
        }
        userName = userName.trim();
    }
    userNameElem.textContent = userName;
    roundInfoElem.textContent = `Спроба ${currentRound} з ${maxRounds}`;
};


generateBtn.onclick = function() {
    if (currentRound >= maxRounds) return;

    currentRound++;
    roundInfoElem.textContent = `Спроба ${currentRound} з ${maxRounds}`;


    const randomUserCard = deck[Math.floor(Math.random() * deck.length)];
    const randomCompCard = deck[Math.floor(Math.random() * deck.length)];

    userCardElem.textContent = randomUserCard.name;
    compCardElem.textContent = randomCompCard.name;


    userTotalScore += randomUserCard.points;
    compTotalScore += randomCompCard.points;


    userScoreElem.textContent = userTotalScore;
    compScoreElem.textContent = compTotalScore;

    gameStatusElem.textContent = `Раунд ${currentRound}: ${userName} отримав ${randomUserCard.name}, Комп'ютер — ${randomCompCard.name}`;


    if (userTotalScore > compTotalScore) {
        userScoreElem.style.backgroundColor = "#00e676"; 
        compScoreElem.style.backgroundColor = "#ff5252"; 
    } else if (compTotalScore > userTotalScore) {
        userScoreElem.style.backgroundColor = "#ff5252";
        compScoreElem.style.backgroundColor = "#00e676";
    } else {
        userScoreElem.style.backgroundColor = "#00b0ff";
        compScoreElem.style.backgroundColor = "#00b0ff";
    }


    if (currentRound === maxRounds) {
        generateBtn.disabled = true;
        
        if (userTotalScore > compTotalScore) {
            gameStatusElem.textContent = `Вітаємо, ${userName}! Ви перемогли за сумою очок (${userTotalScore}:${compTotalScore})!`;
            gameStatusElem.style.color = "#2ecc71";
        } else if (compTotalScore > userTotalScore) {
            gameStatusElem.textContent = `Комп'ютер переміг за сумою очок (${compTotalScore}:${userTotalScore}).`;
            gameStatusElem.style.color = "#e74c3c";
        } else {
            gameStatusElem.textContent = ` Нічия за сумою очок! (${userTotalScore}:${compTotalScore})`;
            gameStatusElem.style.color = "#3498db";
        }
    }
};