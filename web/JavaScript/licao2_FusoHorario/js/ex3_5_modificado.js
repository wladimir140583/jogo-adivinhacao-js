function calcularFuso(){

    // Criar referencias aos Elementos da pagina html
    let inHoraBrasil = document.getElementById("inHoraBrasil");
    let outHoraFranca = document.getElementById("outHoraFranca");

    // Obtem o valor digitado
    let horarioDigitado = inHoraBrasil.value.trim();

    // Valida se foi preenchido
    if (horarioDigitado == "") {
        alert("Informe a Hora no Brasil corretamente"); 
        inHoraBrasil.focus();
        return;
    }

    // Variáveis para horas e minutos
    let horas, minutos;

    // Verifica se tem ":" (formato HH:MM)
    if (horarioDigitado.includes(":")) {
        let partes = horarioDigitado.split(":");
        horas = Number(partes[0]);
        minutos = Number(partes[1]);
    } 
    // Verifica se tem "." ou "," (formato decimal como 11.5 ou 11,5)
    else if (horarioDigitado.includes(".") || horarioDigitado.includes(",")) {
        let horaDecimal = Number(horarioDigitado.replace(",", "."));
        horas = Math.floor(horaDecimal);
        minutos = Math.round((horaDecimal - horas) * 60);
    }
    // Apenas hora inteira
    else {
        horas = Number(horarioDigitado);
        minutos = 0;
    }

    // Valida se os números são válidos
    if (isNaN(horas) || isNaN(minutos) || horas < 0 || horas > 23 || minutos < 0 || minutos > 59) {
        alert("Informe a Hora no Brasil corretamente (Ex: 14:30 ou 14.5 ou 14)");
        inHoraBrasil.focus();
        return;
    }

    // Adiciona 5 horas (diferença de fuso)
    horas = horas + 5;

    // Se passar de 24 horas
    if (horas >= 24) {
        horas = horas - 24;
    }

    // Formata a saída
    let minutosFormatado = minutos < 10 ? "0" + minutos : minutos;
    outHoraFranca.textContent = "Hora na França: " + horas + ":" + minutosFormatado;
}

// Cria uma referencia ao Elemento btExibir e registra evento associado a function 
let btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", calcularFuso);