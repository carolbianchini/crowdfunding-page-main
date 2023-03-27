const imagebtn = document.querySelector(".change-color")
const bookmark = document.querySelector(".bookmark-btn")

bookmark.addEventListener("mouseover", () => {
    imagebtn.style.filter = "none"
})

bookmark.addEventListener("mouseout", () => {
    imagebtn.style.filter = "invert(37%) sepia(37%) saturate(864%) hue-rotate(127deg) brightness(96%) contrast(91%)"
})
