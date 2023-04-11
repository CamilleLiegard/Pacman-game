
addEventListener("keydown", function(e) {

    if(e.code == 'ArrowRight') vxr = 3;

    if(e.code == 'ArrowLeft') vxl = -2;

    if(e.code == 'ArrowUp') vy = -2;

    if(e.code == 'ArrowDown') vy = 2;
    console.log(e.code)
})


addEventListener("keyup", function(e){

    if(e.code == 'ArrowRight') vxr = 0;

    if(e.code == 'ArrowLeft') vxl = 0;

    if(e.code == 'ArrowUp') vy = 0;

    if(e.code == 'ArrowDown') vy = 0;

    console.log(e.code)
 
})
