$(document).ready(function(){



         $(".cont_img_tecl").hide().fadeIn(5000);

         $(".text_cuerpo >p").hide().fadeIn(5000);
         $(".text_cuerpo >H4").hide().fadeIn(5000);

      /*  $(".menubar .btn-menu").click(function(){

                $("nav").css("left", "0px");
            return false;
        });*/

        var contador=1;

        $(".menubar a:first-child").click(function(){

                if(contador == 1){
                   $("nav").animate({left : '0'});
                   contador=0;
                }else{
                    contador=1;
                    $("nav").animate({left : '-100%'});
                }


            return false;
        });





        $(window).scroll(function(){
            var barra = $(window).scrollTop();
            var posicion =  (barra * 0.20);

                $('body').css({
                    'background-position': '0 -' + posicion + 'px'
                });

	     });

          /* var submenu = document.querySelectorAll(".navegacion nav > ul > li >.submenu")*/

         /*  for(var i=0;i<=submenu.length;i++){

      /* $(".hover").hover(function(){

                       /* $(".navegacion nav ul li:hover .submenu").show(500).css({"display" : "flex", "z-index" : "1"});
                          $(".over").show(500).css({"display" : "flex", "z-index" : "1"});
                        },

                        function(){
                         $(".over").hide(500).css({"padding" : "0", "display" : "none",
                                                                              "position" : " absolute "
                                                                              });

                       /* $(".navegacion nav ul li .submenu").hide(500).css({"padding" : "0", "position" : " absolute ",
                                                                           "display" : "none"});

        });

              }   */



     var menu = document.querySelectorAll(".navegacion nav > ul > li");
     var submenu = document.querySelectorAll(".navegacion nav > ul > li >div >div");
    console.log("menu: " + menu.length);

    console.log("submenu: " + submenu.length);
      for(var i=0;i<=6;i++){



                menu[i].onmouseover=
                    function(){

                    $(this).css("background-color" , "rgba(16, 113, 185, 0.6)");/*efecto over--cambia de color*/

                    /*   $(".navegacion nav > ul > li:hover .submenu").show(500).css({"display" : "flex", "z-index" : "1"});*/






                    }


                menu[i].onmouseout=function(){

                    $(this).css("background-color" , "#0C426F");



                       /*    $(".navegacion > nav > ul > li .submenu").hide().css({"padding"  : "0px",
                                                                       "position" : "absolute",
                                                                       "display"  : "none"});   */


                    }

           }

        $( ".cd-select" ).click(function(){
                $(this).;
        });


});




   /* var fecha=new Date;

    console.log(fecha.getHours());
    console.log(submenu.length);
   */









