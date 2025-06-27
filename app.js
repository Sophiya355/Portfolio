const video1 = document.getElementById('ProjectVideo1');
const video2 = document.getElementById('ProjectVideo2');
const video3 = document.getElementById('ProjectVideo3');
const hoverSign = document.querySelector('.hover-sign');
//sidebar Element//
// const sideBar = document.querySelector('.sidebar');
// const menu = document.querySelector('.menu-icon');
// const close = document.querySelector('.close-icon');
const videoList = [video1,video2,video3];

videoList.forEach(function(video){
    video.addEventListener('mouseover',function () {
        video.play()
        hoverSign.classList.add('active')
    })
    video.addEventListener('mouseout',function(){
        video.pause();
        hoverSign.classList.remove('active')
    })
})
// Sidebar elements //
// menu.addEventListener("click", function(){
//     sideBar.classList.remove("close-sidebar")
//     sideBar.classList.add("open-sidebar")
// });

// closeIcon.addEventListener("click", function(){
//     sideBar.classList.remove("open-sidebar");
//     sideBar.classList.add("close-sidebar");
    
// })

  document.addEventListener("DOMContentLoaded", function () {
    const sideBar = document.querySelector('.sidebar');
    const menuButton = document.querySelector('.menu-icon');
    const closeButton = document.querySelector('.close-icon');

    // Open sidebar
    menuButton.addEventListener("click", function () {
      sideBar.classList.remove('close-sidebar');
      sideBar.classList.add('open-sidebar');
    });

    // Close sidebar
    closeButton.addEventListener("click", function () {
      sideBar.classList.remove('open-sidebar');
      sideBar.classList.add('close-sidebar');
    });
  });
