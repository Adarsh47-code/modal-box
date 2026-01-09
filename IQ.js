const Openbtn = document.getElementById("openModal");
const Closebtn = document.getElementById("closeModal");
const overlay = document.getElementById("modalOverlay");

Openbtn.addEventListener("click", () =>{
    overlay.classList.add("active");
});

Closebtn.addEventListener("click", () =>{
    overlay.classList.remove("active");
});

overlay.addEventListener("click", (e) =>{
    if (e.target === overlay) {
        overlay.classList.remove("active");
    }
});
