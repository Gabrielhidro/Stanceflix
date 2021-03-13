$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

// Modal 

const modal = document.querySelector(".modal")
const btn = document.getElementById("btn")
const video = document.querySelector("video")

btn.addEventListener('click', handleClick)

function handleClick(event){
    event.preventDefault()
    modal.classList.add("active")
    video.play()
}


function btnClose(){
    modal.classList.remove("active")
    video.pause()
}

// Infos

const btnInfo = document.getElementById("info")
 
btnInfo.addEventListener('click', moreInfo)
function moreInfo(){
    alert("Peugeot 206 da pau em qualquer AP!!!");
}
