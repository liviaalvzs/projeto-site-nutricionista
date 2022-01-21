// mudando o título do site 
var titulo = document.querySelector(".titulo");
titulo.textContent = "Doutora Maria (Nutricionista)";

// coletando os dados de peso e altura dos pacientes
var pacientes = document.querySelectorAll(".paciente"); // pega os valores que possuem classe .paciente (transformando-os em uma array)

for(var i = 0; i < pacientes.length; i++){ // passa pr cada paciente
    var paciente = pacientes[i]; // transforma o paciente em análise em uma variável 'paciente'

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    // calculando e exibindo o IMC do paciente
    var tdImc = paciente.querySelector(".info-imc");
    var pesovalido = validaPeso(peso);
    var alturavalida = validaAltura(altura);

    if(!pesovalido){ 
    tdImc.textContent = "Peso Inválido";
    console.log("Peso inválido")
    pesovalido = false;
    paciente.classList.add("paciente-invalido") // muda cor do background
    }

    if(!alturavalida){
    tdImc.textContent = "Altura Inválida";
    console.log("Altura Inválida")
    alturavalida = false;
    paciente.classList.add("paciente-invalido") // muda cor do background
    }

    if (alturavalida && pesovalido){
    var imc = calculaImc(peso,altura);
    tdImc.textContent = imc;
    } 

}

function validaPeso(peso){
    if(peso >= 0 && peso < 1000){
        return true;
    }else{
        return false;
    }
}

function validaAltura(altura){
    if(altura >= 0 && altura <= 3.0){
        return true;
    }else{
        return false;
    }
}

function calculaImc(peso,altura){
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2); // limita as casas decimais
}

