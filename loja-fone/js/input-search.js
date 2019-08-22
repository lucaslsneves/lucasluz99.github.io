
const $form = document.querySelector(".input-search");
const $icon = $form.querySelector(".icon");
const $close = $form.querySelector(".icon.-active");

$icon.addEventListener("click",event =>{
    event.preventDefault();
    $form.classList.add("-active");
});

$close.addEventListener("click",event =>{
    event.preventDefault();
    $form.classList.remove("-active");
})