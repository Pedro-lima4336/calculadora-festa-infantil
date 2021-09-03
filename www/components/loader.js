window.onload = function(){
   const valor1 = document.querySelector("#valor1");

   var refrifloat = 0.6;

   var aguafloat = 0.2;

   var bolofloat = 0.1;

   var doceInt = 3;

   var salgadoInt = 10;

   const calcular = document.querySelector("#calcular");

   calcular.addEventListener("click", function(){
   let resultado = parseFloat(valor1.value) * parseFloat(refrifloat);
   document.querySelector("#result").value = resultado;
   });

  calcular.addEventListener("click", function(){
   let resultado = parseFloat(valor1.value) * parseFloat(aguafloat);
   document.querySelector("#result1").value = resultado;
   });

  calcular.addEventListener("click", function(){
   let resultado = parseFloat(valor1.value) * parseFloat(bolofloat);
   document.querySelector("#result2").value = resultado;
   });

  calcular.addEventListener("click", function(){
   let resultado = parseFloat(valor1.value) * parseInt(doceInt);
   document.querySelector("#result3").value = resultado;
   });

   calcular.addEventListener("click", function(){
   let resultado = parseFloat(valor1.value) * parseInt(salgadoInt);
   document.querySelector("#result4").value = resultado;
   });
  }
   