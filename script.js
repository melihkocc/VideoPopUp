const button = document.querySelector("#button")
const videoDiv = document.querySelector(".videoDiv")
const xMark = document.querySelector(".xmark")
const video = document.querySelector("video")

button.addEventListener("click",()=>{
    videoDiv.classList.remove("active")

})
xMark.addEventListener("click",()=>{
    videoDiv.classList.add("active")
    video.currentTime=0
    video.pause() 
})

