
let cube = document.querySelector(".cube");
let moveBy = 10;


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

function mouseCordinates(e) {
    let x = e.clientX;
    let y = e.clientY;
    document.getElementById("X").value = x;
    document.getElementById("Y").value = y;
}



window.addEventListener("mousedown", (e) => {
    cube.style.position = "absolute";
    let x = e.clientX;
    let y = e.clientY;
    cube.style.left = parseInt(x);
    cube.style.top = parseInt(y)
    console.log("heisann");
    
})


