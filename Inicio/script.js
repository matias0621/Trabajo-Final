const back = document.getElementById("back");
const next = document.getElementById("next");

const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const img4 = document.getElementById("img4");
const img5 = document.getElementById("img5");

const parrafo1 = document.getElementById("parrafo1");
const parrafo2 = document.getElementById("parrafo2");
const parrafo3 = document.getElementById("parrafo3");

let mover = 0;

let img = 1;

back.addEventListener("click", () =>{
    let windowWidth = window.innerWidth;
    if (img > 1){
        img--;
    }
    else{
        img = 5;
    }
    if (windowWidth > 999){
        cambiarImagenMedia1000()
    }
    else if(windowWidth > 799){
        cambiarImagenMedia800()
    }
    else if(windowWidth < 799){
        cambiarImagenMedia700()
    }
})
next.addEventListener("click", () =>{
    let windowWidth = window.innerWidth;
    if (img < 5){
        img++;
    }
    else{
        img = 1;
    }
    if (windowWidth > 999){
        cambiarImagenMedia1000()
    }
    else if(windowWidth > 799){
        cambiarImagenMedia800()
    }
    else if(windowWidth < 799){
        cambiarImagenMedia700()
    }
})
function cambiarImagenMedia1000() {
    switch (img){
        case 1:
            img1.style.transform = "translateX(0)";
            img2.style.transform = "translateX(0)";
            img3.style.transform = "translateX(0)";
            img4.style.transform = "translateX(0)";
            img5.style.transform = "translateX(0)";

            img1.classList.add("border")
            img2.classList.remove("border")
            img3.classList.remove("border")
            img4.classList.remove("border")
            img5.classList.remove("border")
        break;
        case 2:
            img1.style.transform = "translateX(0)";
            img2.style.transform = "translateX(0)";
            img3.style.transform = "translateX(0)";
            img4.style.transform = "translateX(0)";
            img5.style.transform = "translateX(0)";
            
            img2.classList.add("border")
            img1.classList.remove("border")
            img3.classList.remove("border")
            img4.classList.remove("border")
            img5.classList.remove("border")
        break;
        case 3:
            img1.style.transform = "translateX(-13.5rem)";
            img2.style.transform = "translateX(-13.5rem)";
            img3.style.transform = "translateX(-13.5rem)";
            img4.style.transform = "translateX(-13.5rem)";
            img5.style.transform = "translateX(-13.5rem)";
            
            img3.classList.add("border")
            img1.classList.remove("border")
            img2.classList.remove("border")
            img4.classList.remove("border")
            img5.classList.remove("border")
            mover = 1;
            
        break;
        case 4:
            img4.classList.add("border")
            img1.classList.remove("border")
            img2.classList.remove("border")
            img3.classList.remove("border")
            img5.classList.remove("border")    

            img1.style.transform = "translateX(-27rem)";
            img2.style.transform = "translateX(-27rem)";
            img3.style.transform = "translateX(-27rem)";
            img4.style.transform = "translateX(-27rem)";
            img5.style.transform = "translateX(-27rem)";

        break;
        case 5: 
            img1.style.transform = "translateX(-27rem)";
            img2.style.transform = "translateX(-27rem)";
            img3.style.transform = "translateX(-27rem)";
            img4.style.transform = "translateX(-27rem)";
            img5.style.transform = "translateX(-27rem)";

            img5.classList.add("border")
            img1.classList.remove("border")
            img2.classList.remove("border")
            img3.classList.remove("border")
            img4.classList.remove("border")
        break;
    }
}

