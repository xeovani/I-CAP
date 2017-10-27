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



                        var segundos = 0;
                        var minutos = 0;
                        var horas = 0;
                        var t;
                        var tiempo = 0;

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
                        document.getElementById("Tiempo-sesion").value = hrs + ":" + min + ":"  + seg;



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

                            if(typeof(Storage) !== "undefined"){
                            localStorage.hours=hrs;
                            localStorage.minutes=min;
                            localStorage.seconds=seg;

                            }else{
                               alert("Sorry! No Web Storage support.." )
                            }


                            }

                            function iniciarConteo() {
                                if (!tiempo) {
                                    tiempo = 1;
                                    contadorTiempo();
                                }
                            }

                    window.onload=iniciarConteo;











