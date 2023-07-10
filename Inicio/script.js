const back = document.getElementById("back");
const next = document.getElementById("next");

const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const img4 = document.getElementById("img4");
const img5 = document.getElementById("img5");
const img6 = document.getElementById("img6");

const parrafo1 = document.getElementById("parrafo1");
const parrafo2 = document.getElementById("parrafo2");
const parrafo3 = document.getElementById("parrafo3");
const parrafo4 = document.getElementById("parrafo4");
const parrafo5 = document.getElementById("parrafo5");
const parrafo6 = document.getElementById("parrafo6");

const burger = document.getElementById("menu-button");
const navbar = document.getElementById("navbar");
const closeMenu = document.getElementById("close-menu");

let img = 1;

burger.addEventListener("click", () => {
    navbar.style.transform = "translateX(0%)"
})
  
closeMenu.addEventListener("click", () => {
    navbar.style.transform = "translateX(-100%)"
})

back.addEventListener("click", () =>{
    let windowWidth = window.innerWidth;
    if (img > 1){
        img--;
    }
    else{
        img = 6;
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
    if (img < 6){
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
            img6.style.transform = "translateX(0)";

            img1.classList.add("border")
            img2.classList.remove("border")
            img3.classList.remove("border")
            img4.classList.remove("border")
            img5.classList.remove("border")
            img6.classList.remove("border")

            parrafo1.style.display = "block";
            parrafo2.style.display = "none";
            parrafo3.style.display = "none";
            parrafo4.style.display = "none";
            parrafo5.style.display = "none";
            parrafo6.style.display = "none";
            break;
        case 2:
            img1.style.transform = "translateX(0)";
            img2.style.transform = "translateX(0)";
            img3.style.transform = "translateX(0)";
            img4.style.transform = "translateX(0)";
            img5.style.transform = "translateX(0)";
            img6.style.transform = "translateX(0)";
            
            img2.classList.add("border")
            img1.classList.remove("border")
            img3.classList.remove("border")
            img4.classList.remove("border")
            img5.classList.remove("border")
            img6.classList.remove("border")

            parrafo2.style.display = "block";
            parrafo1.style.display = "none";
            parrafo3.style.display = "none";
            parrafo4.style.display = "none";
            parrafo5.style.display = "none";
            parrafo6.style.display = "none";
        break;
        case 3:
            img1.style.transform = "translateX(-13.5rem)";
            img2.style.transform = "translateX(-13.5rem)";
            img3.style.transform = "translateX(-13.5rem)";
            img4.style.transform = "translateX(-13.5rem)";
            img5.style.transform = "translateX(-13.5rem)";
            img6.style.transform = "translateX(-13.5rem)";

            img3.classList.add("border")
            img1.classList.remove("border")
            img2.classList.remove("border")
            img4.classList.remove("border")
            img5.classList.remove("border")
            img6.classList.remove("border") 
            
            parrafo3.style.display = "block";
            parrafo2.style.display = "none";
            parrafo1.style.display = "none";
            parrafo4.style.display = "none";
            parrafo5.style.display = "none";
            parrafo6.style.display = "none";
        break;
        case 4:
            img1.style.transform = "translateX(-27rem)";
            img2.style.transform = "translateX(-27rem)";
            img3.style.transform = "translateX(-27rem)";
            img4.style.transform = "translateX(-27rem)";
            img5.style.transform = "translateX(-27rem)";
            img6.style.transform = "translateX(-27rem)";

            img4.classList.add("border")
            img1.classList.remove("border")
            img2.classList.remove("border")
            img3.classList.remove("border")
            img5.classList.remove("border")   
            img6.classList.remove("border") 

            parrafo4.style.display = "block";
            parrafo2.style.display = "none";
            parrafo3.style.display = "none";
            parrafo1.style.display = "none";
            parrafo5.style.display = "none";
            parrafo6.style.display = "none";
        break;
        case 5: 
            img1.style.transform = "translateX(-40.5rem)";
            img2.style.transform = "translateX(-40.5rem)";
            img3.style.transform = "translateX(-40.5rem)";
            img4.style.transform = "translateX(-40.5rem)";
            img5.style.transform = "translateX(-40.5rem)";
            img6.style.transform = "translateX(-40.5rem)";

            img5.classList.add("border")
            img1.classList.remove("border")
            img2.classList.remove("border")
            img3.classList.remove("border")
            img4.classList.remove("border")
            img6.classList.remove("border")

            parrafo5.style.display = "block";
            parrafo2.style.display = "none";
            parrafo3.style.display = "none";
            parrafo4.style.display = "none";
            parrafo1.style.display = "none";
            parrafo6.style.display = "none";
        break;
        case 6: 
            img1.style.transform = "translateX(-40.5rem)";
            img2.style.transform = "translateX(-40.5rem)";
            img3.style.transform = "translateX(-40.5rem)";
            img4.style.transform = "translateX(-40.5rem)";
            img5.style.transform = "translateX(-40.5rem)";
            img6.style.transform = "translateX(-40.5rem)";

            img6.classList.add("border")
            img1.classList.remove("border")
            img2.classList.remove("border")
            img3.classList.remove("border")
            img4.classList.remove("border")
            img5.classList.remove("border")

            parrafo6.style.display = "block";
            parrafo2.style.display = "none";
            parrafo3.style.display = "none";
            parrafo4.style.display = "none";
            parrafo5.style.display = "none";
            parrafo1.style.display = "none";
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
            img6.style.transform = "translateX(0)";

            img1.classList.add("border")
            img2.classList.remove("border")
            img3.classList.remove("border")
            img4.classList.remove("border")
            img5.classList.remove("border")
            img6.classList.remove("border")

            parrafo1.style.display = "block";
            parrafo2.style.display = "none";
            parrafo3.style.display = "none";
            parrafo4.style.display = "none";
            parrafo5.style.display = "none";
            parrafo6.style.display = "none";
        break;
        case 2:
            img1.style.transform = "translateX(-13.5rem)";
            img2.style.transform = "translateX(-13.5rem)";
            img3.style.transform = "translateX(-13.5rem)";
            img4.style.transform = "translateX(-13.5rem)";
            img5.style.transform = "translateX(-13.5rem)";
            img6.style.transform = "translateX(-13.5rem)";
            
            img2.classList.add("border")
            img1.classList.remove("border")
            img3.classList.remove("border")
            img4.classList.remove("border")
            img5.classList.remove("border")
            img6.classList.remove("border")

            parrafo2.style.display = "block";
            parrafo1.style.display = "none";
            parrafo3.style.display = "none";
            parrafo4.style.display = "none";
            parrafo5.style.display = "none";
            parrafo6.style.display = "none";
        break;
        case 3:
            img1.style.transform = "translateX(-27rem)";
            img2.style.transform = "translateX(-27rem)";
            img3.style.transform = "translateX(-27rem)";
            img4.style.transform = "translateX(-27rem)";
            img5.style.transform = "translateX(-27rem)";
            img6.style.transform = "translateX(-27rem)";
            
            img3.classList.add("border")
            img1.classList.remove("border")
            img2.classList.remove("border")
            img4.classList.remove("border")
            img5.classList.remove("border")
            img6.classList.remove("border")

            parrafo3.style.display = "block";
            parrafo2.style.display = "none";
            parrafo1.style.display = "none";
            parrafo4.style.display = "none";
            parrafo5.style.display = "none";
            parrafo6.style.display = "none";
        break;
        case 4:
            img1.style.transform = "translateX(-40.5rem)";
            img2.style.transform = "translateX(-40.5rem)";
            img3.style.transform = "translateX(-40.5rem)";
            img4.style.transform = "translateX(-40.5rem)";
            img5.style.transform = "translateX(-40.5rem)";
            img6.style.transform = "translateX(-40.5rem)";
            
            img4.classList.add("border");
            img1.classList.remove("border");
            img2.classList.remove("border");
            img3.classList.remove("border");
            img5.classList.remove("border");
            img6.classList.remove("border")

            parrafo4.style.display = "block";
            parrafo2.style.display = "none";
            parrafo3.style.display = "none";
            parrafo1.style.display = "none";
            parrafo5.style.display = "none";
            parrafo6.style.display = "none";
        break;
        case 5:
            img1.style.transform = "translateX(-54rem)";
            img2.style.transform = "translateX(-54rem)";
            img3.style.transform = "translateX(-54rem)";
            img4.style.transform = "translateX(-54rem)";
            img5.style.transform = "translateX(-54rem)";
            img6.style.transform = "translateX(-54rem)";
            
            img5.classList.add("border")
            img1.classList.remove("border")
            img2.classList.remove("border")
            img3.classList.remove("border")
            img4.classList.remove("border")
            img6.classList.remove("border")

            parrafo5.style.display = "block";
            parrafo2.style.display = "none";
            parrafo3.style.display = "none";
            parrafo4.style.display = "none";
            parrafo1.style.display = "none";
            parrafo6.style.display = "none";
        break;
        case 6: 
            img1.style.transform = "translateX(-54rem)";
            img2.style.transform = "translateX(-54rem)";
            img3.style.transform = "translateX(-54rem)";
            img4.style.transform = "translateX(-54rem)";
            img5.style.transform = "translateX(-54rem)";
            img6.style.transform = "translateX(-54rem)";

            img6.classList.add("border")
            img1.classList.remove("border")
            img2.classList.remove("border")
            img3.classList.remove("border")
            img4.classList.remove("border")
            img5.classList.remove("border")

            parrafo6.style.display = "block";
            parrafo2.style.display = "none";
            parrafo3.style.display = "none";
            parrafo4.style.display = "none";
            parrafo5.style.display = "none";
            parrafo1.style.display = "none";
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
            img6.style.transform = "translateX(0)";

            img1.classList.add("border")
            img2.classList.remove("border")
            img3.classList.remove("border")
            img4.classList.remove("border")
            img5.classList.remove("border")
            img6.classList.remove("border")

            parrafo1.style.display = "block";
            parrafo2.style.display = "none";
            parrafo3.style.display = "none";
            parrafo4.style.display = "none";
            parrafo5.style.display = "none";
            parrafo6.style.display = "none";
        break;
        case 2:
            img1.style.transform = "translateX(-13.5rem)";
            img2.style.transform = "translateX(-13.5rem)";
            img3.style.transform = "translateX(-13.5rem)";
            img4.style.transform = "translateX(-13.5rem)";
            img5.style.transform = "translateX(-13.5rem)";
            img6.style.transform = "translateX(-13.5rem)";
            
            img2.classList.add("border")
            img1.classList.remove("border")
            img3.classList.remove("border")
            img4.classList.remove("border")
            img5.classList.remove("border")
            img6.classList.remove("border")

            parrafo2.style.display = "block";
            parrafo5.style.display = "none";
            parrafo3.style.display = "none";
            parrafo4.style.display = "none";
            parrafo1.style.display = "none";
            parrafo6.style.display = "none";
        break;
        case 3:
            img1.style.transform = "translateX(-27rem)";
            img2.style.transform = "translateX(-27rem)";
            img3.style.transform = "translateX(-27rem)";
            img4.style.transform = "translateX(-27rem)";
            img5.style.transform = "translateX(-27rem)";
            img6.style.transform = "translateX(-27rem)";
            
            img3.classList.add("border")
            img1.classList.remove("border")
            img2.classList.remove("border")
            img4.classList.remove("border")
            img5.classList.remove("border")
            img6.classList.remove("border")

            parrafo3.style.display = "block";
            parrafo2.style.display = "none";
            parrafo5.style.display = "none";
            parrafo4.style.display = "none";
            parrafo1.style.display = "none";
            parrafo6.style.display = "none";
        break;
        case 4:
            img1.style.transform = "translateX(-40.5rem)";
            img2.style.transform = "translateX(-40.5rem)";
            img3.style.transform = "translateX(-40.5rem)";
            img4.style.transform = "translateX(-40.5rem)";
            img5.style.transform = "translateX(-40.5rem)";
            img6.style.transform = "translateX(-40.5rem)";
            
            img4.classList.add("border")
            img1.classList.remove("border")
            img2.classList.remove("border")
            img3.classList.remove("border")
            img5.classList.remove("border")
            img6.classList.remove("border")

            parrafo4.style.display = "block";
            parrafo2.style.display = "none";
            parrafo3.style.display = "none";
            parrafo5.style.display = "none";
            parrafo1.style.display = "none";
            parrafo6.style.display = "none";
        break;
        case 5:
            img1.style.transform = "translateX(-54rem)";
            img2.style.transform = "translateX(-54rem)";
            img3.style.transform = "translateX(-54rem)";
            img4.style.transform = "translateX(-54rem)";
            img5.style.transform = "translateX(-54rem)";
            img6.style.transform = "translateX(-54rem)";

            img5.classList.add("border")
            img1.classList.remove("border")
            img2.classList.remove("border")
            img3.classList.remove("border")
            img4.classList.remove("border")
            img6.classList.remove("border")

            parrafo5.style.display = "block";
            parrafo2.style.display = "none";
            parrafo3.style.display = "none";
            parrafo4.style.display = "none";
            parrafo1.style.display = "none";
            parrafo6.style.display = "none";
        break;
        case 6: 
            img1.style.transform = "translateX(-67.5rem)";
            img2.style.transform = "translateX(-67.5rem)";
            img3.style.transform = "translateX(-67.5rem)";
            img4.style.transform = "translateX(-67.5rem)";
            img5.style.transform = "translateX(-67.5rem)";
            img6.style.transform = "translateX(-67.5rem)";

            img6.classList.add("border")
            img1.classList.remove("border")
            img2.classList.remove("border")
            img3.classList.remove("border")
            img4.classList.remove("border")
            img5.classList.remove("border")

            parrafo6.style.display = "block";
            parrafo2.style.display = "none";
            parrafo3.style.display = "none";
            parrafo4.style.display = "none";
            parrafo5.style.display = "none";
            parrafo1.style.display = "none";
        break;
    }
}

cambiarImagenMedia1000()