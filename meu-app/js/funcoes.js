//alert("viva jesus!");

/*  ocultar/mostrar o menu    */
document.getElementById("menu").addEventListener("click", openMenu);
function openMenu(){
    if(document.getElementsByClassName("nav-bar")[0].style.display=='flex'){
        document.getElementsByClassName("nav-bar")[0].style.display='none';
    }else{
        document.getElementsByClassName("nav-bar")[0].style.display='flex';
    }
}

document.querySelector("p.botao-ver-mais").addEventListener("click", expandeCards);
function expandeCards(){
    if(document.querySelector(".card-op").style.height=='50vh'){
        document.querySelector(".card-op").style.height='20vh';
        document.querySelector("div>p.detalhes").style.display='none';
    }else{
        document.querySelector(".card-op").style.height='50vh';
        document.querySelector("div>p.detalhes").style.display='block';
    }
}