document.addEventListener("DOMContentLoaded", function(){
    $(window).scroll(function () { 
        
        var position = $('.partners__item').position(); // lấy vị trí
        // console.log(position);
       
        var position = $('.organizational-chart--image').position();
        var counselorsleftimage = document.querySelector('.organizational-chart--image');
      
        var partnerimage = document.querySelectorAll('.partners__item');
       
        // window.addEventListener('scroll',function(){
        //     if(window.scrollX = 2781) {
        //         counselorsleftimage.classList.add('on-show');
        //     }
        //     if(window.scrollX = 3614)
        //     {
        //         for (var i = 0; i < 3; i++){
        //             partnerimage[i].classList.add('on-show')
        //         }
        //         setTimeout(function () {
        //             for (var i = 3; i < 6; i++){
        //                 partnerimage[i].classList.add('on-show')
        //             }
        //           }, 800);
                
        //           setTimeout(function () {
        //             for (var i = 6; i < 9; i++){
        //                 partnerimage[i].classList.add('on-show')
        //             }
        //           }, 1600); 
           
        //         }

               
      
        //   })
    });
})
// Wow JS
new WOW().init();
AOS.init();
