const newDialog = document.querySelector("#new-dialog")
const closeDialogButton = document.querySelector("#close-dialog")

function showOtherInput() {
    var genreSelect = document.getElementById("genre");
    var otherGenreInput = document.getElementById("otherGenreInput");

    if (genreSelect.value === "Other") {
        otherGenreInput.style.display = "block";
    } else {
        otherGenreInput.style.display = "none";
    }
}
function openDialog() {
    newDialog.showModal();
  }
document.getElementById("add-movie").addEventListener("click", openDialog);

closeDialogButton.addEventListener("click", () => {
    newDialog.close();
})


