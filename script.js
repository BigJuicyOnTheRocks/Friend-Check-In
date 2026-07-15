let currentPage = 1;

const sheetURL = "PASTE_YOUR_URL_HERE";

let currentFeeling = "Okay";

function nextPage(){

    let oldPage = document.querySelector(".page" + currentPage);

    oldPage.style.opacity = "0";

    setTimeout(function(){

        oldPage.style.display = "none";

        currentPage++;

        let newPage = document.querySelector(".page" + currentPage);

        newPage.style.display = "block";
        newPage.style.opacity = "0";

        setTimeout(function(){

            newPage.style.opacity = "1";

        }, 50);

    }, 150);

}
let emotions = document.querySelectorAll(".emotions span");
let slider = document.getElementById("feelingSlider");
let feelingText = document.getElementById("feelingText");
let feelingMessage = 
document.getElementById("feelingMessage");

function updateFeeling() {

    emotions.forEach(function(item){
        item.classList.remove("selected");
    });

    let selectedEmoji = emotions[slider.value - 1];

    selectedEmoji.classList.add("selected");

    currentFeeling = selectedEmoji.dataset.feeling;

    feelingText.innerHTML =
        "I'm Feeling: " + selectedEmoji.dataset.feeling;

    switch(selectedEmoji.dataset.feeling){

    case "Angry":
        feelingMessage.innerHTML =
        "❤️ I'm sorry today has been frustrating. I hope things get better.";
        break;

    case "Irritated":
        feelingMessage.innerHTML =
        "🌸 Even little things can be exhausting. I hope you get a chance to relax.";
        break;

    case "Sad":
        feelingMessage.innerHTML =
        "🫂 Sending you the biggest virtual hug. You're never alone.";
        break;

    case "Sick":
        feelingMessage.innerHTML =
        "🍵 Please take care of yourself today. Rest up and drink some water!";
        break;

    case "Normal":
        feelingMessage.innerHTML =
        "🌼 Nothing wrong with an ordinary day. Sometimes that's exactly what we need.";
        break;

    case "Okay":
        feelingMessage.innerHTML =
        "💛 I'm glad you're doing okay. I hope something wonderful happens today.";
        break;

    case "Excited":
        feelingMessage.innerHTML =
        "✨ I love seeing you excited! I hope whatever you're looking forward to is amazing!";
        break;

    case "Happy":
        feelingMessage.innerHTML =
        "🥰 Seeing you happy makes me smile too. Keep being awesome!";
        break;

}

}

slider.addEventListener("input", updateFeeling);

updateFeeling();

function talkYes(){

    sendCheckIn("Yes");
   
    document.querySelector(".page4").style.display = "none";

    document.querySelector(".page5").style.display = "block";

}

let noClicks = 0;

function moveNoButton() {

    const noButton = document.getElementById("noButton");

    noClicks++;

    if (noClicks < 3) {

        noButton.style.position = "absolute";
        noButton.style.left = (50 + Math.random() * 300) + "px";
        noButton.style.top = (120 + Math.random() * 120) + "px";

    } else {

    document.getElementById("noMessage").innerHTML =
        "😌 Oh okay... but if I was... just kidding! 😆<br><br>Just remember I'm always here if you ever want to talk. 💖";

    noButton.style.opacity = "0";

    let yesButton =
        document.querySelector(".page4 button");

    yesButton.style.opacity = "0";

    setTimeout(function(){

        noButton.style.display = "none";
        yesButton.style.display = "none";

    },1000);

    setTimeout(function(){

        sendCheckIn("No");
        
        talkYes();

    },5800);

}

}

function createHeart(){

    const heart = document.createElement("span");

    heart.innerHTML = "💗";

    heart.classList.add("heart");

    heart.style.left =
    (-4 + Math.random() * 108) + "vw";

    heart.style.animationDuration =
    (3 + Math.random() * 3) + "s";

    document.body.appendChild(heart);

    setTimeout(function(){

        heart.remove();

    },6000);

}

setInterval(createHeart,1800);

function createPetal(){

    const petal = document.createElement("span");

    petal.innerHTML = "🌸";

    petal.classList.add("petal");

    petal.style.left =
    Math.random() * 100 + "vw";

    petal.style.animationDuration =
    (4 + Math.random() * 5) + "s";

    petal.style.fontSize =
    (15 + Math.random() * 20) + "px";

    document.body.appendChild(petal);


    setTimeout(function(){

        petal.remove();

    },9000);

}


setInterval(createPetal,3000);

function showHeart(){

    createHeartCurtain();

}


function createHeartCurtain(){

    for(let i = 0; i < 400; i++){

        let heart = document.createElement("span");

        let hearts = [
            "💖",
            "💕",
            "💗",
            "💞",
            "❤️",
            "💘",
            "🌸"
        ];

        heart.innerHTML =
        hearts[Math.floor(Math.random()*hearts.length)];


        heart.classList.add("curtainHeart");


        heart.style.left =
        (-4 + Math.random() * 108) + "vw";


        heart.style.top =
        "-50px";


        heart.style.animationDelay =
        (Math.random()*3)+"s";


        heart.style.fontSize =
        (20 + Math.random()*35)+"px";


        document.body.appendChild(heart);


        setTimeout(function(){

            heart.remove();

        },8000);

    }

    setTimeout(function(){

    // Fade every heart away
    document.querySelectorAll(".curtainHeart").forEach(function(heart){

        heart.style.transition = "opacity 2s ease";
        heart.style.opacity = "0";

    });

    startEndingReveal();

    },3500);

}

function startEndingReveal(){

    let ending = document.getElementById("endingPage");
    let finalCard = document.querySelector(".finalCard");

    ending.style.display = "flex";

    setTimeout(function(){

        ending.style.opacity = "1";

        finalCard.style.transform = "translateY(0)";
        finalCard.style.opacity = "1";

    },200);


    let love = document.getElementById("loveLine");
    let sig = document.getElementById("signature");


    setTimeout(function(){

        love.innerHTML = "I Love You!";
        love.style.opacity = "1";

    },2200);


    setTimeout(function(){

        sig.innerHTML = "Much Love,<br>Ashtray 🌸";
        sig.style.opacity = "1";

    },3300);

    setTimeout(function(){

        finalCard.style.animation=
            "floatCard 4s ease-in-out infinite";
        
    },2200);
}

function openCard(){

    const cover = document.getElementById("cover");
    const flap = document.querySelector(".flap");
    const envelope = document.querySelector(".envelope");

    flap.style.transform = "rotateX(180deg)";

    setTimeout(function(){

        envelope.style.transform =
        "translateY(-40px)";

    },350);

    setTimeout(function(){

        cover.style.opacity="0";

    },800);

    setTimeout(function(){

        cover.style.display="none";

    },1400);

}

function restartPage(){

    location.reload();
}

function sendCheckIn(talkAnswer){

    fetch(sheetURL, {

        method:"POST",

        body: JSON.stringify({

            feeling: currentFeeling,

            talk: talkAnswer

        })

    });

}
