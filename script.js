function geradoor() {
   const inp1 = Math.ceil(document.querySelector('.inp1').value)
   const inp2 = Math.floor(document.querySelector('.inp2').value)
   const result = Math.floor(Math.random() * (inp1 - inp2) + inp2);

   const resultado = document.querySelector('.result-number')
  
 resultado.innerHTML = result
  
  }

