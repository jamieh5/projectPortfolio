const press = document.querySelector(".onpress");

press.addEventListener("click", function() {
    const element = document.querySelector(".img-hidden");
    element.classList.remove("img-hidden");
});