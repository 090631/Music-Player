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


document.addEventListener('DOMContentLoaded', function(event) {

  const bgArray = [
    "url(https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80)",
    "url(https://images.unsplash.com/photo-1517825738774-7de9363ef735?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1710&q=80)",
    "url(https://images.unsplash.com/photo-1465628976988-fe43bda15798?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1772&q=80)"
  ];

  const progress_bar = document.querySelectorAll(`#progress_bar`);
  const song = document.querySelectorAll(`#song`);
  const button_icon = document.querySelectorAll(`#button_icon`);
  const button = document.querySelectorAll(`#button`);
  const next = document.querySelectorAll(`#nextS`);
  const prev = document.querySelectorAll(`#prevS`);
  const bg = document.querySelector(`body`);

  for (let i = 0; i < 3; i++){
    prev[i].addEventListener("click", function(event){
      pause(i);
      play(i-1);
      change_bg(i-1);
    });

    next[i].addEventListener("click", function(event){
      pause(i);
      play(i+1);
      change_bg(i+1);
    });

    button[i].addEventListener("click", function(event){
      play_pause(i);
    });

    progress_bar[i].addEventListener("change", function(){
      progress_change(i);
    });

    if(song[i].play()) {
      setInterval(()=>{progress_bar[i].value = song[i].currentTime;},
      500);
    };
  };

  function play_pause(num){
    if (button_icon[num].classList.contains("fa-play")){
      song[num].play();
      button_icon[num].classList.remove("fa-play");
      button_icon[num].classList.add("fa-pause");
    }else if (button_icon[num].classList.contains("fa-pause")){
        song[num].pause();
        button_icon[num].classList.remove("fa-pause");
        button_icon[num].classList.add("fa-play");
    }
  };

  function play(num){
    song[num].play();
    button_icon[num].classList.remove("fa-play");
    button_icon[num].classList.add("fa-pause");
  };

  function pause(num){
    song[num].pause();
    button_icon[num].classList.remove("fa-pause");
    button_icon[num].classList.add("fa-play");
  };

  function progress_change(num){
    song[num].play();
    song[num].currentTime = progress_bar[num].value;
    button_icon[num].classList.remove("fa-play");
    button_icon[num].classList.add("fa-pause");
  };

  function change_bg(num){
    bg.style.background = bgArray[num];
    bg.style.backgroundSize = 'cover';
  };

});
