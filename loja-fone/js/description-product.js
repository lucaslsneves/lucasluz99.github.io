/* 

ter a janela (browser)
entrar no html
pegar o coração
Pegar o clique no coração
no momento em que o usuario clicar,mostar msg

*/

const $stars = document.querySelectorAll(".star");
const $heart = window.document.querySelector(".heart");

$heart.addEventListener("click",handleClickHeart);

$stars.forEach(function($star,index){
    $star.addEventListener("click",function(){
        handleClickStar(index);
    });
});

function handleClickStar(index){
    $stars.forEach(function($star,j){
        if(j<=index){
            $star.classList.add("-active");
        }else{
            $star.classList.remove("-active");
        }
        
    });
}


function handleClickHeart(){
    this.classList.toggle("-active");
}




