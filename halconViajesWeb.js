
// document.addEventListener("DOMContentLoaded", function() {

//     var formulario = document.getElementById('formulario');
//     formulario.onsubmit = function(e) {
//       e.preventDefault();
//       var formato = new FormData(this);
//       var formatoJson = {};
//       for (var [k, v] of formato) {
//         formatoJson[k] = v;

        
        
//       }
      
//       console.log(formatoJson);

//     }
  
//   });


  var formulariosInfo =[
    {"origen": "Madrid",
     "pasajeros": 1,
      "destino": "Rumania"
    },
    {"origen": "Barcelona",
     "pasajeros": 2,
      "destino": "Mexico"
    },
    {"origen": "Ruanda",
     "pasajeros": 3,
      "destino": "EE,UU"
    }

  ];
console.log(formulariosInfo)


  
  



//   var origen,pasajeros,destino;

//   function guardarDatos(){
//       origen = document.getElementById("origen").value;
//       pasjeros = document.getElementById("pasajeros").value;
//       destino = document.getElementById("destino").value;

//       var arr = [origen,pasajeros,destino];
//       return arr;
//   }

//   var input = document.getElementsByTagName("INPUT");

//   for (i=0; i<input.length; i++) {
//       input[i].addEventListener("change", function(){
//           resultado = guardarDatos();
//           console.log(resultado);
//       });
//   };

  