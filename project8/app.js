const likeButton = document.querySelectorAll(".card-btn");

likeButton.forEach((likeButton) =>{
    likeButton.addEventListener("click",() => {
        likeButton.classList.toggle("card-btn--like")
        // console.log("hey=" ,likeButton)
    })
})