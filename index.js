
let cube = document.querySelector(".cube");
let moveBy = 10;



window.addEventListener("load", () => {
    cube.style.position = "absolute";
    cube.style.left = 0;
    cube.style.top = 0;
});



window.addEventListener("keydown", (e) => {
    switch(e.key) {
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