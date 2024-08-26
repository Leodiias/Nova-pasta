function geradoor() {
   const inp1 = Math.ceil(document.querySelector('.inp1').value)
   const inp2 = Math.floor(document.querySelector('.inp2').value)
   const result = Math.floor(Math.random() * (inp1 - inp2) + inp2);

   if (inp1 >= inp2) {
    alert("O numero minimo tem que ser menor que o numero máximo")
  }

   else {
   const resultado = document.querySelector('.result-number')
  
 resultado.innerHTML = result
   }
  }

