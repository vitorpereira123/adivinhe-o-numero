// geração do valor aleatório
var y = Math.floor(Math.random() * 10 + 1);

playername = localStorage.getItem("player_name");

var guess = 1;
// contagem de tentativas
// até acerto    
  
// função para o número enviado pelo usuário
function submit(){
    var x = document.getElementById("guessField").value;

    if(x == y){
        alert("PARABÉNS!!!"+playername+", você acertou em " + guess + " tentativa(s)! ");
        guess = 1;
    }
    
    else if(x > y){
        guess++;
        alert("opa, resposta errada!! tente um número menor");
    }else{
        guess++;
        alert("opa, resposta errada!! tente um número maior");
    }
}

function playAgain(){
    y = Math.floor(Math.random() * 10 + 1);
}