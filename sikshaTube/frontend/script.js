const leftContainer = document.querySelector(".left-container-elements");

leftContainer.addEventListener('mouseenter' ,()=>{
   leftContainer.style.overflowY = "Scroll";
});
leftContainer.addEventListener('mouseleave',()=>{
   leftContainer.style.overflowY ="Hidden";
})