function calcularFuso(){

// Criar referencias aos Elementos da pagina html
let inHoraBrasil = document.getElementById("inHoraBrasil");
let outHoraFranca = document.getElementById("outHoraFranca");

// Obtem e converte o contrúso so campo inHoraBrasil
var horaBrasil = Number(inHoraBrasil.value);

// Se não preencheu ou Not-a-Number (NaN) 
if (inHoraBrasil.value ==  "" || isNaN (horaBrasil)) {
    alert("Informe a Hora no Brasil corretamete"); // exibe Alerta
    inHoraBrasil.focus();   // Posiciona o cursor em inHoraBrasil
        return;
    }

    let horaFranca = horaBrasil + 5;    // Calcula o Horário na França

// Se passar da 24hs na França...
    if(horaFranca > 24) {
        horaFranca = horaFranca - 24;   //...subtrai 24
    }

// Exibe resposta (Altera conteúdo do Elemento outHoraFrança)
    outHoraFranca.textContent = "Hora na França: " + horaFranca.toFixed(2);

}
// Cria uma referencia ao Elemento btExibir e registra evento associado a function 
let btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", calcularFuso);