
const container = document.getElementById("container")
const cube = document.getElementById("cube");


let moveBy = 20;

window.addEventListener("load", () => {
    cube.style.position = "absolute";
    cube.style.left = 0;
    cube.style.top = 0;
});



window.addEventListener("keydown", (e) => {
    switch(e.key) {
        /*bruker switch case for de forksjellige piltast
        retningene eg vil bevege cube.*/
        case "ArrowLeft":
            cube.style.left = parseInt(cube.style.left) - moveBy + "px";
            break;
        case "ArrowRight":
            cube.style.left = parseInt(cube.style.left) + moveBy + "px";
            break;
        case "ArrowUp":
            cube.style.top = parseInt(cube.style.top) - moveBy + "px";
            break;
         case "ArrowDown":
            cube.style.top = parseInt(cube.style.top) + moveBy + "px";
            break;
    }
})



window.addEventListener("mousedown", (e) => {
    
    // console.log("museklikk");

    const x = e.clientX;
    const y = e.clientY;
    cube.style.left = parseInt(x) - 25 + "px";
    cube.style.top = parseInt(y) - 25 + "px"
})



