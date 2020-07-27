$(function () {

   let iconMenu = document.querySelector(".icon-menu");
   let body = document.querySelector("body");
   let menuBody = document.querySelector(".menu__body");
   if (iconMenu) {
      iconMenu.addEventListener("click", function () {
         iconMenu.classList.toggle("active");
         body.classList.toggle("lock");
         menuBody.classList.toggle("active");
      });
   }
   $(window).scroll(function () {
      var top = $(document).scrollTop();
      if (top > 500) $('.header').addClass('active');
      else $('.header').removeClass('active');
   });

   const anchors = document.querySelectorAll('a[href*="#"]')

   for (let anchor of anchors) {
      anchor.addEventListener('click', function (e) {
         e.preventDefault()

         const blockID = anchor.getAttribute('href').substr(1)

         document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
         })
      })
   }

});