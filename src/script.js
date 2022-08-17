const cepForm = document.getElementById("cep-form");
const infoBox = document.getElementsByClassName("info-box")[0];
const ddd = document.getElementById("ddd");
const logradouro = document.getElementById("logradouro");
const bairro = document.getElementById("bairro");
const localidade = document.getElementById("localidade");
const uf = document.getElementById("uf");

cepForm.addEventListener("submit", function(e){ handleSubmit(e) });

async function handleSubmit(event){
    event.preventDefault();
    const input = cepForm[0];
    const inputValue = input.value;
    let response = {}
    let gotError = false;
    await fetch(`https://viacep.com.br/ws/${inputValue}/json`)
            .then(res => res.json())
            .then(res => {response = res; console.log(response)})
            .catch(error => {
                gotError = true;
                console.log(error);
            });
    if(!response.erro){
        ddd.innerText = response.ddd;
        logradouro.innerText = response.logradouro;
        bairro.innerText = response.bairro;
        localidade.innerText = response.localidade;
        uf.innerText = response.uf;
        infoBox.style.opacity = 1;
    }
}