function inputs(){
    return{
        inputNome: document.getElementById("nome"),
        inputSobrenome: document.getElementById("sobrenome"),
        inputEndereco: document.getElementById("endereco"),
        inputTelefone: document.getElementById("telefone")
    };
}
function getBotoes() {
    return {
        btIncluir: document.getElementById("incluir"),
        btEditar: document.getElementById("editar"),
        btSalvar: document.getElementById("salvar"),
        btExcluir: document.getElementById("excluir"),
        btCancelar: document.getElementById("cancelar")
    };
}

let vPessoas = [0];
let oPessoa = {
    nome:"",
    sobrenome:"",
    endereco:"",
    telefone:""
}

window.onload = function (){
    const {btIncluir, btEditar, btSalvar, btExcluir, btCancelar} = getBotoes();

    btIncluir.style.display = "remove";
    btEditar.style.display = "none";
    btSalvar.style.display = "none";
    btExcluir.style.display = "none";
    btCancelar.style.display = "none";
}

function incluir(){
    const {btIncluir, btEditar, btSalvar, btExcluir, btCancelar} = getBotoes();
    const {inputNome, inputSobrenome, inputEndereco, inputTelefone} = inputs();

    btIncluir.style.display = "none";
    btEditar.style.display = "block";
    btSalvar.style.display = "block";
    btExcluir.style.display = "block";
    btCancelar.style.display = "block";

    inputNome.disabled = false;
    inputSobrenome.disabled = false;
    inputEndereco.disabled = false;
    inputTelefone.disabled = false;
}

function cancelar(){
    const {btIncluir, btEditar, btSalvar, btExcluir, btCancelar} = getBotoes();
    const {inputNome, inputSobrenome, inputEndereco, inputTelefone} = inputs();

    btIncluir.style.display = "block";
    btEditar.style.display = "none";
    btSalvar.style.display = "none";
    btExcluir.style.display = "none";
    btCancelar.style.display = "none";

    inputNome.disabled = true;
    inputSobrenome.disabled = true;
    inputEndereco.disabled = true;
    inputTelefone.disabled = true;

    inputNome.value = "";
    inputSobrenome.value = "";
    inputEndereco.value = "";
    inputTelefone.value = "";
}

function salvar(){
    const {inputNome, inputSobrenome, inputEndereco, inputTelefone} = inputs();

    if(inputNome.value == "" && inputSobrenome.value == "" && inputEndereco.value == "" && inputTelefone.value == ""){

        inputNome.style.border = "1px solid red";
        inputSobrenome.style.border = "1px solid red";
        inputEndereco.style.border = "1px solid red";
        inputTelefone.style.border = "1px solid red";

        inputNome.style.boxShadow = " 0 0 10px red"; 
        inputSobrenome.style.boxShadow = " 0 0 10px red"; 
        inputEndereco.style.boxShadow = " 0 0 10px red"; 
        inputTelefone.style.boxShadow = " 0 0 10px red";

        inputNome.placeholder = "* Campo obrigatorio";
        inputSobrenome.placeholder = "* Campo obrigatorio";
        inputEndereco.placeholder = "* Campo obrigatorio";
        inputTelefone.placeholder = "* Campo obrigatorio";

        inputNome.addEventListener("input", () => {
            inputNome.style.border = "";
            inputNome.style.boxShadow = "";
            inputNome.placeholder = "";
        })

        inputSobrenome.addEventListener("input", () => {
            inputSobrenome.style.border = "";
            inputSobrenome.style.boxShadow = "";
            inputSobrenome.placeholder = "";
        })

        inputEndereco.addEventListener("input", () => {
            inputEndereco.style.border = "";
            inputEndereco.style.boxShadow = "";
            inputEndereco.placeholder = "";
        })

        inputTelefone.addEventListener("input", () => {
            inputTelefone.style.border = "";
            inputTelefone.style.boxShadow = "";
            inputTelefone.placeholder = "";
        })

        
    }

    oPessoa = {
        nome: inputNome.value,
        sobrenome: inputSobrenome.value,
        endereco: inputEndereco.value,
        telefone: inputTelefone.value
    }

    vPessoas.push(oPessoa);
    console.log(vPessoas);

    inputNome.value = "";
    inputSobrenome.value = "";
    inputEndereco.value = "";
    inputTelefone.value = "";
}

function getVisor(){
    return{
        visorNome: document.getElementById("visorNome"),
        visorEndereco: document.getElementById("visorEndereco"),
        visorTelefone: document.getElementById("visorTelefone")
    }
}
let Indice = 1;

function visualizar(){
    const {visorNome, visorEndereco, visorTelefone} = getVisor();

    let display1 = document.getElementById("container1");
    display1.style.display = "none";

    let display2 = document.getElementById("container2");
    display2.style.display = "flex";

    let botao = document.getElementById("botao3");
    botao.style.display = "none";

    visorNome.innerHTML = `${vPessoas[Indice].nome} ${vPessoas[Indice].sobrenome}`;
    visorEndereco.innerHTML = vPessoas[Indice].endereco;
    visorTelefone.innerHTML = vPessoas[Indice].telefone;

}


function proximo(){
    const {visorNome, visorEndereco, visorTelefone} = getVisor();
    Indice++;
    
    if(Indice < vPessoas.length){
        visorNome.innerHTML = vPessoas[Indice].nome + " " + vPessoas[Indice].sobrenome;
        visorEndereco.innerHTML = vPessoas[Indice].endereco;
        visorTelefone.innerHTML = vPessoas[Indice].telefone;
    }
    else{
        alert("Fim do cadastro");
    }    
}

let Indice2 = vPessoas.length - 1;

function anterior(){
    const {visorNome, visorEndereco, visorTelefone} = getVisor();
    
    visorNome.innerHTML = vPessoas[Indice2].nome + " " + vPessoas[Indice2].sobrenome;
    visorEndereco.innerHTML = vPessoas[Indice2].endereco;
    visorTelefone.innerHTML = vPessoas[Indice2].telefone;

    Indice2--;
}

function voltar(){
    let display1 = document.getElementById("container1");
    display1.style.display = "flex";
    
    let display2 = document.getElementById("container2");
    display2.style.display = "none";

    let botao = document.getElementById("botao3");
    botao.style.display = "flex";
}