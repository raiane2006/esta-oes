const aplausos = document.querySelector("#som_tecla_aplausos");
function tocaSom(aplausos){
    alert(aplausos);
}
function digaSeuNome(Raiane){
    alert(Raiane);
}
digaSeuNome("Meu nome é Raiane");

let comando ="tocar"
if (comando =="tocar"){
    alert("Áudio pronto para tocar");

}
else{
    alert("O áudio não está pronto");

}
const buttons = document.querySelectorAll("button");

let contador =0;
while(contador<buttons.length){
    buttons[contador].textContent = contador;
    contador = contador+1;
}
