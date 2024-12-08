let main = document.querySelector(".main");
let car = document.querySelector(".cursor");

main.addEventListener("mousemove",function(dets){
    car.style.left = dets.x+"px"
    car.style.top = dets.y+"px"

})