const $headerStore = document.querySelector(".header-store");
const $list = $headerStore.querySelector(".list");
const $menu =  $headerStore.querySelector(".-menu");
console.log($menu);
$menu.addEventListener("click", ()=>{
    $list.classList.toggle("-active");
});