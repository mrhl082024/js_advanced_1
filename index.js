
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

    const cubeX = parseInt(cube.style.left)
    const cubeY = parseInt(cube.style.top)
        
    switch(e.key) {
       
        case "ArrowLeft":
            if(cubeX <= 0) break;
            cube.style.left = cubeX - moveBy + "px";
        
            break;
        
        case "ArrowRight":
            if(cubeX >= maxX) break;
            cube.style.left = cubeX + moveBy + "px";
         
            break;

        case "ArrowUp":
            if(cubeY <= 0) break;
            cube.style.top = cubeY - moveBy + "px";
          
            break;

         case "ArrowDown":
            if(cubeY >= maxY) break;
            cube.style.top = cubeY + moveBy + "px";
            
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

    /* const rect = cube.getBoundingClientRect();
    const rectX = rect.left + window.scrollX;
    const rectY = rect.top + window.scrollY;
     */
})

/***  FONØYD NO ALEX ?!??!!!  ***/