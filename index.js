/*
function redireccionar(){
  window.locationf="index.html";
} 
setTimeout ("redireccionar()", 1); //tiempo expresado en milisegundos */

//window.locationf="index.html";

var porce = 0.54;
var comis = 0.3;

import './style.css';

funct resultado_bruto(monto){
  result_bruto = monto + (monto * porce) + comis;
  result_comis = (monto * porce) + comis;
  document.getElementById('rebruto').placeholder = result_bruto;
  document.getElementById('comision').placeholder = result_comis;
}

document.getElementById('operacion').onchange = function () {
  if(document.getElementById('operacion').value == 'r'){
   document.getElementById('neto').innerHTML = 'Monto neto que se desea recibir:';
   document.getElementById('bruto').innerHTML = 'Monto bruto que le deberán enviar:';
   resultado_bruto(document.getElementById('monto').value);
  }
  else{
    document.getElementById('neto').innerHTML = 'Monto neto que se desea enviar:';
    document.getElementById('bruto').innerHTML = 'Monto bruto que deberá enviar:';
    resultado_bruto(document.getElementById('monto').value);
  }
}