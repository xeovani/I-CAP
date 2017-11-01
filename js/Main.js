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

    /*--------------------modal resumen--------------*/
    var modalResumen= document.getElementsByClassName("llamadaModal");

    modalResumen.onload=$(".modalResumen").css({ width : '100%'});

    $(".headModResumen span").click(function(){
        $(".modalResumen").css({"width":"0%"})

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

    /*------------------Modal cerrar sesion----------------*/

                $(".btnCerrarSesion").click(function(){
                        $(".modalCerrarSesion").css({display:"block"});
                  return false;
                });

                $(".headCerrarSesion span").click(function(){
                    $(".modalCerrarSesion").css({"display":"none"});
                });

                $(".seccionCerrarSesion input:gt(0)").click(function(){

                    $(".modalCerrarSesion").css({"display":"none"});
                });


    /*---------------------------semaforo------------------*/

                var semaforo= document.querySelectorAll(".contenedor-tabla table tr");

                    console.log(semaforo);
                    for(var i=1;i<=semaforo.length;i++){

                                        semaforo[i].onmouseover=function(){
                                                $(this).css({"background":"#0C426F","cursor":"pointer"}).on("click",function(){
                                                                                        $(this).css("background-color", "yellow");
                                                                                        });

                                            }

                                        semaforo[i].onmouseout=function(){
                                                $(this).css("background","rgba(16,113,185,0.1)");
                                            }


                    }








});


                      /*-----------------------------------duracion de sesion--------------*/



                        var segundos;
                        var minutos;
                        var horas;
                        var t;
                        var tiempo = 0;
                        var time;

                        function contadorTiempo() {

                            var cero="0";
                            var seg,min,hrs;

                            if(segundos<10){
                                seg= cero + segundos;

                             }
                            else{
                                seg=segundos;
                            }
                            if(minutos<10){
                                min= cero + minutos;
                            }
                            else{
                                min= minutos;
                            }
                            if(horas<10){
                                hrs= cero + horas;
                            }
                            else{
                                hrs=horas;
                            }
                             document.getElementById("Tiempo-sesion1").value = hrs + ":" + min + ":"  + seg;
                              time=document.getElementById("Tiempo-sesion1").value;




                                segundos = segundos + 1;
                                setTimeout(function(){ contadorTiempo() }, 1000);
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

                    /*-----------funcion iniciar conteo-------------*/
                        function iniciarConteo() {
                            reloj();
                            if (!tiempo) {
                                    tiempo = 1;
                                    contadorTiempo();
                                }


                            }

//                    document.getElementById("btn-enviar").onclick=iniciarConteo();

        window.onload=iniciarConteo;
//                  window.onbeforeunload = funcion();

            function reloj(){

                    if (typeof(Storage) !== "undefined") {

                            if(
                                localStorage.getItem("segundos") !== "undefined" &&
                                localStorage.getItem("minutos") !== "undefined" &&
                                localStorage.getItem("horas") !== "undefined" ){
                                segundos = parseInt(localStorage.getItem("segundos"));
                                minutos = parseInt(localStorage.getItem("minutos"));
                                horas = parseInt(localStorage.getItem("horas"));
                                console.log("entro");
                            }else{
                                segundos = 0;
                                minutos = 0;
                                horas = 0;


                            }



                        } else {
                            document.getElementById("Tiempo-sesion1").innerHTML= "Sorry";
                        }
            }

            function sesion(){
                localStorage.setItem("segundos",segundos);
                localStorage.setItem("minutos",minutos);
                localStorage.setItem("horas",horas);
                console.log(localStorage.getItem("segundos"));
                    console.log(localStorage.getItem("minutos"));
                        console.log(localStorage.getItem("horas"));
            }






