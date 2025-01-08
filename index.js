
const container = document.getElementById("container")
const cube = document.getElementById("cube");
const moveBy = 50;

window.addEventListener("load", () => {
    cube.style.position = "absolute";
    cube.style.left = 0;
    cube.style.top = 0;
});


maxY = 450;
maxX = 450;


window.addEventListener("keydown", (e) => {


    const cubeX = parseInt(cube.style.left)
    const cubeY = parseInt(cube.style.top)
        

    switch(e.key) {
       
        case "ArrowLeft":
            if(cubeX <= 0) break;
            cube.style.left = cubeX - moveBy + "px";
            console.log("Left");
            break;
        
        case "ArrowRight":
            if(cubeX >= maxX) break;
            cube.style.left = cubeX + moveBy + "px";
            console.log("Right");
            break;

        case "ArrowUp":
            if(cubeY <= 0) break;
            cube.style.top = cubeY - moveBy + "px";
            console.log("Up");
            break;

         case "ArrowDown":
            if(cubeY >= maxY) break;
            cube.style.top = cubeY + moveBy + "px";
            console.log("Down");
            break;
    }
})



window.addEventListener("mousedown", (e) => {

    const x = e.clientX;
    const y = e.clientY;
    cube.style.left = parseInt(x) - 25 + "px";
    cube.style.top = parseInt(y) - 25 + "px"
})



