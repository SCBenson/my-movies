function showOtherInput() {
    var genreSelect = document.getElementById("genre");
    var otherGenreInput = document.getElementById("otherGenreInput");

    if (genreSelect.value === "Other") {
        otherGenreInput.style.display = "block";
    } else {
        otherGenreInput.style.display = "none";
    }
}