$(document).ready(function(){



         $(".cont_img_tecl").hide().fadeIn(2000);

         $(".text_cuerpo p,h4").hide().slideDown(2000);

         $(".titulo-sem > h2").hide().slideDown(1000);

    /*-----------limpiar input---------------*/


                        $(".MostRegist >input").focusin(function(){

                            $(this).val(" ");
                        });
                        $(".MostRegist >input").focusout(function(){

                            $(this).val("Iniciar busqueda..");
                        });

                        $(".navegacion >span >input:first-child").focusin(function(){
                            $(this).val(" ");
                        });

                        $(".navegacion >span >input:first-child").focusout(function(){
                            $(this).val("Buscar . .");
                        });
    /*--------------------modal descarga-------------*/

    $(".MostRegist > a").click(function(){
       $(".modal").css({"display":"block","width":"100%","transition":"width 2s","height":"100%","transition":"height 2s"});
        return false;
    });
    $(".cabeceraModal span").click(function(){
        $(".modal").css("display","none");
    });

    /*--------------------menu responsivo----------------*/

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

/*

                $(".navegacion nav ~ span >input:first-child").focusin(function(){

                    $(this).val(" ");

                });
*/


    /*------------------Efecto parallax-------------------*/

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











            /*-----------------Menu------------------------*/
//
//     var menu = document.querySelectorAll(".navegacion nav > ul > li");
//     var submenu = document.querySelectorAll(".navegacion nav > ul > li >div >div");
//    console.log("menu: " + menu.length);
//
//    console.log("submenu: " + submenu.length);
//      for(var i=0;i<=6;i++){
//
//
//
//                menu[i].onmouseover=
//                    function(){
//
//                    $(this).css("background-color" , "rgba(16, 113, 185, 0.6)");/*efecto over--cambia de color*/
//
//                    /*   $(".navegacion nav > ul > li:hover .submenu").show(500).css({"display" : "flex", "z-index" : "1"});*/
//
//
//
//
//
//
//                    }
//
//
//                menu[i].onmouseout=function(){
//
//                    $(this).css("background-color" , "#0C426F");
//
//
//
//                       /*    $(".navegacion > nav > ul > li .submenu").hide().css({"padding"  : "0px",
//                                                                       "position" : "absolute",
//                                                                       "display"  : "none"});   */
//
//
//                    }
//
//           }
            /*-----------------------------over de semaforo--------------------------*/

/*             $(".contenedor-tabla table tr").hover(
                        function(){
                            $(this).css("background-color","#0C426F");
                        },

                        function(){
                            $(this).css("background-color","rgba(16,113,185,0.1)");


                        });*/





                var semaforo= document.querySelectorAll(".contenedor-tabla table tr");

                    console.log(semaforo);
                    for(var i=1;i<=semaforo.length;i++){

                                        semaforo[i].onmouseover=
                                            function(){//
                                                $(this).css({"background":"#0C426F","cursor":"pointer"}).on("click",function(){
                                                                                        $(this).css("background-color", "yellow");//cambiar la funcion para                                              //  que dirija a donde debe
                                                                                        });

                                            }

                                        semaforo[i].onmouseout=
                                            function(){
                                                $(this).css("background","rgba(16,113,185,0.1)");
                                            }


                    }




                       $(".login_user form").validationEngine();

                        var usr=$("#Usuario").val();

                        $("#btn-enviar").click(function(){
                            var mayusculas= $("#Usuario").val().toUpperCase();
                            $("#Usuario").val(mayusculas);

                        });






});






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













