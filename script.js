
let ore=0;
let minuti=0;
let secondi=0;
let decimi=0;
let visualizzazione="";
let contatore_intertempi=0;
let stop=1; //0=attivo 1=fermo

function avvia(){
if (stop==1){
stop=0;
cronometro();}}

function cronometro(){
  if (stop==0) {
    decimi+=1;
    if (decimi>9) {
      decimi=0;
      secondi+=1;
    }
    if (secondi>59) {
      secondi=0;
      minuti+=1;
    }
    if (minuti>59) {
      minuti=0;
      ore+=1;
    }
    if (ore<10) {
      visualizzazione="0" + ore;
  } else {
      visualizzazione=ore;
    }
    if (minuti<10) {
      visualizzazione=visualizzazione + ":0" + minuti;
  } else {
      visualizzazione=visualizzazione + ":" + minuti;
  }
    if (secondi<10) {
      visualizzazione=visualizzazione + ":0" + secondi;
  } else {
      visualizzazione=visualizzazione + ":" + secondi;
  }
    visualizzazione=visualizzazione;
    document.getElementById("chronometre").innerText = visualizzazione;
    setTimeout("cronometro()", 100);
  }
}