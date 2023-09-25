document.addEventListener('DOMContentLoaded', function() {
    var swiper = new Swiper(".mySwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
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
       },
    });
});

document.addEventListener('DOMContentLoaded', function() {
  let page = document.querySelector('p');
  let body = document.querySelector('body');
  page.addEventListener('click', function(event){
    body.style.background = 'url(https://th.bing.com/th/id/R.737c8b5516687272221ac78311f0ac5b?rik=w9HJeTNtJd6YMw&pid=ImgRaw&r=0)';
    body.style.backgroundSize = 'cover';
  })

});

document.addEventListener('DOMContentLoaded', function() {
  let progress = document.querySelector("input");
  let song = document.querySelector("audio");
  let button = document.querySelector("#button");
  let click = document.querySelector("#click");

  click.addEventListener("click", function(event){
    if (button.classList.contains("fa-play")){
      song.play();
      button.classList.remove("fa-play");
      button.classList.add("fa-pause");
    }else if (button.classList.contains("fa-pause")){
        song.pause();
        button.classList.remove("fa-pause");
        button.classList.add("fa-play");
    }
  });
  if(song.play()) {
    setInterval(()=>{
        progress.value = song.currentTime;
    }, 500);
  }
  progress.addEventListener("change", function(){
    song.play();
    song.currentTime = progress.value;
    button.classList.remove("fa-play");
    button.classList.add("fa-pause");
  });
});