// =========================
// FatalTy - Script
// =========================


// Clock
console.log("JS funcionando");
function updateClock(){

    const clock = document.getElementById("clock");

    if(clock){

        const now = new Date();

        let hours = now.getHours().toString().padStart(2,"0");
        let minutes = now.getMinutes().toString().padStart(2,"0");
        let seconds = now.getSeconds().toString().padStart(2,"0");


        clock.innerHTML = `${hours}:${minutes}:${seconds}`;

    }

}


setInterval(updateClock,1000);

updateClock();



// Loading Screen

window.addEventListener("load",()=>{


    const loading = document.getElementById("loading-screen");


    if(loading){

        setTimeout(()=>{

            loading.style.opacity="0";


            setTimeout(()=>{

                loading.style.display="none";


            },600);


        },4200);


    }


});



// Random visitor number

const visitor = document.getElementById("visitor-count");


if(visitor){

    let number = Math.floor(Math.random()*99999);

    visitor.innerHTML = number.toString().padStart(6,"0");

}



// Image glitch effect

const image = document.querySelector(".hero img");


if(image){


    setInterval(()=>{


        image.style.filter = 
        "grayscale(100%) contrast(120%)";


        setTimeout(()=>{


            image.style.filter =
            "grayscale(100%) contrast(120%)";


        },100);


    },5000);


}



// Console message

console.log(
`
==========================
 FatalTy website
 webcore online
==========================
`
);
/* ========================= */
/* Extra Webcore Effects     */
/* ========================= */


// Custom cursor

const cursor = document.createElement("div");

cursor.className = "custom-cursor";

document.body.appendChild(cursor);


document.addEventListener("mousemove", (e)=>{

    cursor.style.left = e.clientX + "px";

    cursor.style.top = e.clientY + "px";

});



// Cursor click effect

document.addEventListener("click",()=>{


    cursor.classList.add("click");


    setTimeout(()=>{

        cursor.classList.remove("click");

    },200);


});
// =========================
// FatalTy Glitch Effect
// =========================

const title = document.querySelector(".hero-text h1");

if (title) {
    const originalText = title.textContent;

    const symbols = ["#", "@", "%", "&", "?", "0", "1"];

    function glitchTitle() {
        const glitchedText = originalText
            .split("")
            .map((character) => {
                if (character === " ") {
                    return character;
                }

                return Math.random() > 0.65
                    ? symbols[Math.floor(Math.random() * symbols.length)]
                    : character;
            })
            .join("");

        title.textContent = glitchedText;

        setTimeout(() => {
            title.textContent = originalText;
        }, 120);
    }

    setInterval(() => {
        if (Math.random() > 0.55) {
            glitchTitle();
        }
    }, 2500);
}






if(title){


    const original = title.innerText;


    setInterval(()=>{


        if(Math.random() > 0.7){


            title.innerText =
            original
            .split("")
            .map(char =>
                Math.random() > 0.8 ? "#" : char
            )
            .join("");


            setTimeout(()=>{

                title.innerText = original;

            },150);


        }


    },3000);


}




// Add floating particles

function createParticle(){


    const particle = document.createElement("span");


    particle.className="particle";


    particle.style.left =
    Math.random()*100 + "vw";


    particle.style.animationDuration =
    (Math.random()*5+5)+"s";


    document.body.appendChild(particle);



    setTimeout(()=>{

        particle.remove();

    },10000);


}


setInterval(createParticle,500);
// =========================
// Cursor Trail
// =========================

document.addEventListener("mousemove", (event) => {
    const trail = document.createElement("span");

    trail.className = "cursor-trail";
    trail.style.left = `${event.clientX}px`;
    trail.style.top = `${event.clientY}px`;

    document.body.appendChild(trail);

    setTimeout(() => {
        trail.remove();
    }, 600);
});
// =========================
// Boot Text Effect
// =========================

const bootText = document.getElementById("boot-text");

if (bootText) {
    const messages = [
        "initializing FatalTy.exe...",
        "loading memories...",
        "connecting to nowhere...",
        "access granted."
    ];

    let messageIndex = 0;

    function showBootMessage() {
        if (messageIndex >= messages.length) {
            return;
        }

        bootText.textContent = messages[messageIndex];
        messageIndex++;

        setTimeout(showBootMessage, 900);
    }

    showBootMessage();
}
// =========================
// Tab Title Effect
// =========================

const originalTitle = document.title;

let tabTimer;

document.addEventListener("visibilitychange", () => {

    clearTimeout(tabTimer);

    if (document.hidden) {

        document.title = "where did you go?";

        tabTimer = setTimeout(() => {
            document.title = "come back...";
        }, 3000);

    } else {

        document.title = "welcome back.";

        tabTimer = setTimeout(() => {
            document.title = originalTitle;
        }, 1500);

    }

});
// =========================
// Rain Effect
// =========================

function createRain(){

    const rain = document.createElement("span");

    rain.className = "rain";

    rain.style.left = Math.random() * window.innerWidth + "px";

    rain.style.animationDuration =
        (Math.random() * 0.8 + 0.5) + "s";

    rain.style.opacity =
        Math.random() * 0.4 + 0.2;

    document.body.appendChild(rain);

    setTimeout(() => {

        rain.remove();

    },1500);

}

setInterval(createRain,30);
// =========================
// About Window
// =========================

const aboutFile = document.getElementById("about-file");
const aboutWindow = document.getElementById("about-window");
const closeAbout = document.getElementById("close-about");

if (aboutFile && aboutWindow && closeAbout) {
    aboutFile.addEventListener("click", () => {
        aboutWindow.classList.remove("hidden");
    });

    closeAbout.addEventListener("click", () => {
        aboutWindow.classList.add("hidden");
    });
}