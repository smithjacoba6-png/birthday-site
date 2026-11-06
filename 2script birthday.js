const music = document.getElementById("bgMusic");

let musicStarted = false;

function startJourney() {

    // Start the music on the first button click
    if (!musicStarted) {
        music.volume = 0.5;

        music.play()
            .then(() => {
                musicStarted = true;
            })
            .catch(() => {
                alert("Please tap START again to play the music.");
            });
    }

    nextPage(2);
}

// CHANGE PAGES
function nextPage(pageNumber) {

    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    const next = document.getElementById("page" + pageNumber);

    next.classList.add("active");
}

// OPEN LETTER
function openLetter() {

    const letter = document.getElementById("letter");

    if (letter.style.display === "block") {
        letter.style.display = "none";
    } else {
        letter.style.display = "block";
    }
}

// OPEN GIFT
function openGift() {

    const message = document.getElementById("giftMessage");
    const hint = document.getElementById("giftHint");

    if (message.style.display === "block") {
        message.style.display = "none";
        hint.innerHTML = "CLICK THE GIFT TO OPEN IT";
    } else {
        message.style.display = "block";
        hint.innerHTML = "YOUR SPECIAL SURPRISE ❤️";
    }
}

// REPLAY
function replay() {

    nextPage(1);

    // Music keeps playing; it does not restart.
}