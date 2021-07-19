var swiper = new Swiper(".swiper-container", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });


var counter = 1;

swiper.on('slideChange', (sw) => {
  if (sw.realIndex === 2) {
    if (counter == 1) {
      alert("treti polozka poprve");
      counter++;
    }
    else {
      alert("treti polozka po " + counter);
      counter++;
    }
  }
});