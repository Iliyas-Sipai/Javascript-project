const btn = document.querySelectorAll(".button");
const body =document.querySelector("body");

btn.forEach(function (button) {
    button.addEventListener("click",function(deadpool) {
        console.log(deadpool)
        console.log(deadpool.target);
        if(deadpool.target.id ==="orange"){
            body.style.backgroundColor = deadpool.target.id;
        }
        if(deadpool.target.id === "purple"){
            body.style.backgroundColor = deadpool.target.id;
        }
        if(deadpool.target.id === "silver"){
            body.style.backgroundColor = deadpool.target.id;
        }
        if(deadpool.target.id === "broun"){
            body.style.backgroundColor = deadpool.target.id;
        }
        if(deadpool.target.id === "yellow"){
            body.style.backgroundColor = deadpool.target.id
        }
    });
});