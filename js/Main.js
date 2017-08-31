$(document).ready(function(){



         $(".cont_img_tecl").hide().fadeIn(5000);

         $(".text_cuerpo >p").hide().slideDown(5000);
         $(".text_cuerpo >H4").hide().slideDown(5000);


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




             /*---------------------select cliente----------------------*/


                $("#CLIENTE").on('change',function(){
                    var cliente = $(this).val();

//                     $("#SOLICITANTE").


                });

           var CLIENTE= new Array;

           CLIENTE[1]=["Aidé Liliana Lopez Lopez","Alan Arispe Treviño","Alan García Aguilar","Alejandro Flores Ruiz","Ana Isabel Ceja Hernández","Andres Coronado Carréon","Antonio Arias Sotero","Carlos Dávila Salazar","Carlos González Cano","Jesica Elena Olague Martínez","Karen Sarai Pérez Gloria",
           "Manuel Alenadro Garcia Santos","Marcela Leal Santos","Margarita Castillo Ayala","Nestor Alfonso Lopez Martinez","Norma Elsa Alanis Gonzalez","Pedro Garcia Sanchez","Raul Alejandro Hernadez","","","","",""];



});






       /* function startTime(){
        today=new Date();
        h=today.getHours();
        m=today.getMinutes();
        s=today.getSeconds();
        m=checkTime(m);
        s=checkTime(s);
        document.getElementById('reloj').value=h+":"+m+":"+s;
            console.dir(h+":"+m+":"+s);
        t=setTimeout('startTime()',500);}

        function checkTime(i)
        {if (i<10) {i="0" + i;}return i;}

        window.onload=function(){startTime();}
*/

                /*-----------------------------------duracion de sesion--------------*/



                        var segundos = 0;
                        var minutos = 0;
                        var horas = 0;
                        var t;
                        var tiempo = 0;

                        function contadorTiempo() {
                            document.getElementById("Tiempo-sesion").value = horas + ":" + minutos + ":" + segundos;
                            segundos = segundos + 1;
                            t = setTimeout(function(){ contadorTiempo() }, 1000);
                            if(segundos==59){
                                segundos=0;
                                minutos= minutos + 1;

                                    if(minutos==59)
                                        {
                                            minutos=0;
                                            horas = horas + 1;
                                        }
                            }
                        }

                        function iniciarConteo() {
                            if (!tiempo) {
                                tiempo = 1;
                                contadorTiempo();
                            }
                        }

                        window.onload=iniciarConteo;










