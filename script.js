// ================= music stop js =================== //

document.addEventListener("DOMContentLoaded", function () {
    let audioElements = document.querySelectorAll(".audio_container audio");

    function pauseOtherAudio(currentAudio) {
        audioElements.forEach(function (audio) {
            if (audio !== currentAudio) {
                audio.pause();
            }
        });
    }

    function playNextAudio(currentAudio) {
        let currentIndex = Array.from(audioElements).indexOf(currentAudio);
        let nextIndex = (currentIndex + 1) % audioElements.length;
        let nextAudio = audioElements[nextIndex];
        nextAudio.play();
    }

    audioElements.forEach(function (audio) {
        audio.addEventListener("play", function () {
            pauseOtherAudio(audio);
        });

        audio.addEventListener("ended", function () {
            playNextAudio(audio);
        });
    });
});



// =================================== search js ================================= //
function searchSongs() {
    const searchQuery = document.getElementById("searchInput").value.toLowerCase();

    const songCards = document.getElementsByClassName("card");

    for (let i = 0; i < songCards.length; i++) {
        const songName = songCards[i].getElementsByTagName("p")[0].textContent.toLowerCase();
        const card = songCards[i];

        if (songName.includes(searchQuery)) {
            card.style.display = "flex";
        } else {
            card.style.display = "none";
        }
    }
}

function goBack() {
    document.getElementById("searchInput").value = "";

    const songCards = document.getElementsByClassName("card");

    for (let i = 0; i < songCards.length; i++) {
        const card = songCards[i];
        card.style.display = "flex";
    }
}



// ====================== active song js here ====================== //
const songCards = document.querySelectorAll('.card');
songCards.forEach(card => {
    const audio = card.querySelector('audio');
    audio.addEventListener('play', () => {
        songCards.forEach(card => card.classList.remove('card-active'));
        card.classList.add('card-active');
        const songName = card.querySelector('p').textContent;
        updateCurrentSong(songName);
    });
    audio.addEventListener('ended', () => {
        card.classList.remove('card-active');
    });
});

function updateCurrentSong(songName) {
    const currentSongElement = document.getElementById('currentSong');
    currentSongElement.textContent = songName;
}

function resetCard() {
    const musicCard = document.getElementById('music-card');
    if (musicCard) {
        musicCard.classList.remove('card-active');
    }
}


// =================== part-2 width handling =================== //

const partCard = document.querySelectorAll('.card');
const part2 = document.querySelector('.part-2');

partCard.forEach(card => {
    const audio = card.querySelector('audio');

    audio.addEventListener('play', () => {
        part2.classList.add('part-active');
    });

    audio.addEventListener('ended', () => {
        part2.classList.remove('part-active');
    });
});




// ========================= click on card play button js here ========================= //
const cards = document.querySelectorAll(".playButton");

cards.forEach(card => {
    const audio = card.querySelector("audio");
    card.addEventListener("click", function () {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    });
});


// ================= card number js starts here ================= //

document.addEventListener("DOMContentLoaded", function () {
    var cardNumbers = document.querySelectorAll(".card-number");

    cardNumbers.forEach(function (cardNumber, index) {
        cardNumber.textContent = "SONG-" + (index + 1);
    });
});