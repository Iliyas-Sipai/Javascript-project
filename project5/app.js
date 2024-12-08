let arr = [
    {dp:"https://images.pexels.com/photos/27596665/pexels-photo-27596665/free-photo-of-a-woman-in-a-white-dress-and-sunglasses-is-standing-next-to-a-bike.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    ,story:"https://images.pexels.com/photos/20360852/pexels-photo-20360852/free-photo-of-big-windows-in-a-living-room.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"},
    {dp:"https://images.pexels.com/photos/27201648/pexels-photo-27201648/free-photo-of-a-horse-with-a-saddle-is-grazing-in-a-field.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    ,story:"https://images.pexels.com/photos/3064714/pexels-photo-3064714.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"},
     {dp:"https://images.pexels.com/photos/26891158/pexels-photo-26891158/free-photo-of-traffic-sign-in-a-narrow-alley.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    ,story:"https://images.pexels.com/photos/19223331/pexels-photo-19223331/free-photo-of-young-newlywed-couple-dancing-and-laughing.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"},
    {dp:"https://images.pexels.com/photos/18761372/pexels-photo-18761372/free-photo-of-blue-footed-booby-on-rock.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    ,story:"https://images.pexels.com/photos/19223331/pexels-photo-19223331/free-photo-of-young-newlywed-couple-dancing-and-laughing.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"},
];

let storyes = document.querySelector("#storyes")
let clutter =""
arr.forEach(function(elem,idx){
    clutter +=`  <div class="story">
            <img id="${idx}" src="${elem.dp}" alt="">
        </div>
`
    //  console.log(elem,idx)
})
document.querySelector("#storyes").innerHTML = clutter;    

storyes.addEventListener("click",function(dets){
    // let val = arr[dets.target.id].story;
    document.querySelector("#full-screen").style.display = "block";
    document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`;
 
    setTimeout(function(){
    document.querySelector("#full-screen").style.display = "none";
    },3000)

});

