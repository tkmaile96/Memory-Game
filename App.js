const section = document.querySelector('section');
const timerDisplay = document.createElement('div');
timerDisplay.classList.add('timer');
document.body.insertBefore(timerDisplay, section);

// Timer variables
let timeLeft = 150; // 2 and a half minutes in seconds
let timer;


// Display and start countdown
const startTimer = () => {
    timerDisplay.innerText = `Time Left: ${Math.floor(timeLeft / 60)}:${String(timeLeft % 60).padStart(2, '0')}`;
    timer = setInterval(() => {
        timeLeft--;
        timerDisplay.innerText = `Time Left: ${Math.floor(timeLeft / 60)}:${String(timeLeft % 60).padStart(2, '0')}`;
        if (timeLeft <= 0) {
            clearInterval(timer);
            checkWinStatus();
        }
    }, 1000);
};

// Check if all cards are matched or if time has expired
const checkWinStatus = () => {
    const allCards = document.querySelectorAll('.card');
    const matchedCards = Array.from(allCards).filter(card => card.style.pointerEvents === "none");

    if (matchedCards.length === allCards.length) {
        alert("Congratulations! You won!");
    } else {
        alert("Time's up! You lost!");
    }
    restartGame();
};

// Restart game
const restartGame = () => {
    timeLeft = 120;
    clearInterval(timer);
    section.innerHTML = ''; // Clear the section
    cardGenerator(); // Restart by regenerating cards
    startTimer(); // Restart timer
};

// Generate Data
 const getData = () =>

[
    {name: "itachi", imgSrc: "./NarutoShippuden/Itachi.webp"},
    {name: "Hinata", imgSrc: "./NarutoShippuden/Hinata.avif"},
    {name: "Ino", imgSrc: "./Naruto/Ino.jpg"},
    {name: "kabuto", imgSrc: "./Naruto/kabuto.webp"},
    {name: "Naruto", imgSrc: "./NarutoShippuden/Naruto.webp"},
    {name: "Sarutobi", imgSrc: "./NarutoShippuden/Sarutobi.jpg"},
    {name: "Hokage", imgSrc: "./NarutoShippuden/Hokage.jpeg"},
    {name: "Obito", imgSrc: "./NarutoShippuden/Obito.jpg"},
    {name: "shikamaru", imgSrc: "./Naruto/shikamaru.jpeg"},
    {name: "team7", imgSrc: "./Naruto/team7.jpeg"},
    {name: "itachi", imgSrc: "./NarutoShippuden/Itachi.webp"},
    {name: "Hinata", imgSrc: "./NarutoShippuden/Hinata.avif"},
    {name: "Ino", imgSrc: "./Naruto/Ino.jpg"},
    {name: "kabuto", imgSrc: "./Naruto/kabuto.webp"},
    {name: "Naruto", imgSrc: "./NarutoShippuden/Naruto.webp"},
    {name: "Sarutobi", imgSrc: "./NarutoShippuden/Sarutobi.jpg"},
    {name: "Hokage", imgSrc: "./NarutoShippuden/Hokage.jpeg"},
    {name: "Obito", imgSrc: "./NarutoShippuden/Obito.jpg"},
    {name: "shikamaru", imgSrc: "./Naruto/shikamaru.jpeg"},
    {name: "team7", imgSrc: "./Naruto/team7.jpeg"},
    {name: "Deidara", imgSrc: "./NarutoShippuden/Deidara.jpg"},
    {name: "Hanzo", imgSrc: "./NarutoShippuden/Hanzo.jpg"},
    {name: "Toneri", imgSrc: "./NarutoShippuden/Toneri.png"},
    {name: "Kimimaru", imgSrc: "./NarutoShippuden/Kimimaru.webp"},
    {name: "sasuke", imgSrc: "./NarutoShippuden/sasuke.jpg"},
    {name: "NaruSasu", imgSrc: "./NarutoShippuden/NaruSasu.jpg"},
    {name: "Kaguya", imgSrc: "./NarutoShippuden/Kaguya.avif"},
    {name: "Madara", imgSrc: "./NarutoShippuden/Madara.jpg"},
    {name: "Deidara", imgSrc: "./NarutoShippuden/Deidara.jpg"},
    {name: "Hanzo", imgSrc: "./NarutoShippuden/Hanzo.jpg"},
    {name: "Toneri", imgSrc: "./NarutoShippuden/Toneri.png"},
    {name: "Kimimaru", imgSrc: "./NarutoShippuden/Kimimaru.webp"},
    {name: "sasuke", imgSrc: "./NarutoShippuden/sasuke.jpg"},
    {name: "NaruSasu", imgSrc: "./NarutoShippuden/NaruSasu.jpg"},
    {name: "Kaguya", imgSrc: "./NarutoShippuden/Kaguya.avif"},
    {name: "Madara", imgSrc: "./NarutoShippuden/Madara.jpg"}

];

// Randomise
const randomize = () => {
const cardData = getData();
cardData.sort(() =>Math.random() - 0.5);
return cardData;
};
randomize();
// Card Generator Function
const cardGenerator = () => {
const cardData = randomize();
cardData.forEach((item) => {  
// Generate HTML
    
    const card = document.createElement('div');
    const face = document.createElement('img');
    const back = document.createElement('div');
    card.classList = ('card');
    face.classList = ('face');
    back.classList = ('back');
   
     //Attach info to the card
    face.src = item.imgSrc;
    card.setAttribute('name', item.name);
    // Attach the cards to the section
    section.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);


    card.addEventListener('click', (e) => {
        card.classList.toggle('toggleCard');
        checkCards(e);
        
    })

})

};
//Check Cards
const checkCards = (e)  =>{
    const clickedCard = e.target;
    clickedCard.classList.add("flipped");
    const flippedCards = document.querySelectorAll(".flipped")
    //Game Logic
if (flippedCards.length === 2) {
    if (
        flippedCards[0].getAttribute("name") === 
        flippedCards[1].getAttribute("name")
    ) {
        console.log("match");
        flippedCards.forEach((card) =>{
            card.classList.remove("flipped");
        card.style.pointerEvents = "none"
        })
        
    } else{
        console.log("wrong")
        flippedCards.forEach((card) =>{
            card.classList.remove("flipped");
            setTimeout(() => card.classList.remove("toggleCard"), 1000);
        });
    }
}
};

cardGenerator();
startTimer();