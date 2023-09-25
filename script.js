//coverflow
document.addEventListener('DOMContentLoaded', function(event) {
    var swiper = new Swiper(".mySwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        keyboard: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        coverflowEffect: {
          rotate: 0,
          stretch: 100,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          dynamicBullets: true,
       },
    });
});

//music-player
document.addEventListener('DOMContentLoaded', function(event) {
  let progress_bar = document.querySelector("input[type='range']");
  let song = document.querySelector("audio");
  let button_icon = document.querySelector("#button_icon");
  let button = document.querySelector("#button");
  //play pause
  button.addEventListener("click", function(event){

    if (button_icon.classList.contains("fa-play")){
      song.play();
      button_icon.classList.remove("fa-play");
      button_icon.classList.add("fa-pause");
    }else if (button_icon.classList.contains("fa-pause")){
        song.pause();
        button_icon.classList.remove("fa-pause");
        button_icon.classList.add("fa-play");
    }

  });
  //progress bar update
  if(song.play()) {
    setInterval(()=>{progress_bar.value = song.currentTime;}, 500);
  }
 //progress bar functionality
  progress_bar.addEventListener("change", function(){
    song.play();
    song.currentTime = progress_bar.value;
    button_icon.classList.remove("fa-play");
    button_icon.classList.add("fa-pause");
  });

});

//under works
document.addEventListener('DOMContentLoaded', function(event) {

  let page = document.querySelector('p');
  let body = document.querySelector('body');

  page.addEventListener('click', function(event){
    body.style.background = 'url(https://th.bing.com/th/id/R.737c8b5516687272221ac78311f0ac5b?rik=w9HJeTNtJd6YMw&pid=ImgRaw&r=0)';
    body.style.backgroundSize = 'cover';
  })

});
