


// ================= music stop js =================== //

// Wait for the page to load
document.addEventListener("DOMContentLoaded", function () {
    // Get all the audio elements
    let audioElements = document.querySelectorAll(".audio_container audio");

    // Pause all audio elements except the one being played
    function pauseOtherAudio(currentAudio) {
        audioElements.forEach(function (audio) {
            if (audio !== currentAudio) {
                audio.pause();
            }
        });
    }

    // Play the next audio element when the current one ends
    function playNextAudio(currentAudio) {
        let currentIndex = Array.from(audioElements).indexOf(currentAudio);
        let nextIndex = (currentIndex + 1) % audioElements.length;
        let nextAudio = audioElements[nextIndex];
        nextAudio.play();
    }

    // Add event listeners to each audio element
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
// Function to handle the search functionality
function searchSongs() {
    // Get the input value from the search field
    const searchQuery = document.getElementById("searchInput").value.toLowerCase();

    // Get all the cards containing the songs
    const songCards = document.getElementsByClassName("card");

    // Loop through the song cards and check if the search query is present in the song name
    for (let i = 0; i < songCards.length; i++) {
        const songName = songCards[i].getElementsByTagName("p")[0].textContent.toLowerCase();
        const card = songCards[i];

        // If the search query is found in the song name, display the card; otherwise, hide it
        if (songName.includes(searchQuery)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    }
}

// Function to go back to the original list of songs
function goBack() {
    // Reset the search input value
    document.getElementById("searchInput").value = "";

    // Get all the cards containing the songs
    const songCards = document.getElementsByClassName("card");

    // Loop through the song cards and display them
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
