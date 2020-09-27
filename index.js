document.addEventListener("DOMContentLoaded", function(){
    $(window).scroll(function () { 
        //Position:
        var position = $('.partners__item').position();
        console.log(position);
        var position = $('.counselors__left-image--item').position();
        console.log(position);
        
        //đếm class Name partners__item
        var nodelist = document.getElementsByClassName('partners__item').length;
        console.log(nodelist);

        window.addEventListener('scroll',function(){

        var partnerimage = document.querySelectorAll('.partners__item');
            if(window.pageXOffset = 3614)
                for (let i = 0; i < 3; i++) 
                    partnerimage[i].classList.add('on-show')
            else if(window.pageXOffset = 3934)
                    for (let i = 3; i < 6; i++) 
                        partnerimage[i].classList.add('on-show')
            else if(window.pageXOffset = 4254)
                    for (let i = 6; i < 9; i++) 
                        partnerimage[i].classList.add('on-show')          
          })
          window.addEventListener('scroll',function(){
          var counselorsleftimage =  document.querySelector('.counselors__left-image--item');
          if(window.pageXOffset = 4704) {
                counselorsleftimage.classList.add('on-show')
          }
          });
    });
})
new WOW().init();
