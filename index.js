const ham = document.querySelector(".nav-hamburger");

ham.addEventListener("click", function(){
    let buts = document.querySelectorAll(".nav-button")

    if( buts[0].style.display === "none" ){
        for(let i = 0; i<buts.length; i++){
            buts[i].style.display = "flex";
        }
    }
    else{
        for(let i = 0; i<buts.length; i++){
            buts[i].style.display = "none";
        }
    }
    
});