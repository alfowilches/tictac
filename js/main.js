

window.onload = function(){
        var x = "X";
        var o = "O";
        var uno = true;
        var play = ["n"];


        var juego = document.getElementsByTagName("li");
        console.log(juego);

        var validaganador = function(){
           if(juego[0].innerHTML===x && juego[1].innerHTML===x && juego[2].innerHTML===x){
              alert("gano X");
              reset();
            }
            if(juego[3].innerHTML===x && juego[4].innerHTML===x && juego[5].innerHTML===x){
               alert("gano X");
               reset();
             }
             if(juego[6].innerHTML===x && juego[7].innerHTML===x && juego[8].innerHTML===x){
                alert("gano X");
                reset();
              }

              if(juego[2].innerHTML===x && juego[4].innerHTML===x && juego[6].innerHTML===x){
                 alert("gano X");
                 reset();
               }

               if(juego[0].innerHTML===x && juego[4].innerHTML===x && juego[8].innerHTML===x ){
                  alert("gano X");
                  reset();
                }

                if(juego[0].innerHTML===o && juego[1].innerHTML===o && juego[2].innerHTML===o){
                   alert("gano O");
                   reset();
                 }
                 if(juego[3].innerHTML===o && juego[4].innerHTML===o && juego[5].innerHTML===o){
                    alert("gano O");
                    reset();
                  }
                  if(juego[6].innerHTML===o && juego[7].innerHTML===o && juego[8].innerHTML===o){
                     alert("gano O");
                     reset();
                   }

                   if(juego[2].innerHTML===o && juego[4].innerHTML===o && juego[6].innerHTML===o){
                      alert("gano O");
                      reset();
                    }

                    if(juego[0].innerHTML===o && juego[4].innerHTML===o && juego[8].innerHTML===o ){
                       alert("gano O");
                       reset();
                     }

                     if(juego[2].innerHTML===x && juego[5].innerHTML===x && juego[8].innerHTML===x){
                        alert("gano X");
                        reset();
                      }
                      if(juego[1].innerHTML===x && juego[4].innerHTML===x && juego[7].innerHTML===x){
                         alert("gano X");
                         reset();
                       }
                       if(juego[0].innerHTML===x && juego[3].innerHTML===x && juego[6].innerHTML===x){
                          alert("gano X");
                          reset();
                        }


                        if(juego[2].innerHTML===o && juego[5].innerHTML===o && juego[8].innerHTML===o){
                           alert("gano O");
                           reset();
                         }
                         if(juego[1].innerHTML===o && juego[4].innerHTML===o && juego[7].innerHTML===o){
                            alert("gano O");
                            reset();
                          }
                          if(juego[0].innerHTML===o && juego[3].innerHTML===o && juego[6].innerHTML===o){
                             alert("gano O");
                             reset();
                           }



        }

        var reset = function() {
            j13.innerHTML=" ";
            j12.innerHTML=" ";
            j11.innerHTML=" ";
            j23.innerHTML=" ";
            j22.innerHTML=" ";
            j21.innerHTML=" ";
            j33.innerHTML=" ";
            j32.innerHTML=" ";
            j31.innerHTML=" ";
            var uno = true;
        }

        var btn = document.getElementById("reset");

        btn.onclick = function(){
          reset();
        }

        var j13 = document.getElementById("ut");
        var j12 = document.getElementById("ud");
        var j11 = document.getElementById("uu");
        var j23 = document.getElementById("dt");
        var j22 = document.getElementById("dd");
        var j21 = document.getElementById("du");
        var j33 = document.getElementById("tt");
        var j32 = document.getElementById("td");
        var j31 = document.getElementById("tu");


        // Fila 1
        j13.onclick = function(){
              var contenido = j13.innerHTML;
              if(contenido === " "){
                if(uno){
                  j13.innerHTML=x;
                  uno = false;
                }else{
                  j13.innerHTML=o;
                  uno = true;
                }
                validaganador();
              }
        }

        j12.onclick = function(){
              var contenido = j12.innerHTML;
              if(contenido === " "){
                if(uno){
                  j12.innerHTML=x;
                  uno = false;
                }else{
                  j12.innerHTML=o;
                  uno = true;
                }
                validaganador();
              }
        }

        j11.onclick = function(){
              var contenido = j11.innerHTML;
              if(contenido === " "){
                if(uno){
                  j11.innerHTML=x;
                  uno = false;
                }else{
                  j11.innerHTML=o;
                  uno = true;
                }
                validaganador();
              }
        }

        // Fila 2
        j23.onclick = function(){
              var contenido = j23.innerHTML;
              if(contenido === " "){
                if(uno){
                  j23.innerHTML=x;
                  uno = false;
                }else{
                  j23.innerHTML=o;
                  uno = true;
                }
                validaganador();
              }
        }

        j22.onclick = function(){
              var contenido = j22.innerHTML;
              if(contenido === " "){
                if(uno){
                  j22.innerHTML=x;
                  uno = false;
                }else{
                  j22.innerHTML=o;
                  uno = true;
                }
                validaganador();
              }
        }

        j21.onclick = function(){
              var contenido = j21.innerHTML;
              if(contenido === " "){
                if(uno){
                  j21.innerHTML=x;
                  uno = false;
                }else{
                  j21.innerHTML=o;
                  uno = true;
                }
                validaganador();
              }
        }

        // Fila 3
        j33.onclick = function(){
              var contenido = j33.innerHTML;
              if(contenido === " "){
                if(uno){
                  j33.innerHTML=x;
                  uno = false;
                }else{
                  j33.innerHTML=o;
                  uno = true;
                }
                validaganador();
              }
        }

        j32.onclick = function(){
              var contenido = j32.innerHTML;
              if(contenido === " "){
                if(uno){
                  j32.innerHTML=x;
                  uno = false;
                }else{
                  j32.innerHTML=o;
                  uno = true;
                }
                validaganador();
              }
        }

        j31.onclick = function(){
              var contenido = j31.innerHTML;
              if(contenido === " "){
                if(uno){
                  j31.innerHTML=x;
                  uno = false;
                }else{
                  j31.innerHTML=o;
                  uno = true;
                }
                validaganador();
              }
        }

};