function cambiarImagenMedia800() {
    switch (img){
        case 1:
            img1.style.transform = "translateX(0)";
            img2.style.transform = "translateX(0)";
            img3.style.transform = "translateX(0)";
            img4.style.transform = "translateX(0)";
            img5.style.transform = "translateX(0)";

            img1.classList.add("border")
            img2.classList.remove("border")
            img3.classList.remove("border")
            img4.classList.remove("border")
            img5.classList.remove("border")
        break;
        case 2:
            img1.style.transform = "translateX(-13.5rem)";
            img2.style.transform = "translateX(-13.5rem)";
            img3.style.transform = "translateX(-13.5rem)";
            img4.style.transform = "translateX(-13.5rem)";
            img5.style.transform = "translateX(-13.5rem)";
            
            img2.classList.add("border")
            img1.classList.remove("border")
            img3.classList.remove("border")
            img4.classList.remove("border")
            img5.classList.remove("border")
        break;
        case 3:
            img1.style.transform = "translateX(-27rem)";
            img2.style.transform = "translateX(-27rem)";
            img3.style.transform = "translateX(-27rem)";
            img4.style.transform = "translateX(-27rem)";
            img5.style.transform = "translateX(-27rem)";
            
            img3.classList.add("border")
            img1.classList.remove("border")
            img2.classList.remove("border")
            img4.classList.remove("border")
            img5.classList.remove("border")
        break;
        case 4:
            img1.style.transform = "translateX(-40.5rem)";
            img2.style.transform = "translateX(-40.5rem)";
            img3.style.transform = "translateX(-40.5rem)";
            img4.style.transform = "translateX(-40.5rem)";
            img5.style.transform = "translateX(-40.5rem)";
            
            img4.classList.add("border")
            img1.classList.remove("border")
            img2.classList.remove("border")
            img3.classList.remove("border")
            img5.classList.remove("border")
        break;
        case 5:
            img1.style.transform = "translateX(-40.5rem)";
            img2.style.transform = "translateX(-40.5rem)";
            img3.style.transform = "translateX(-40.5rem)";
            img4.style.transform = "translateX(-40.5rem)";
            img5.style.transform = "translateX(-40.5rem)";
            
            img5.classList.add("border")
            img1.classList.remove("border")
            img2.classList.remove("border")
            img3.classList.remove("border")
            img4.classList.remove("border")
        break;
    }
}

function cambiarImagenMedia700() {
    switch (img){
        case 1:
            img1.style.transform = "translateX(0)";
            img2.style.transform = "translateX(0)";
            img3.style.transform = "translateX(0)";
            img4.style.transform = "translateX(0)";
            img5.style.transform = "translateX(0)";

            img1.classList.add("border")
            img2.classList.remove("border")
            img3.classList.remove("border")
            img4.classList.remove("border")
            img5.classList.remove("border")
        break;
        case 2:
            img1.style.transform = "translateX(-13.5rem)";
            img2.style.transform = "translateX(-13.5rem)";
            img3.style.transform = "translateX(-13.5rem)";
            img4.style.transform = "translateX(-13.5rem)";
            img5.style.transform = "translateX(-13.5rem)";
            
            img2.classList.add("border")
            img1.classList.remove("border")
            img3.classList.remove("border")
            img4.classList.remove("border")
            img5.classList.remove("border")
        break;
        case 3:
            img1.style.transform = "translateX(-27rem)";
            img2.style.transform = "translateX(-27rem)";
            img3.style.transform = "translateX(-27rem)";
            img4.style.transform = "translateX(-27rem)";
            img5.style.transform = "translateX(-27rem)";
            
            img3.classList.add("border")
            img1.classList.remove("border")
            img2.classList.remove("border")
            img4.classList.remove("border")
            img5.classList.remove("border")
        break;
        case 4:
            img1.style.transform = "translateX(-40.5rem)";
            img2.style.transform = "translateX(-40.5rem)";
            img3.style.transform = "translateX(-40.5rem)";
            img4.style.transform = "translateX(-40.5rem)";
            img5.style.transform = "translateX(-40.5rem)";
            
            img4.classList.add("border")
            img1.classList.remove("border")
            img2.classList.remove("border")
            img3.classList.remove("border")
            img5.classList.remove("border")
        break;
        case 5:
            img1.style.transform = "translateX(-54rem)";
            img2.style.transform = "translateX(-54rem)";
            img3.style.transform = "translateX(-54rem)";
            img4.style.transform = "translateX(-54rem)";
            img5.style.transform = "translateX(-54rem)";

            img5.classList.add("border")
            img1.classList.remove("border")
            img2.classList.remove("border")
            img3.classList.remove("border")
            img4.classList.remove("border")
        break;
    }
}

cambiarImagenMedia1000()