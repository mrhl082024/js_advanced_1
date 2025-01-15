
const container = document.getElementById("container")
const cube = document.getElementById("cube");
const moveBy = 50;

window.addEventListener("load", () => {
    cube.style.position = "absolute";
    cube.style.left = 0;
    cube.style.top = 0;
});

const maxY = 450;
const maxX = 450;

window.addEventListener("keydown", (e) => {
    
    const rect = cube.getBoundingClientRect();
    const rectX = rect.left + window.scrollX;
    const rectY = rect.top + window.scrollY;
    const rectRight = rect.right + window.scrollX;
    const rectBottom = rect.bottom + window.scrollY;
        
    switch(e.key) {
       
        case "ArrowLeft":
            if(rectX - moveBy <= 0) {
                cube.style.left = 0;
                break;
            };
            cube.style.left = rectX - moveBy + "px";
            break;
        
        case "ArrowRight":
            if(rectRight + moveBy >= maxX) {
                cube.style.left = parseInt(maxX) + "px";
                break;
            }
            cube.style.left = rectX + moveBy + "px";
            break;

        case "ArrowUp":
            if(rectY - moveBy <= 0) {
                cube.style.top = 0;
                break;
            };
            cube.style.top = rectY - moveBy + "px";
            break;

         case "ArrowDown":
            if(rectBottom + moveBy >= maxY) {
                cube.style.top = parseInt(maxY) + "px";
                break;
            }
            cube.style.top = rectY + moveBy + "px";
            break;
    }
})

window.addEventListener("mousedown", (e) => {

    const mouseX = e.clientX;
    const mouseY = e.clientY;
    
    if(mouseX > maxX) {
        cube.style.left = parseInt(maxX) + "px";
    } else { 
        cube.style.left = parseInt(mouseX) + "px";
    }

    if(mouseY > maxY) {
        cube.style.top = parseInt(maxY) + "px";
    } else {
        cube.style.top = parseInt(mouseY) + "px"
    }
})

/***  FONØYD NO ALEX ?!??!!!  ***/