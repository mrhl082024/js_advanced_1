
const container = document.getElementById("container")
let cube = document.getElementById("cube");
let moveBy = 20;



window.addEventListener("load", () => {
    cube.style.position = "absolute";
    cube.style.left = 0;
    cube.style.top = 0;
});



// let moveLeft = false;
// let moveRight = false;
// let moveUp = false;
// let moveDown = false;
// window.addEventListener("keydown", (e) => {
//     switch(e.key){
//         case "ArrowUp":
//             moveUp = true;
//             console.log("up");
            
//             break;
//         case "ArrowDown":
//             moveDown = true;
//             console.log("down");
//             break;
//         case "ArrowLeft":
//             moveLeft = true;
//             console.log("left");
//             break;
//         case "ArrowRight":
//             moveRight = true;
//             console.log("right");
//             break;    
//     }
// });






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
    
    // console.log("museklikk");

    cube.style.position = "absolute";
    let x = e.clientX;
    let y = e.clientY;
    cube.style.left = parseInt(x) - 25 + "px";
    cube.style.top = parseInt(y) - 25 + "px"
    
})


