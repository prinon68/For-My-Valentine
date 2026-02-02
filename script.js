const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".yes-btn");
const catImg = document.getElementById("letter-cat");
const title = document.getElementById("letter-title");
const buttons = document.getElementById("letter-buttons");
const finalTextWrapper = document.getElementById("final-text-wrapper");
const heartFiller = document.getElementById("heart-filler");

let yesScale = 1;

envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";
});

noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * 300 - 150;
    const y = Math.random() * 300 - 150;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;

    yesScale += 0.25;
    yesBtn.style.transform = `scale(${yesScale})`;
});

yesBtn.addEventListener("click", () => {
    // 1. Clean the UI
    document.body.classList.add("success-mode");
    document.getElementById("window-frame").classList.add("final");

    // 2. Set Success content
    title.textContent = "Huzzah! My Heart is Yours!";
    catImg.src = "kisses.gif";
    catImg.classList.add("kisses-big");
    
    // 3. Show hidden white text box
    buttons.style.display = "none";
    finalTextWrapper.style.display = "block";

    startHearts();
});

function startHearts() {
    setInterval(() => {
        const heart = document.createElement("div");
        heart.innerHTML = "❤";
        heart.classList.add("floating-heart");
        heart.style.left = Math.random() * 100 + "vw";
        heartFiller.appendChild(heart);
        setTimeout(() => heart.remove(), 5000);
    }, 250);
}