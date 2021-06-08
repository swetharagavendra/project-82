var mouse_event = "empty";
var last_p_x , last_p_y;
canvas = document.getElementById("mycanvas");

ctx = canvas.getContext('2d');

var color=document.getElementById('c1').value;
var width=document.getElementById('wd1').value;
var radius=document.getElementById('r1').value;


canvas.addEventListener('mouseleave',my_mouseleave);
function my_mouseleave(){

mouse_event = "mouseleave";

}

canvas.addEventListener('mousedown',my_mousedown);
function my_mousedown(){

mouse_event = "mousedown";

}

canvas.addEventListener('mouseup',my_mouseup);
function my_mouseup(){

mouse_event = "mouseup";

}


canvas.addEventListener("mousemove",my_mousemove);

function my_mousemove(e){

 cpx= e.clientX - canvas.offsetLeft;
cpy = e.clientY - canvas.offsetTop;
 if(mouse_event=='mousedown'){

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    //ctx.moveTo(last_p_x,last_p_y);
    //ctx.lineTo(cpx,cpy);
    ctx.arc(cpx,cpy, radius, 0, 2*Math.PI);
    ctx.stroke();

 }
last_p_x = cpx;
last_p_y = cpy;
}
