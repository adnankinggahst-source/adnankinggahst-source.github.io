console.log("GtaBestMods Loaded");
const searchBox = document.getElementById("search");

if (searchBox) {
    searchBox.addEventListener("input", function () {
        console.log("Search:", this.value);
    });
}
