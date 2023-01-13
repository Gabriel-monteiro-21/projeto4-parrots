prompt("Com quantas cartas você quer jogar?");
alert("Obrigado por ter digitado");
function cartaClicavel(clique){
    console.log(clique)
    clique=document.querySelector('.verso').classList.toggle('card');
}