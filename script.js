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
            card.style.display = "block";
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
        card.style.display = "block";
    }
}



//============================ play song show in top js============================ //
function updateCurrentSong(songTitle, artist, album) {
    const currentSongDiv = document.getElementById('currentSong');
    currentSongDiv.innerHTML = `<p>Now Playing: ${songTitle} by ${artist} (${album || 'Unknown Album'})</p>`;
}
